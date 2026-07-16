"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { allDoctors } from "@/lib/doctors";

// Departments matching doctors.js strings and translations
const departments = [
  { id: "all", name: "All Specialties", nameHi: "सभी विभाग", icon: "fa-solid fa-users" },
  { id: "General Medicine", name: "General Medicine", nameHi: "जनरल मेडिसिन्स", icon: "fa-solid fa-stethoscope" },
  { id: "Chest Physician", name: "Chest Physician", nameHi: "चेस्ट फिजिशियन", icon: "fa-solid fa-lungs" },
  { id: "Orthopedic Surgeon", name: "Orthopedic Surgeon", nameHi: "ओर्थपेडीक सर्जन", icon: "fa-solid fa-bone" },
  { id: "Spine Surgeon", name: "Spine Surgeon", nameHi: "स्पाइन सर्जन", icon: "fa-solid fa-person-rays" },
  { id: "Gynecology", name: "Gynecology", nameHi: "गयनेकोलॉजिस्ट", icon: "fa-solid fa-venus" },
  { id: "General & Lap. Surgeon", name: "General & Lap. Surgeon", nameHi: "जनरल & लपरसकोपिक सर्जन", icon: "fa-solid fa-scalpel" },
  { id: "Pediatrician", name: "Pediatrician", nameHi: "पीडियाट्रिशियन", icon: "fa-solid fa-baby" },
  { id: "Gastroenterologist", name: "Gastroenterologist", nameHi: "गैस्ट्रोएन्टेरोलॉजिस्ट", icon: "fa-solid fa-stomach" },
  { id: "Nephrologist", name: "Nephrologist", nameHi: "नेफ्रोलॉजिस्ट", icon: "fa-solid fa-kidneys" },
  { id: "Urologist", name: "Urologist", nameHi: "यूरोलॉजिस्ट", icon: "fa-solid fa-droplet" },
  { id: "E.N.T", name: "E.N.T", nameHi: "इ एन टी", icon: "fa-solid fa-ear" },
  { id: "Cardiologist", name: "Cardiologist", nameHi: "कार्डियोलॉजिस्ट", icon: "fa-solid fa-heart-pulse" },
  { id: "Paediatric Cardiologist", name: "Paediatric Cardiologist", nameHi: "पेडियेट्रिक कार्डियोलॉजिस्ट", icon: "fa-solid fa-heart" },
  { id: "Dermatologist", name: "Dermatologist", nameHi: "डर्मेटोलॉजिस्ट", icon: "fa-solid fa-hand-dots" },
  { id: "Plastic Surgeon", name: "Plastic Surgeon", nameHi: "प्लास्टिक सर्जन", icon: "fa-solid fa-hand-sparkles" },
  { id: "CVTS Surgeon", name: "CVTS Surgeon", nameHi: "सी वि टी एस सर्जन", icon: "fa-solid fa-heart-circle-plus" },
  { id: "Psychiatrist", name: "Psychiatrist", nameHi: "साइकेट्रिस्ट", icon: "fa-solid fa-brain" },
  { id: "Onco Physician", name: "Onco Physician", nameHi: "ओंको फिजिशियन", icon: "fa-solid fa-microscope" },
  { id: "Onco Surgeon", name: "Onco Surgeon", nameHi: "ओंको सर्जन", icon: "fa-solid fa-syringe" },
  { id: "Haematologist", name: "Haematologist", nameHi: "हेमाटोलॉजिस्ट", icon: "fa-solid fa-vials" },
  { id: "Haemat-Oncologist", name: "Haemat-Oncologist", nameHi: "हेमट - ऑन्कोलॉजिस्ट", icon: "fa-solid fa-flask-vial" },
  { id: "Neuro Physician", name: "Neuro Physician", nameHi: "न्यूरो - फिजिशियन", icon: "fa-solid fa-brain" },
  { id: "Neuro Surgeon", name: "Neuro Surgeon", nameHi: "न्यूरो - सर्जन", icon: "fa-solid fa-head-side-cough" },
  { id: "Maxillo-Facial Surgeon", name: "Maxillo-Facial Surgeon", nameHi: "मैक्सिलो फेसिअल सर्जन", icon: "fa-solid fa-tooth" },
  { id: "Ophthalmologist", name: "Ophthalmologist", nameHi: "ऑप्थल्मोलॉजिस्ट", icon: "fa-solid fa-eye" },
];

