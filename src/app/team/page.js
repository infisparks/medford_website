"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { allDoctors } from "@/lib/doctors";

// Department definitions with icons and labels
const departments = [
  { id: "all", name: "All Doctors", nameHi: "सभी डॉक्टर्स", icon: "fa-solid fa-users" },
  { id: "general-medicine", name: "General Medicine", nameHi: "जनरल मेडिसिन्स", icon: "fa-solid fa-stethoscope" },
  { id: "chest-physician", name: "Chest Physician", nameHi: "चेस्ट फिजिशियन", icon: "fa-solid fa-lungs" },
  { id: "orthopedic-surgeon", name: "Orthopedic Surgeon", nameHi: "ओर्थपेडीक सर्जन", icon: "fa-solid fa-bone" },
  { id: "spine-surgeon", name: "Spine Surgeon", nameHi: "स्पाइन सर्जन", icon: "fa-solid fa-person-rays" },
  { id: "gynecology", name: "Gynecology", nameHi: "गयनेकोलॉजिस्ट", icon: "fa-solid fa-venus" },
  { id: "general-lap-surgeon", name: "General & Lap. Surgeon", nameHi: "जनरल & लपरसकोपिक सर्जन", icon: "fa-solid fa-scalpel" },
  { id: "pediatrician", name: "Pediatrician", nameHi: "पीडियाट्रिशियन", icon: "fa-solid fa-baby" },
  { id: "gastroenterologist", name: "Gastroenterologist", nameHi: "गैस्ट्रोएन्टेरोलॉजिस्ट", icon: "fa-solid fa-stomach" },
  { id: "nephrologist", name: "Nephrologist", nameHi: "नेफ्रोलॉजिस्ट", icon: "fa-solid fa-kidneys" },
  { id: "urologist", name: "Urologist", nameHi: "यूरोलॉजिस्ट", icon: "fa-solid fa-droplet" },
  { id: "e-n-t", name: "E.N.T", nameHi: "इ एन टी", icon: "fa-solid fa-ear" },
  { id: "cardiologist", name: "Cardiologist", nameHi: "कार्डियोलॉजिस्ट", icon: "fa-solid fa-heart-pulse" },
  { id: "paediatric-cardiologist", name: "Paediatric Cardiologist", nameHi: "पेडियेट्रिक कार्डियोलॉजिस्ट", icon: "fa-solid fa-heart" },
  { id: "dermatologist", name: "Dermatologist", nameHi: "डर्मेटोलॉजिस्ट", icon: "fa-solid fa-hand-dots" },
  { id: "plastic-surgeon", name: "Plastic Surgeon", nameHi: "प्लास्टिक सर्जन", icon: "fa-solid fa-hand-sparkles" },
  { id: "cvts-surgeon", name: "CVTS Surgeon", nameHi: "सी वि टी एस सर्जन", icon: "fa-solid fa-heart-circle-plus" },
  { id: "psychiatrist", name: "Psychiatrist", nameHi: "साइकेट्रिस्ट", icon: "fa-solid fa-brain" },
  { id: "onco-physician", name: "Onco Physician", nameHi: "ओंको फिजिशियन", icon: "fa-solid fa-microscope" },
  { id: "onco-surgeon", name: "Onco Surgeon", nameHi: "ओंको सर्जन", icon: "fa-solid fa-syringe" },
  { id: "haematologist", name: "Haematologist", nameHi: "हेमाटोलॉजिस्ट", icon: "fa-solid fa-vials" },
  { id: "haemat-oncologist", name: "Haemat-Oncologist", nameHi: "हेमट - ऑन्कोलॉजिस्ट", icon: "fa-solid fa-flask-vial" },
  { id: "neuro-physician", name: "Neuro Physician", nameHi: "न्यूरो - फिजिशियन", icon: "fa-solid fa-brain" },
  { id: "neuro-surgeon", name: "Neuro Surgeon", nameHi: "न्यूरो - सर्जन", icon: "fa-solid fa-head-side-cough" },
  { id: "maxillo-facial-surgeon", name: "Maxillo-Facial Surgeon", nameHi: "मैक्सिलो फेसिअल सर्जन", icon: "fa-solid fa-tooth" },
  { id: "ophthalmologist", name: "Ophthalmologist", nameHi: "ऑप्थल्मोलॉजिस्ट", icon: "fa-solid fa-eye" },
];

