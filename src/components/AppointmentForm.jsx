"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { allDoctors } from "@/lib/doctors";

function AppointmentFormContent({ className = "contact-form-one" }) {
  const searchParams = useSearchParams();
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "2026-05-02",
    doctor: "Doctor",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownSearch, setDropdownSearch] = useState("");

  // Sync with search parameter
  useEffect(() => {
    const doctorParam = searchParams.get("doctor");
    if (doctorParam) {
      const matchedDoctor = allDoctors.find(
        (doc) => doc.name.toLowerCase() === doctorParam.toLowerCase() || doc.id === doctorParam
      );
      if (matchedDoctor) {
        setFormData((prev) => ({ ...prev, doctor: matchedDoctor.name }));
      }
    }
  }, [searchParams]);

  // Click outside to close dropdown panel
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectDoctor = (doctorName) => {
    setFormData((prev) => ({ ...prev, doctor: doctorName }));
    setIsDropdownOpen(false);
    setDropdownSearch(""); // reset search
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.doctor === "Doctor" || !formData.doctor) {
      alert("Please select a doctor.");
      return;
    }

    const payload = {
      name: formData.name.toUpperCase(),
      email: formData.email.toUpperCase(),
      phone: formData.phone.toUpperCase(),
      appointment_date: formData.date,
      doctor: formData.doctor.toUpperCase(),
      message: formData.message.toUpperCase(),
    };

    const { error } = await supabase
      .from("online_appointment")
      .insert([payload]);

    if (error) {
      console.error("Error saving appointment:", error);
      alert("There was an error booking your appointment.");
    } else {
      alert("Appointment booked successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "2026-05-02",
        doctor: "Doctor",
        message: "",
      });
    }
  };

  // Filter doctor list inside dropdown based on search query
  const filteredDoctors = allDoctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(dropdownSearch.toLowerCase()) ||
      doc.department.toLowerCase().includes(dropdownSearch.toLowerCase())
  );

  const selectedDoctorObj = allDoctors.find((d) => d.name === formData.doctor);

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="row">
        <h3 className="header-md mb-20">Book Your Appointment Today!</h3>
        <p className="mb-30">
          Your health is your greatest asset, don’t wait to take care of it.
          Whether you're coming in for a routine check-up, a specialist consultation, or ongoing treatment.
        </p>
        <div className="col-md-6 mb-20">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-20">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-20">
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-20">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Custom Searchable Doctor Dropdown */}
        <div className="col-12 mb-20">
          <div className="custom-select-container" ref={dropdownRef}>
            <div
              className={`custom-select-trigger ${isDropdownOpen ? "active-focus" : ""}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className={formData.doctor === "Doctor" ? "placeholder-text" : "selected-value-text"}>
                {selectedDoctorObj
                  ? `${selectedDoctorObj.name} — ${selectedDoctorObj.department}`
                  : "Select Doctor"}
              </span>
              <i className="fa-solid fa-chevron-down trigger-arrow-icon"></i>
            </div>

            {isDropdownOpen && (
              <div className="custom-select-panel-dropdown">
                <div className="panel-search-box-wrap">
                  <input
                    type="text"
                    placeholder="Type to search doctor or specialty..."
                    value={dropdownSearch}
                    onChange={(e) => setDropdownSearch(e.target.value)}
                    onClick={(e) => e.stopPropagation()} // prevent closing panel when typing
                    className="panel-search-input-field"
                    autoFocus
                  />
                  <i className="fa-solid fa-magnifying-glass panel-search-icon"></i>
                </div>

                <ul className="panel-options-list-scroll">
                  <li
                    className={`panel-option-item ${formData.doctor === "Doctor" ? "active-selected" : ""}`}
                    onClick={() => handleSelectDoctor("Doctor")}
                  >
                    Select Doctor
                  </li>
                  {filteredDoctors.map((doc) => (
                    <li
                      key={doc.id}
                      className={`panel-option-item ${formData.doctor === doc.name ? "active-selected" : ""}`}
                      onClick={() => handleSelectDoctor(doc.name)}
                    >
                      <div className="option-doc-name-line">
                        <strong>{doc.name}</strong>
                      </div>
                      <div className="option-doc-spec-line">
                        {doc.department} ({doc.qualification})
                      </div>
                    </li>
                  ))}
                  {filteredDoctors.length === 0 && (
                    <li className="panel-empty-text-msg">No doctors found</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="col-12 mb-30">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="ta-button-01">
            Book Appointment
            <span className="button__icon-wrapper">
              <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
              </svg>
              <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Styled markup block to guarantee cross-compiler Turbopack css compatibility */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-select-container {
          position: relative !important;
          width: 100% !important;
          box-sizing: border-box;
        }

        .custom-select-trigger {
          font-family: var(--body-font) !important;
          font-size: 16px !important;
          color: var(--header) !important;
          background: var(--body) !important;
          border: 1px solid transparent !important;
          padding: 15px !important;
          border-radius: 5px !important;
          width: 100% !important;
          height: 54px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          cursor: pointer !important;
          box-sizing: border-box !important;
          transition: all 0.4s ease-in-out !important;
        }

        .custom-select-trigger:hover, .custom-select-trigger.active-focus {
          border-color: #6366F1 !important;
          background: #ffffff !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12) !important;
        }

        .placeholder-text {
          color: var(--text) !important;
          opacity: 0.8 !important;
        }

        .selected-value-text {
          color: var(--header) !important;
          font-weight: 500 !important;
        }

        .trigger-arrow-icon {
          font-size: 12px !important;
          color: var(--text) !important;
          transition: transform 0.25s ease !important;
        }

        .custom-select-trigger.active-focus .trigger-arrow-icon {
          transform: rotate(180deg) !important;
          color: #6366F1 !important;
        }

        /* Dropdown Panel */
        .custom-select-panel-dropdown {
          position: absolute !important;
          top: 100% !important;
          left: 0 !important;
          width: 100% !important;
          background: #ffffff !important;
          border: 1px solid #E5E7EB !important;
          border-radius: 6px !important;
          margin-top: 5px !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
          z-index: 1000 !important;
          max-height: 320px !important;
          display: flex !important;
          flex-direction: column !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
          animation: slideDownIn 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        @keyframes slideDownIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Search input inside panel */
        .panel-search-box-wrap {
          position: relative !important;
          padding: 10px !important;
          background: #F9FAFB !important;
          border-bottom: 1px solid #E5E7EB !important;
          box-sizing: border-box !important;
        }

        .panel-search-input-field {
          width: 100% !important;
          box-sizing: border-box !important;
          padding: 8px 12px 8px 34px !important;
          border: 1px solid #D1D5DB !important;
          border-radius: 6px !important;
          font-size: 14px !important;
          font-family: var(--body-font) !important;
          outline: none !important;
          background: #ffffff !important;
          color: #111827 !important;
          height: 38px !important;
          transition: border-color 0.2s !important;
        }

        .panel-search-input-field:focus {
          border-color: #6366F1 !important;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1) !important;
        }

        .panel-search-icon {
          position: absolute !important;
          left: 22px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          color: #9CA3AF !important;
          font-size: 13px !important;
        }

        /* Options list container */
        .panel-options-list-scroll {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
          overflow-y: auto !important;
          max-height: 240px !important;
        }

        /* Scrollbar styles for selection list */
        .panel-options-list-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .panel-options-list-scroll::-webkit-scrollbar-track {
          background: #F9FAFB;
        }
        .panel-options-list-scroll::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 3px;
        }

        /* Dropdown options styling */
        .panel-option-item {
          padding: 10px 16px !important;
          cursor: pointer !important;
          font-size: 14px !important;
          font-family: var(--body-font) !important;
          color: #374151 !important;
          border-bottom: 1px solid #F3F4F6 !important;
          transition: all 0.15s ease !important;
          display: flex !important;
          flex-direction: column !important;
          text-align: left !important;
          gap: 2px !important;
        }

        .panel-option-item:last-child {
          border-bottom: none !important;
        }

        .panel-option-item:hover {
          background: #F3F4F6 !important;
          color: #111827 !important;
        }

        .panel-option-item.active-selected {
          background: #EEF2FF !important;
          color: #4F46E5 !important;
        }

        .option-doc-name-line {
          font-size: 14px !important;
        }
        
        .option-doc-spec-line {
          font-size: 11px !important;
          color: #6B7280 !important;
        }

        .panel-option-item.active-selected .option-doc-spec-line {
          color: #818CF8 !important;
        }

        .panel-empty-text-msg {
          padding: 20px !important;
          text-align: center !important;
          color: #9CA3AF !important;
          font-size: 13px !important;
          font-style: italic !important;
        }
      `}} />
    </form>
  );
}

export default function AppointmentForm({ className }) {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <AppointmentFormContent className={className} />
    </Suspense>
  );
}
