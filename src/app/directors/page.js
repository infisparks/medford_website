"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function DirectorsPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb title="Board of Directors" pageName="Directors" />

      {/* Directors Section */}
      <section className="directors-section pta-120 pb-120">
        <div className="container">
          
          {/* Introduction block */}
          <div className="row justify-content-center mb-50">
            <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-duration="600">
              <span className="sub-title mb-20" style={{ color: "#4F46E5", fontWeight: "600", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", display: "inline-block" }}>
                Leadership & Vision
              </span>
              <h2 className="header-xl mb-20" style={{ fontSize: "36px", fontWeight: "800", color: "#111827" }}>
                Meet Our Board of Directors
              </h2>
              <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: "1.7" }}>
                Under the guidance of our leadership team, Medford Hospital continues to innovate and expand access to premium, affordable medical services across Mumbra and Thane, putting patient care first.
              </p>
            </div>
          </div>

          {/* Directors list */}
          <div className="row justify-content-center gy-50">
            
            {/* 1. Mr. Meraj Zariwala (Managing Director) */}
            <div className="col-12" data-aos="fade-up" data-aos-duration="700">
              <div className="director-card-horizontal">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="director-img-wrapper">
                      <img 
                        src="/images/director/merajzariwala.png" 
                        alt="Mr. Meraj Zariwala" 
                        className="img-fluid director-photo"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="director-content">
                      <span className="dept-tag">Executive Leadership</span>
                      <h3 className="director-name">Mr. Meraj Zariwala</h3>
                      <p className="director-role">Founder & Managing Director, Medford Multi-Speciality Hospital</p>
                      <div className="divider"></div>
                      <p className="director-description">
                        Under the visionary leadership of Mr. Meraj Zariwala, Medford Hospital was established with the core mission of making world-class healthcare accessible and affordable for the community of Mumbra and Thane. A dedicated healthcare administrator and entrepreneur, he has spearheaded the development of the hospital’s state-of-the-art infrastructure, advanced ICCU units, and emergency trauma facilities.
                      </p>
                      <p className="director-description">
                        His focus on clinical excellence, continuous service improvement, and ethical hospital administration has positioned Medford Hospital as the most trusted healthcare institution in the town, serving over 30,000+ satisfied families.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Dr. Azhar Khan (Medical Director) */}
            <div className="col-12" data-aos="fade-up" data-aos-duration="800">
              <div className="director-card-horizontal">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="director-img-wrapper">
                      <img 
                        src="/images/director/draazhar.png" 
                        alt="Dr. Azhar Khan" 
                        className="img-fluid director-photo"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="director-content">
                      <span className="dept-tag">Clinical Leadership</span>
                      <h3 className="director-name">Dr. Azhar Khan</h3>
                      <p className="director-role">Medical Director & Senior Chest Physician, MBBS, TDD</p>
                      <div className="divider"></div>
                      <p className="director-description">
                        Dr. Azhar Khan brings decades of clinical excellence, academic leadership, and patient care management to Medford Hospital. As the Medical Director, he oversees all clinical protocols, patient safety standards, emergency responses, and medical ethics across departments.
                      </p>
                      <p className="director-description">
                        A highly regarded specialist, he is also the leading Chest Physician in Mumbra. He is known for his jolly, patient-friendly approach and exceptional ability to comfort families in moments of stress, answering all clinical queries with clarity and compassion.
                      </p>
                      <div className="director-socials">
                        <Link href="/team/dr-azhar-khan" className="ta-button-02">
                          View Doctor Profile
                          <span className="button__icon-wrapper">
                            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />

      {/* Styled overrides for premium Board of Directors horizontal cards */}
      <style dangerouslySetInnerHTML={{ __html: `
        .directors-section {
          background-color: #F5F6F8;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .director-card-horizontal {
          background: #ffffff;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          border: 1px solid #E5E7EB;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          margin-bottom: 40px;
        }

        .director-card-horizontal:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(79, 70, 229, 0.08);
        }

        .director-img-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          background-color: #F3F4F6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .director-photo {
          width: 100%;
          height: auto;
          transition: transform 0.5s ease;
        }

        .director-card-horizontal:hover .director-photo {
          transform: scale(1.03);
        }

        .director-title-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(79, 70, 229, 0.95);
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(4px);
        }

        .director-content {
          padding: 20px;
        }

        .dept-tag {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          color: #4F46E5;
          margin-bottom: 10px;
          display: inline-block;
        }

        .director-name {
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 8px;
        }

        .director-role {
          font-size: 15px;
          color: #4B5563;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .divider {
          height: 2px;
          background: linear-gradient(to right, #4F46E5, transparent);
          margin-bottom: 20px;
          border-radius: 2px;
        }

        .director-description {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.65;
          margin-bottom: 15px;
        }

        .director-socials {
          margin-top: 25px;
        }

        @media (max-width: 991px) {
          .director-img-wrapper {
            margin-bottom: 30px;
          }
          .director-content {
            padding: 0;
          }
          .director-name {
            font-size: 24px;
          }
        }
      `}} />
    </>
  );
}