function DoctorCard({ doctor, delay }) {
  const [imgSrc, setImgSrc] = useState(doctor.image || "/images/doctor/noprofile.png");

  const typeBadgeClass =
    doctor.type.includes("OPD") && doctor.type.includes("IPD")
      ? "both"
      : doctor.type.includes("OPD")
      ? "opd"
      : "ipd";

  return (
    <div
      className="col-md-6 col-lg-4 col-xl-3 d-flex animate-card"
      data-aos="fade-up"
      data-aos-duration={delay}
    >
      <div className="doctor-card-modern w-100">
        {/* Card Top: Photo Wrapper */}
        <div className="photo-container">
          <img
            src={imgSrc}
            className="doctor-photo"
            alt={doctor.name}
            onError={() => setImgSrc("/images/doctor/noprofile.png")}
          />
          {/* Badge absolute over photo */}
          <span className={`service-type-badge ${typeBadgeClass}`}>
            {doctor.type}
          </span>
        </div>

        {/* Card Body */}
        <div className="card-body-content">
          <span className="card-dept-tag">
            {doctor.department} <span className="card-dept-tag-hi">({doctor.departmentHi})</span>
          </span>
          <Link href={`/team/${doctor.id}`}>
            <h3 className="doctor-card-name">{doctor.name}</h3>
          </Link>
          <p className="doctor-card-qual">{doctor.qualification}</p>

          <div className="timing-info-grid">
            <div className="timing-info-row">
              <i className="fa-solid fa-calendar-week timing-icon"></i>
              <span className="timing-text">{doctor.days}</span>
            </div>
            <div className="timing-info-row">
              <i className="fa-solid fa-clock timing-icon"></i>
              <span className="timing-text">{doctor.timing}</span>
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="card-footer-action">
          <Link href={`/team/${doctor.id}`} className="view-profile-btn">
            Profile
          </Link>
          <Link
            href={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
            className="book-now-btn-card"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DoctorsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering Logic
  const filteredDoctors = allDoctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.departmentHi.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "all") {
      return matchesSearch;
    }

    // Slug matching helper
    const targetDeptId = departments.find(d => d.id === activeTab)?.name.toLowerCase();
    return doc.department.toLowerCase() === targetDeptId && matchesSearch;
  });

  // Sort: Push doctors with noprofile.png to the bottom
  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    const aNoProfile = a.image.includes("noprofile.png");
    const bNoProfile = b.image.includes("noprofile.png");
    if (aNoProfile && !bNoProfile) return 1;
    if (!aNoProfile && bNoProfile) return -1;
    return 0;
  });

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title="Our Doctors" pageName="Doctors" />

      {/* Main Listing Section */}
      <section className="ta-team-three pta-120">
        <div className="container">
          
          {/* Unified Dynamic Filters Bar */}
          <div className="filters-container mb-50" data-aos="fade-up" data-aos-duration="300">

            {/* Scrollable Department Tabs */}
            <div className="dept-tabs-wrapper">
              <div className="dept-tabs-scroll">
                {departments.map((tab) => (
                  <button
                    key={tab.id}
                    className={`dept-tab-pill-btn ${activeTab === tab.id ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <i className={`${tab.icon} tab-btn-icon`}></i>
                    <div className="tab-btn-text">
                      <span className="tab-btn-en">{tab.name}</span>
                      <span className="tab-btn-hi">{tab.nameHi}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="results-info-row mb-30" data-aos="fade-up" data-aos-duration="400">
            <span className="results-count">
              Showing <strong>{sortedDoctors.length}</strong> {sortedDoctors.length === 1 ? "doctor" : "doctors"}
            </span>
          </div>

          {/* Doctors Grid */}
          <div className="ta-team-three-wrap">
            <div className="row gy-30 align-items-stretch justify-content-start">
              {sortedDoctors.length > 0 ? (
                sortedDoctors.map((doctor, i) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    delay={300 + (i % 4) * 100}
                  />
                ))
              ) : (
                <div className="col-12" data-aos="fade-up" data-aos-duration="300">
                  <div className="empty-results-card">
                    <div className="empty-icon-wrap">
                      <i className="fa-solid fa-user-slash"></i>
                    </div>
                    <h3 className="empty-title">No Doctors Found</h3>
                    <p className="empty-subtitle">
                      We couldn't find any doctor matching your criteria. Try choosing another department.
                    </p>
                    <button
                      className="reset-filters-btn"
                      onClick={() => {
                        setActiveTab("all");
                      }}
                    >
                      Reset All Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Styled block using standard HTML style tag to guarantee browser styling renders properly with Turbopack */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Listing Layout styling */
        .ta-team-three {
          padding-top: 60px;
          padding-bottom: 90px;
          background-color: #F5F6F8 !important;
        }

        /* Unified Filters Area */
        .filters-container {
          background: #ffffff !important;
          border-radius: 16px !important;
          padding: 24px !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04) !important;
          border: 1px solid #E5E7EB !important;
          box-sizing: border-box;
        }

        /* Search input design */
        .search-box-wrap {
          position: relative;
          width: 100%;
          margin-bottom: 20px;
          box-sizing: border-box;
        }
        .search-input-field {
          width: 100% !important;
          box-sizing: border-box;
          padding: 14px 18px 14px 46px !important;
          border-radius: 10px !important;
          border: 1px solid #E5E7EB !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 14px !important;
          color: #111827 !important;
          background-color: #F9FAFB !important;
          outline: none !important;
          transition: all 0.25s ease !important;
        }
        .search-input-field::placeholder {
          color: #9CA3AF !important;
        }
        .search-input-field:focus {
          border-color: #6366F1 !important;
          background-color: #ffffff !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12) !important;
        }
        .search-field-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #9CA3AF !important;
          font-size: 16px !important;
          pointer-events: none;
        }
        .clear-search-btn {
          position: absolute;
          right: 18px;
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

        /* Horizontal Scrollable Tabs */
        .dept-tabs-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .dept-tabs-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 12px;
          scroll-behavior: smooth;
        }
        .dept-tabs-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .dept-tabs-scroll::-webkit-scrollbar-track {
          background: #F3F4F6;
          border-radius: 4px;
        }
        .dept-tabs-scroll::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 4px;
        }

        /* Tab Buttons styling */
        .dept-tab-pill-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px !important;
          background-color: #F3F4F6 !important;
          border: 1px solid transparent !important;
          border-radius: 30px !important;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
          flex-shrink: 0;
          text-align: left;
        }
        .tab-btn-icon {
          font-size: 14px !important;
          color: #6B7280 !important;
        }
        .tab-btn-text {
          display: flex;
          flex-direction: column;
        }
        .tab-btn-en {
          font-family: 'Inter', sans-serif !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          color: #4B5563 !important;
          line-height: 1.2 !important;
        }
        .tab-btn-hi {
          font-size: 10px !important;
          color: #9CA3AF !important;
          margin-top: 1px !important;
          font-weight: 400 !important;
        }

        /* Hover states */
        .dept-tab-pill-btn:hover {
          background-color: #E5E7EB !important;
        }
        .dept-tab-pill-btn:hover .tab-btn-icon {
          color: #111827 !important;
        }
        .dept-tab-pill-btn:hover .tab-btn-en {
          color: #111827 !important;
        }

        /* Active active states */
        .dept-tab-pill-btn.active {
          background-color: #6366F1 !important;
          border-color: #4F46E5 !important;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.24) !important;
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

        /* Results row information */
        .results-info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          box-sizing: border-box;
        }
        .results-count {
          font-size: 14px !important;
          color: #4B5563 !important;
        }
        .results-count strong {
          color: #111827 !important;
        }
        .search-indicator-tag {
          background-color: #EEF2FF !important;
          color: #4F46E5 !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          padding: 4px 10px !important;
          border-radius: 6px !important;
          border: 1px solid #E0E7FF !important;
        }

        /* Doctor Cards Styling */
        .doctor-card-modern {
          background: #ffffff !important;
          border-radius: 12px !important;
          border: 1px solid #E5E7EB !important;
          overflow: hidden !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02) !important;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .doctor-card-modern:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03) !important;
          border-color: #D1D5DB !important;
        }

        .photo-container {
          position: relative !important;
          width: 100% !important;
          aspect-ratio: 1/1 !important;
          height: auto !important;
          background-color: #F3F4F6 !important;
          overflow: hidden !important;
          box-sizing: border-box;
        }
        .doctor-photo {
          width: 100% !important;
          height: 100% !important;
          aspect-ratio: 1/1 !important;
          object-fit: cover !important;
          display: block !important;
          transition: transform 0.4s ease !important;
        }
        .doctor-card-modern:hover .doctor-photo {
          transform: scale(1.03) !important;
        }

        .service-type-badge {
          position: absolute !important;
          top: 12px !important;
          right: 12px !important;
          font-size: 10px !important;
          font-weight: 700 !important;
          padding: 4px 10px !important;
          border-radius: 20px !important;
          letter-spacing: 0.5px !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
          z-index: 10;
        }
        .service-type-badge.both {
          background: #EEF2FF !important;
          color: #4F46E5 !important;
        }
        .service-type-badge.opd {
          background: #ECFDF5 !important;
          color: #047857 !important;
        }
        .service-type-badge.ipd {
          background: #FFFBEB !important;
          color: #B45309 !important;
        }

        /* Body Details Styling */
        .card-body-content {
          padding: 16px !important;
          flex-grow: 1 !important;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .card-dept-tag {
          display: inline-block !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          color: #6366F1 !important;
          margin-bottom: 6px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
        }
        .card-dept-tag-hi {
          color: #9CA3AF !important;
          font-weight: 400 !important;
          text-transform: none !important;
        }
        .doctor-card-name {
          font-family: 'Inter', sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #111827 !important;
          margin: 0 0 6px 0 !important;
          line-height: 1.3 !important;
          transition: color 0.2s !important;
        }
        .doctor-card-name:hover {
          color: #4F46E5 !important;
        }
        .doctor-card-qual {
          font-size: 12px !important;
          color: #6B7280 !important;
          line-height: 1.4 !important;
          margin: 0 0 16px 0 !important;
          min-height: 34px !important;
          display: -webkit-box !important;
          -webkit-line-clamp: 2 !important;
          -webkit-box-orient: vertical !important;
          overflow: hidden !important;
        }

        /* Small Grid info inside card */
        .timing-info-grid {
          margin-top: auto !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 6px !important;
          padding-top: 12px !important;
          border-top: 1px dashed #E5E7EB !important;
        }
        .timing-info-row {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
        .timing-icon {
          font-size: 11px !important;
          color: #9CA3AF !important;
          width: 12px !important;
        }
        .timing-text {
          font-size: 12px !important;
          color: #4B5563 !important;
        }

        /* Card Footer Link Button */
        .card-footer-action {
          padding: 12px 16px 16px !important;
          background-color: #FAFAFA !important;
          border-top: 1px solid #F3F4F6 !important;
          display: flex !important;
          gap: 8px !important;
          box-sizing: border-box;
        }
        .view-profile-btn {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex: 1 !important;
          padding: 10px 4px !important;
          background-color: #EEF2FF !important;
          color: #4F46E5 !important;
          border-radius: 8px !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          transition: all 0.2s ease !important;
          box-sizing: border-box;
          text-align: center;
        }
        .view-profile-btn:hover {
          background-color: #DDE2FF !important;
        }
        .book-now-btn-card {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex: 1 !important;
          padding: 10px 4px !important;
          background-color: #6366F1 !important;
          color: #ffffff !important;
          border-radius: 8px !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          transition: all 0.2s ease !important;
          box-sizing: border-box;
          text-align: center;
        }
        .book-now-btn-card:hover {
          background-color: #4F46E5 !important;
        }

        /* Empty state styling */
        .empty-results-card {
          text-align: center !important;
          padding: 60px 20px !important;
          background-color: #ffffff !important;
          border-radius: 12px !important;
          border: 1px solid #E5E7EB !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02) !important;
        }
        .empty-icon-wrap {
          font-size: 40px !important;
          color: #9CA3AF !important;
          margin-bottom: 16px !important;
        }
        .empty-title {
          font-size: 18px !important;
          font-weight: 700 !important;
          color: #111827 !important;
          margin-bottom: 8px !important;
        }
        .empty-subtitle {
          font-size: 14px !important;
          color: #6B7280 !important;
          max-width: 480px !important;
          margin: 0 auto 24px !important;
          line-height: 1.5 !important;
        }
        .reset-filters-btn {
          padding: 10px 22px !important;
          background-color: #6366F1 !important;
          color: #ffffff !important;
          border: none !important;
          border-radius: 8px !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          transition: background-color 0.2s !important;
        }
        .reset-filters-btn:hover {
          background-color: #4F46E5 !important;
        }

        @media (max-width: 767px) {
          .pta-120 {
            padding-top: 40px !important;
            padding-bottom: 60px !important;
          }
          .filters-container {
            padding: 16px !important;
          }
          .dept-tab-pill-btn {
            padding: 8px 14px !important;
          }
          .tab-btn-en {
            font-size: 12px !important;
          }
        }
      `}} />

      {/* Footer */}
      <Footer />
    </>
  );
}
