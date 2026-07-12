"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { allDoctors } from "@/lib/doctors";

export default function DoctorDetailPage() {
  const params = useParams();
  const doctor = allDoctors.find((d) => d.id === params.id);

  // Fallback image state
  const [imgSrc, setImgSrc] = useState(
    doctor && doctor.image ? doctor.image : "/images/doctor/noprofile.png"
  );

  if (!doctor) {
    return (
      <>
        <Header />
        <Breadcrumb title="Doctor Not Found" pageName="Doctors" />
        <section style={{ padding: "80px 0", textAlign: "center" }}>
          <div className="container">
            <h2>Doctor not found</h2>
            <p style={{ color: "#6B7280", margin: "12px 0 24px" }}>
              The doctor profile you are looking for does not exist.
            </p>
            <Link href="/team" className="ta-button-02">
              ← Back to All Doctors
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const typeBadgeClass =
    doctor.type.includes("OPD") && doctor.type.includes("IPD")
      ? "both"
      : doctor.type.includes("OPD")
      ? "opd"
      : "ipd";

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb title={doctor.name} pageName="Doctor Profile" />

      {/* Doctor Detail Section */}
      <section className="doctor-detail-section pta-120">
        <div className="container">
          <div className="row gy-40">
            {/* Left – Photo & Quick Info */}
            <div className="col-lg-4">
              <div className="doctor-profile-card" data-aos="fade-right" data-aos-duration="400">
                <div className="doctor-photo-wrap">
                  <img
                    src={imgSrc}
                    alt={doctor.name}
                    className="img-fluid doctor-photo"
                    onError={() => setImgSrc("/images/doctor/noprofile.png")}
                  />
                  <div className="dept-badge">
                    {doctor.department}
                    <span className="dept-hi"> · {doctor.departmentHi}</span>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="quick-info">
                  <div className="qi-item">
                    <div className="qi-icon">
                      <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <div>
                      <p className="qi-label">Available Days</p>
                      <p className="qi-value">{doctor.days}</p>
                    </div>
                  </div>
                  <div className="qi-item">
                    <div className="qi-icon">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <p className="qi-label">OPD Timing</p>
                      <p className="qi-value">{doctor.timing}</p>
                    </div>
                  </div>
                  <div className="qi-item">
                    <div className="qi-icon">
                      <i className="fa-solid fa-hospital"></i>
                    </div>
                    <div>
                      <p className="qi-label">Service Type</p>
                      <p className={`qi-value type-pill ${typeBadgeClass}`}>
                        {doctor.type}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Book Appointment Button (Pre-selects doctor) */}
                <Link
                  href={`/appointment?doctor=${encodeURIComponent(doctor.name)}`}
                  className="ta-button-02 w-100 d-flex justify-content-center mt-20"
                >
                  Book Appointment
                  <span className="button__icon-wrapper">
                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                    </svg>
                    <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                    </svg>
                  </span>
                </Link>

                <Link href="/team" className="back-link">
                  <i className="fa-solid fa-arrow-left"></i> Back to All Doctors
                </Link>
              </div>
            </div>

            {/* Right – Doctor Detail */}
            <div className="col-lg-8">
              <div data-aos="fade-left" data-aos-duration="400">
                {/* Name & Dept */}
                <div className="doctor-intro">
                  <span className="dept-tag">{doctor.department} · {doctor.departmentHi}</span>
                  <h1 className="doctor-name">{doctor.name}</h1>
                  <p className="doctor-qual">{doctor.qualification}</p>
                </div>

                {/* About / Description */}
                <div className="doctor-about-box">
                  <h3 className="section-subhead">About the Doctor</h3>
                  <p className="doctor-about-text">
                    {doctor.name} is a highly qualified specialist in the <strong>{doctor.department}</strong> department at
                    Medford Hospital. With extensive training and a commitment to patient-centered care, {doctor.name.split(" ")[0]}{" "}
                    brings expert medical knowledge to every consultation.
                  </p>
                  <p className="doctor-about-text">
                    Holding credentials of <strong>{doctor.qualification}</strong>, the doctor is available for consultations
                    on <strong>{doctor.days}</strong>
                    {doctor.timing !== "—" ? ` from ${doctor.timing}` : ""} under the <strong>{doctor.type}</strong> system.
                  </p>
                </div>

                {/* Detail Table */}
                <div className="detail-table-wrap">
                  <h3 className="section-subhead">Consultation Details</h3>
                  <table className="detail-table">
                    <tbody>
                      <tr>
                        <td className="td-label"><i className="fa-solid fa-user-doctor"></i> Full Name</td>
                        <td className="td-value">{doctor.name}</td>
                      </tr>
                      <tr>
                        <td className="td-label"><i className="fa-solid fa-graduation-cap"></i> Qualification</td>
                        <td className="td-value">{doctor.qualification}</td>
                      </tr>
                      <tr>
                        <td className="td-label"><i className="fa-solid fa-stethoscope"></i> Department</td>
                        <td className="td-value">{doctor.department} <span className="hi-text">({doctor.departmentHi})</span></td>
                      </tr>
                      <tr>
                        <td className="td-label"><i className="fa-solid fa-calendar-days"></i> Available Days</td>
                        <td className="td-value">{doctor.days}</td>
                      </tr>
                      <tr>
                        <td className="td-label"><i className="fa-solid fa-clock"></i> OPD Timing</td>
                        <td className="td-value">{doctor.timing}</td>
                      </tr>
                      <tr>
                        <td className="td-label"><i className="fa-solid fa-hospital"></i> Service Type</td>
                        <td className="td-value">
                          <span className={`type-pill ${typeBadgeClass}`}>{doctor.type}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styled block using standard HTML style tag to guarantee browser styling renders properly with Turbopack */}
      <style dangerouslySetInnerHTML={{ __html: `
        .doctor-detail-section {
          background: #F5F6F8 !important;
          padding-bottom: 80px !important;
          box-sizing: border-box;
        }

        /* Profile Card */
        .doctor-profile-card {
          background: #fff !important;
          border-radius: 16px !important;
          overflow: hidden !important;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06) !important;
          padding-bottom: 24px !important;
          position: sticky !important;
          top: 100px !important;
          border: 1px solid #E5E7EB !important;
          box-sizing: border-box;
        }
        .doctor-photo-wrap {
          position: relative !important;
          width: 100% !important;
          aspect-ratio: 1/1 !important;
          overflow: hidden !important;
          background: #F3F4F6 !important;
        }
        .doctor-photo {
          width: 100% !important;
          height: 100% !important;
          aspect-ratio: 1/1 !important;
          object-fit: cover !important;
          display: block !important;
        }
        .dept-badge {
          position: absolute !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          background: linear-gradient(0deg, rgba(11,111,170,0.92) 0%, transparent 100%) !important;
          color: #fff !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          padding: 24px 16px 12px !important;
          z-index: 10;
        }
        .dept-hi {
          font-weight: 400 !important;
          opacity: 0.85 !important;
        }

        /* Quick Info */
        .quick-info {
          padding: 20px 20px 8px !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 14px !important;
          box-sizing: border-box;
        }
        .qi-item {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
        }
        .qi-icon {
          width: 36px !important;
          height: 36px !important;
          border-radius: 8px !important;
          background: #EBF5FB !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #0B6FAA !important;
          font-size: 14px !important;
          flex-shrink: 0;
        }
        .qi-label {
          font-size: 11px !important;
          color: #6B7280 !important;
          margin: 0 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
        }
        .qi-value {
          font-size: 14px !important;
          font-weight: 600 !important;
          color: #111827 !important;
          margin: 2px 0 0 !important;
        }

        .type-pill {
          display: inline-block !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          padding: 3px 10px !important;
          border-radius: 20px !important;
        }
        .type-pill.both { background: #e8f4fb !important; color: #0B6FAA !important; }
        .type-pill.opd { background: #e8f7ee; color: #15803d !important; }
        .type-pill.ipd { background: #fef3e2; color: #b45309 !important; }

        .back-link {
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
          font-size: 13px !important;
          color: #6B7280 !important;
          padding: 12px 20px 0 !important;
          text-decoration: none !important;
          transition: color 0.2s !important;
          box-sizing: border-box;
        }
        .back-link:hover { color: #0B6FAA !important; }
        .mt-20 { margin-top: 20px !important; }

        /* Right Side */
        .doctor-intro {
          margin-bottom: 28px !important;
          box-sizing: border-box;
        }
        .dept-tag {
          display: inline-block !important;
          background: #EBF5FB !important;
          color: #0B6FAA !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          padding: 4px 12px !important;
          border-radius: 20px !important;
          margin-bottom: 12px !important;
          letter-spacing: 0.3px !important;
        }
        .doctor-name {
          font-size: 30px !important;
          font-weight: 800 !important;
          color: #111827 !important;
          margin: 0 0 10px !important;
          line-height: 1.2 !important;
        }
        .doctor-qual {
          font-size: 14px !important;
          color: #6B7280 !important;
          line-height: 1.6 !important;
          margin: 0 !important;
        }

        /* About Box */
        .doctor-about-box {
          background: #fff !important;
          border-radius: 12px !important;
          padding: 24px !important;
          margin-bottom: 24px !important;
          border: 1px solid #E5E7EB !important;
          box-sizing: border-box;
        }
        .section-subhead {
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #111827 !important;
          margin: 0 0 14px !important;
          padding-bottom: 10px !important;
          border-bottom: 2px solid #EBF5FB !important;
        }
        .doctor-about-text {
          font-size: 14px !important;
          color: #4B5563 !important;
          line-height: 1.7 !important;
          margin: 0 0 12px !important;
        }

        /* Detail Table */
        .detail-table-wrap {
          background: #fff !important;
          border-radius: 12px !important;
          padding: 24px !important;
          border: 1px solid #E5E7EB !important;
          box-sizing: border-box;
        }
        .detail-table {
          width: 100% !important;
          border-collapse: collapse !important;
        }
        .detail-table tr {
          border-bottom: 1px solid #F3F4F6 !important;
        }
        .td-label {
          font-size: 13px !important;
          color: #6B7280 !important;
          padding: 12px 16px 12px 0 !important;
          white-space: nowrap !important;
          width: 170px !important;
          font-weight: 500 !important;
        }
        .td-label i {
          color: #0B6FAA !important;
          margin-right: 8px !important;
          width: 14px !important;
        }
        .td-value {
          font-size: 14px !important;
          color: #111827 !important;
          font-weight: 500 !important;
          padding: 12px 0 !important;
        }
        .hi-text {
          color: #6B7280 !important;
          font-weight: 400 !important;
          font-size: 12px !important;
        }

        @media (max-width: 767px) {
          .doctor-name { font-size: 22px !important; }
          .td-label { width: auto !important; white-space: normal !important; }
          .detail-table, .detail-table tbody, .detail-table tr, .detail-table td {
            display: block !important;
          }
          .detail-table tr { border-bottom: none !important; padding: 8px 0 !important; }
          .td-label { padding-bottom: 2px !important; }
          .td-value { padding-top: 0 !important; }
        }
      `}} />

      <Footer />
    </>
  );
}