export default function TimetablePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all"); // 'all', 'OPD', 'IPD'

  // Filter Doctors
  const filteredDoctors = allDoctors.filter((doc) => {
    // 1. Search filter
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.departmentHi.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Department filter
    const matchesDept = selectedDepartment === "all" || doc.department === selectedDepartment;

    // 3. Type filter
    let matchesType = true;
    if (selectedType === "OPD") {
      matchesType = doc.type.toLowerCase().includes("opd");
    } else if (selectedType === "IPD") {
      matchesType = doc.type.toLowerCase().includes("ipd");
    }

    return matchesSearch && matchesDept && matchesType;
  });

  // Helper for badges
  const getTypeBadgeClass = (type) => {
    if (type.includes("OPD") && type.includes("IPD")) return "type-both";
    if (type.includes("OPD")) return "type-opd";
    return "type-ipd";
  };

  return (
    <>
      <Header />

      <Breadcrumb title="Doctors Timetable" pageName="Timetable" />

      <section className="timetable-section">
        <div className="container">
          
          {/* Filters Card */}
          <div className="filters-card mb-24" data-aos="fade-up" data-aos-duration="300">
            <div className="filters-row">
              
              {/* Search Bar */}
              <div className="search-field-container">
                <label className="filter-label">Search Doctor / Specialty</label>
                <div className="search-box-wrap">
                  <input
                    type="text"
                    className="search-input-field"
                    placeholder="Enter name, specialty, qualification..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <i className="fa-solid fa-magnifying-glass search-field-icon"></i>
                  {searchQuery && (
                    <button
                      className="clear-search-btn"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>
              </div>

              {/* Consultation Type Selector */}
              <div className="type-filter-container">
                <label className="filter-label">Consultation Type</label>
                <div className="segment-control">
                  <button
                    className={`segment-btn ${selectedType === "all" ? "active" : ""}`}
                    onClick={() => setSelectedType("all")}
                  >
                    All Types
                  </button>
                  <button
                    className={`segment-btn ${selectedType === "OPD" ? "active" : ""}`}
                    onClick={() => setSelectedType("OPD")}
                  >
                    OPD
                  </button>
                  <button
                    className={`segment-btn ${selectedType === "IPD" ? "active" : ""}`}
                    onClick={() => setSelectedType("IPD")}
                  >
                    IPD
                  </button>
                </div>
              </div>

            </div>

            {/* Specialties Scroll Tabs */}
            <div className="dept-filter-section mt-24">
              <label className="filter-label mb-8">Filter by Department</label>
              <div className="dept-tabs-wrapper">
                <div className="dept-tabs-scroll">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      className={`dept-tab-pill-btn ${selectedDepartment === dept.id ? "active" : ""}`}
                      onClick={() => setSelectedDepartment(dept.id)}
                    >
                      <i className={`${dept.icon} tab-btn-icon`}></i>
                      <span className="tab-btn-text">
                        <span className="tab-btn-en">{dept.name}</span>
                        <span className="tab-btn-hi">{dept.nameHi}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Results count & reset option */}
          <div className="results-meta mb-16" data-aos="fade-up" data-aos-duration="400">
            <span className="results-count">
              Found <strong>{filteredDoctors.length}</strong> matching schedule{filteredDoctors.length === 1 ? "" : "s"}
            </span>
            {(searchQuery || selectedDepartment !== "all" || selectedType !== "all") && (
              <button
                className="reset-all-filters-btn"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDepartment("all");
                  setSelectedType("all");
                }}
              >
                Reset Filters <i className="fa-solid fa-rotate-right"></i>
              </button>
            )}
          </div>

          {/* Main Table / Grid Container */}
          <div className="timetable-container" data-aos="fade-up" data-aos-duration="500">
            {filteredDoctors.length > 0 ? (
              <>
                {/* Desktop Responsive Table View */}
                <div className="desktop-table-view">
                  <table className="timetable-table">
                    <thead>
                      <tr>
                        <th>Doctor Name & Qualification</th>
                        <th>Department</th>
                        <th>Days Available</th>
                        <th>Timing</th>
                        <th>Consultation Type</th>
                        <th style={{ width: "160px", textAlign: "right" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDoctors.map((doc) => (
                        <tr key={doc.id} className="timetable-row">
                          <td>
                            <div className="doctor-info-cell">
                              <span className="doc-name">{doc.name}</span>
                              <span className="doc-qual">{doc.qualification}</span>
                            </div>
                          </td>
                          <td>
                            <span className="dept-cell-badge">
                              {doc.department} <span className="dept-cell-hi">({doc.departmentHi})</span>
                            </span>
                          </td>
                          <td>
                            <div className="info-badge-day">
                              <i className="fa-solid fa-calendar-days text-indigo me-2"></i>
                              {doc.days}
                            </div>
                          </td>
                          <td>
                            <div className="info-badge-time">
                              <i className="fa-solid fa-clock text-indigo me-2"></i>
                              <span className="timing-val">{doc.timing}</span>
                            </div>
                          </td>
                          <td>
                            <span className={`type-badge-style ${getTypeBadgeClass(doc.type)}`}>
                              {doc.type}
                            </span>
                          </td>
                          <td style={{ textAlign: "right" }}>
                            <Link
                              href={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                              className="table-action-book-btn"
                            >
                              Book Now
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View (renders instead of table on mobile screens) */}
                <div className="mobile-cards-view">
                  <div className="row gy-16">
                    {filteredDoctors.map((doc) => (
                      <div key={doc.id} className="col-12">
                        <div className="mobile-doctor-schedule-card">
                          <div className="card-top-header">
                            <div>
                              <span className="card-dept-label">
                                {doc.department} <span className="card-dept-label-hi">({doc.departmentHi})</span>
                              </span>
                              <h3 className="card-doctor-name">{doc.name}</h3>
                              <span className="card-doctor-qual">{doc.qualification}</span>
                            </div>
                            <span className={`type-badge-style ${getTypeBadgeClass(doc.type)}`}>
                              {doc.type}
                            </span>
                          </div>

                          <div className="card-schedule-details">
                            <div className="schedule-detail-item">
                              <i className="fa-solid fa-calendar-day icon-muted"></i>
                              <div>
                                <span className="detail-label">Days</span>
                                <span className="detail-value">{doc.days}</span>
                              </div>
                            </div>
                            <div className="schedule-detail-item">
                              <i className="fa-solid fa-clock icon-muted"></i>
                              <div>
                                <span className="detail-label">Timing</span>
                                <span className="detail-value highlight-time">{doc.timing}</span>
                              </div>
                            </div>
                          </div>

                          <div className="card-actions-wrapper">
                            <Link
                              href={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                              className="card-book-btn"
                            >
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="timetable-empty-card">
                <div className="empty-icon-wrap">
                  <i className="fa-solid fa-calendar-xmark text-muted"></i>
                </div>
                <h3 className="empty-title">No Timetable Schedules Found</h3>
                <p className="empty-subtitle">
                  No doctors matched your criteria. Try adjusting your search keywords, department filter, or consultation type.
                </p>
                <button
                  className="reset-filters-hero-btn"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDepartment("all");
                    setSelectedType("all");
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Styles Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Main Section Container */
        .timetable-section {
          padding-top: 60px;
          padding-bottom: 90px;
          background-color: #F5F6F8 !important;
          min-height: 70vh;
        }

        /* Spacing utilities */
        .mb-8 { margin-bottom: 8px !important; }
        .mb-16 { margin-bottom: 16px !important; }
        .mb-24 { margin-bottom: 24px !important; }
        .mt-24 { margin-top: 24px !important; }
        .me-2 { margin-right: 8px !important; }
        .text-indigo { color: #6366F1 !important; }

        /* Typography & Layout Rules */
        .filter-label {
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          color: #6B7280 !important;
          margin-bottom: 6px;
          display: block;
        }

        /* Filters Card */
        .filters-card {
          background: #ffffff !important;
          border-radius: 12px !important;
          border: 1px solid #E5E7EB !important;
          padding: 24px !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02) !important;
          box-sizing: border-box;
        }

        .filters-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .search-field-container {
          flex: 1 1 350px;
          position: relative;
        }
        .type-filter-container {
          flex: 0 0 280px;
        }

        @media (max-width: 768px) {
          .type-filter-container {
            flex: 1 1 280px;
          }
        }

        /* Search input styling */
        .search-box-wrap {
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }
        .search-input-field {
          width: 100% !important;
          box-sizing: border-box;
          padding: 10px 14px 10px 38px !important;
          border-radius: 8px !important;
          border: 1px solid #E5E7EB !important;
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: 14px !important;
          color: #111827 !important;
          background-color: #F9FAFB !important;
          outline: none !important;
          transition: all 0.2s ease !important;
        }
        .search-input-field:focus {
          border-color: #6366F1 !important;
          background-color: #ffffff !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12) !important;
        }
        .search-field-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9CA3AF !important;
          font-size: 14px !important;
          pointer-events: none;
        }
        .clear-search-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none !important;
          border: none !important;
          color: #6B7280 !important;
          cursor: pointer;
          padding: 4px !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Segment Control (Consultation Type Selector) */
        .segment-control {
          display: flex;
          background-color: #F3F4F6 !important;
          padding: 3px !important;
          border-radius: 8px !important;
          border: 1px solid #E5E7EB !important;
          width: 100%;
        }
        .segment-btn {
          flex: 1;
          border: none !important;
          background: transparent !important;
          padding: 7px 12px !important;
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          color: #4B5563 !important;
          border-radius: 6px !important;
          cursor: pointer !important;
          transition: all 0.15s ease !important;
          text-align: center;
        }
        .segment-btn.active {
          background-color: #ffffff !important;
          color: #4F46E5 !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
        }

        /* Scrollable Tab Bar */
        .dept-tabs-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .dept-tabs-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
          scroll-behavior: smooth;
        }
        .dept-tabs-scroll::-webkit-scrollbar {
          height: 5px;
        }
        .dept-tabs-scroll::-webkit-scrollbar-track {
          background: #F3F4F6;
          border-radius: 4px;
        }
        .dept-tabs-scroll::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 4px;
        }

        /* Dept Tab Pill Buttons */
        .dept-tab-pill-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px !important;
          background-color: #F3F4F6 !important;
          border: 1px solid transparent !important;
          border-radius: 20px !important;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease !important;
          flex-shrink: 0;
          text-align: left;
        }
        .tab-btn-icon {
          font-size: 13px !important;
          color: #6B7280 !important;
        }
        .tab-btn-text {
          display: flex;
          flex-direction: column;
        }
        .tab-btn-en {
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          color: #4B5563 !important;
          line-height: 1.2 !important;
        }
        .tab-btn-hi {
          font-size: 9px !important;
          color: #9CA3AF !important;
          margin-top: 1px !important;
          font-weight: 400 !important;
        }
        .dept-tab-pill-btn:hover {
          background-color: #E5E7EB !important;
        }
        .dept-tab-pill-btn.active {
          background-color: #6366F1 !important;
          border-color: #4F46E5 !important;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2) !important;
        }
        .dept-tab-pill-btn.active .tab-btn-icon {
          color: #ffffff !important;
        }
        .dept-tab-pill-btn.active .tab-btn-en {
          color: #ffffff !important;
        }
        .dept-tab-pill-btn.active .tab-btn-hi {
          color: rgba(255, 255, 255, 0.75) !important;
        }

        /* Results Metadata Row */
        .results-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px;
        }
        .results-count {
          font-size: 14px !important;
          color: #6B7280 !important;
          font-family: 'Inter', system-ui, sans-serif !important;
        }
        .results-count strong {
          color: #111827 !important;
        }
        .reset-all-filters-btn {
          background: none !important;
          border: none !important;
          color: #4F46E5 !important;
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          cursor: pointer;
          padding: 4px 8px !important;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.2s;
        }
        .reset-all-filters-btn:hover {
          opacity: 0.8;
        }

        /* Table Card Container */
        .timetable-container {
          background: #ffffff !important;
          border-radius: 12px !important;
          border: 1px solid #E5E7EB !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02) !important;
          overflow: hidden !important;
          box-sizing: border-box;
        }

        /* Table Styles (Desktop View) */
        .desktop-table-view {
          display: block;
          overflow-x: auto;
          width: 100%;
        }
        .timetable-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .timetable-table th {
          background-color: #F9FAFB !important;
          color: #4B5563 !important;
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          padding: 14px 20px !important;
          border-bottom: 1px solid #E5E7EB !important;
        }
        .timetable-row {
          border-bottom: 1px solid #E5E7EB !important;
          transition: background-color 0.15s ease !important;
        }
        .timetable-row:hover {
          background-color: #F9FAFB !important;
        }
        .timetable-row:last-child {
          border-bottom: none !important;
        }
        .timetable-row td {
          padding: 14px 20px !important;
          vertical-align: middle !important;
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: 14px !important;
          color: #111827 !important;
        }

        /* Doctor Info Cell */
        .doctor-info-cell {
          display: flex;
          flex-direction: column;
        }
        .doc-name {
          font-weight: 600 !important;
          color: #111827 !important;
        }
        .doc-qual {
          font-size: 11px !important;
          color: #6B7280 !important;
          margin-top: 2px !important;
        }

        /* Badges & Accents in cells */
        .dept-cell-badge {
          font-weight: 500 !important;
          color: #4B5563 !important;
        }
        .dept-cell-hi {
          color: #9CA3AF !important;
          font-weight: 400 !important;
        }
        .info-badge-day, .info-badge-time {
          display: inline-flex;
          align-items: center;
          font-weight: 500 !important;
          color: #374151 !important;
        }
        .timing-val {
          font-weight: 600 !important;
        }

        /* Color Badges for Service type */
        .type-badge-style {
          display: inline-block !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          padding: 4px 10px !important;
          border-radius: 20px !important;
          text-align: center !important;
        }
        .type-badge-style.type-both {
          background-color: #EEF2FF !important;
          color: #4F46E5 !important;
        }
        .type-badge-style.type-opd {
          background-color: #ECFDF5 !important;
          color: #047857 !important;
        }
        .type-badge-style.type-ipd {
          background-color: #FFFBEB !important;
          color: #B45309 !important;
        }

        /* Table Action Button */
        .table-action-book-btn {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 8px 16px !important;
          background-color: #6366F1 !important;
          color: #ffffff !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          font-size: 12px !important;
          text-decoration: none !important;
          transition: background-color 0.2s ease !important;
          white-space: nowrap;
        }
        .table-action-book-btn:hover {
          background-color: #4F46E5 !important;
        }

        /* Mobile Card View styles */
        .mobile-cards-view {
          display: none;
          padding: 16px !important;
        }
        .mobile-doctor-schedule-card {
          background: #ffffff !important;
          border: 1px solid #E5E7EB !important;
          border-radius: 12px !important;
          padding: 16px !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02) !important;
        }
        .card-top-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px dashed #E5E7EB !important;
          padding-bottom: 12px !important;
          margin-bottom: 12px !important;
        }
        .card-dept-label {
          display: block;
          font-size: 11px !important;
          font-weight: 700 !important;
          color: #6366F1 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          margin-bottom: 4px !important;
        }
        .card-dept-label-hi {
          color: #9CA3AF !important;
          text-transform: none !important;
          font-weight: 400 !important;
        }
        .card-doctor-name {
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #111827 !important;
          margin: 0 !important;
        }
        .card-doctor-qual {
          font-size: 12px !important;
          color: #6B7280 !important;
          display: block;
          margin-top: 2px !important;
        }
        
        .card-schedule-details {
          display: flex;
          flex-direction: column;
          gap: 10px !important;
          margin-bottom: 16px !important;
        }
        .schedule-detail-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .icon-muted {
          font-size: 14px !important;
          color: #9CA3AF !important;
          width: 16px;
          text-align: center;
        }
        .detail-label {
          display: block;
          font-size: 10px !important;
          text-transform: uppercase !important;
          color: #9CA3AF !important;
          font-weight: 600 !important;
          line-height: 1.2 !important;
        }
        .detail-value {
          font-size: 13px !important;
          color: #374151 !important;
          font-weight: 500 !important;
        }
        .highlight-time {
          font-weight: 700 !important;
          color: #111827 !important;
        }

        .card-actions-wrapper {
          display: block;
        }
        .card-book-btn {
          display: flex !important;
          align-items: center;
          justify-content: center;
          width: 100% !important;
          padding: 10px !important;
          background-color: #6366F1 !important;
          color: #ffffff !important;
          border-radius: 8px !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          transition: background-color 0.2s ease !important;
        }
        .card-book-btn:hover {
          background-color: #4F46E5 !important;
        }

        /* Empty State */
        .timetable-empty-card {
          text-align: center !important;
          padding: 60px 20px !important;
        }
        .timetable-empty-card .empty-icon-wrap {
          font-size: 44px !important;
          color: #9CA3AF !important;
          margin-bottom: 16px !important;
        }
        .timetable-empty-card .empty-title {
          font-size: 18px !important;
          font-weight: 700 !important;
          color: #111827 !important;
          margin-bottom: 8px !important;
        }
        .timetable-empty-card .empty-subtitle {
          font-size: 14px !important;
          color: #6B7280 !important;
          max-width: 460px !important;
          margin: 0 auto 24px !important;
          line-height: 1.5 !important;
        }
        .reset-filters-hero-btn {
          padding: 10px 20px !important;
          background-color: #6366F1 !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 8px !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          cursor: pointer;
          transition: background-color 0.2s ease !important;
        }
        .reset-filters-hero-btn:hover {
          background-color: #4F46E5 !important;
        }

        /* Responsive Breakpoint */
        @media (max-width: 991px) {
          .desktop-table-view {
            display: none !important;
          }
          .mobile-cards-view {
            display: block !important;
          }
          .timetable-section {
            padding-top: 40px !important;
            padding-bottom: 60px !important;
          }
        }
      `}} />

      <Footer />
    </>
  );
}
