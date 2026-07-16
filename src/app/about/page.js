"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      {/* Mobile Overlay */}
        <div className="mobile-overlay" id="mobileOverlay"></div>

        {/* Mobile Drawer */}
        <div className="mobile-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation" aria-hidden="true">

            {/* logo and exit btn */}
            <div className="mob-hdr">
                <a href="#" className="logo-text">
                    <img src="/images/logo.png" alt="logo image" />
                </a>
                <button className="mob-close" id="mobileClose" aria-label="Close navigation">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            {/* sidebar content */}
            <div className="d-none d-xl-flex">
                <div className="offcanvas-content">
                    <p className="desc">The goal of cardiology is not only to treat heart disease but also to promote long
                        term heart
                        health through</p>
                    <div className="services mb-20">
                        <h3 className="header-md mb-10">What Services We Provide</h3>
                        <a href="/service">
                            <span>Regularly Checkup</span>
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                        <a href="/service">
                            <span>Personalized Healthcare</span>
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                        <a href="/service">
                            <span>Nuclear Stress Testing</span>
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                        <a href="/service">
                            <span>Professional Team</span>
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                        <a href="/service">
                            <span>cardiovascular care</span>
                            <span><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                    </div>
                    <div className="info">
                        <h3 className="header-md foo-head mb-10">Get In Touch</h3>
                        <ul className="lists">
                            <li>
                                <div className="icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="text">
                                    <h4 className="header-sm">Location</h4>
                                    <a href="#">Bluebells, Mumbra Bypass Road, Near Maaz Hotel, Kalsekar, Mumbra, Thane, Maharashtra 400612</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="text">
                                    <h4 className="header-sm">Phone</h4>
                                    <a href="tel:+919769000091">+91 97690 00091</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="text">
                                    <h4 className="header-sm">Email</h4>
                                    <a href="mailto:MedFordhospital@gmail.com">MedFordhospital@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul className="social-icon">
                        <li>Follow Us</li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/medford.hospital/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://in.linkedin.com/company/medford-multi-specialty-hospital" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>

            {/* mobile nav */}
            <div className="mob-body d-block d-xl-none">
                <ul className="mob-nav">

                    {/* Home Mega Menu*/}
                    <li>
                        <div className="mob-row">
                            <a href="#">Home</a>
                            <button className="mob-toggle" aria-expanded="false" aria-label="Toggle Products submenu">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                        <ul className="sub-menu">
                            <li>
                                <div className="mob-row">
                                    <a href="#"> Home V1 </a>
                                    <button className="mob-toggle" aria-expanded="false" aria-label="Toggle Plugins">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </button>
                                </div>
                                <ul className="sub-menu">
                                    <li className="mega-col">
                                        <div className="previw-box">
                                            <img src="/images/menu-home-01.png" alt="mega menu image" className="img-fluid" />
                                            <div className="btn">
                                                <a href="/" className="ta-button-01">
                                                    Preview Demo
                                                    <span className="button__icon-wrapper">
                                                        <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                                                        </svg>

                                                        <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="#">
                                        Home V2
                                    </a>
                                    <button className="mob-toggle" aria-expanded="false" aria-label="Toggle Plugins">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </button>
                                </div>
                                <ul className="sub-menu">
                                    <li className="mega-col">
                                        <div className="previw-box">
                                            <img src="/images/menu-home-02.png" alt="mega menu image" className="img-fluid" />
                                            <div className="btn">
                                                <a href="index-02.html" className="ta-button-01">
                                                    Preview Demo
                                                    <span className="button__icon-wrapper">
                                                        <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                                                        </svg>

                                                        <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="#">
                                        Home V3
                                    </a>
                                    <button className="mob-toggle" aria-expanded="false" aria-label="Toggle Plugins">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </button>
                                </div>
                                <ul className="sub-menu">
                                    <li className="mega-col">
                                        <div className="previw-box">
                                            <img src="/images/menu-home-03.png" alt="mega menu image" className="img-fluid" />
                                            <div className="btn">
                                                <a href="/" className="ta-button-01">
                                                    Preview Demo
                                                    <span className="button__icon-wrapper">
                                                        <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                                                        </svg>

                                                        <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                                                            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <div className="mob-row"><a href="/about">About</a></div>
                    </li>


                    <li>
                        <div className="mob-row">
                            <a href="#">Pages</a>
                            <button className="mob-toggle" aria-expanded="false" aria-label="Toggle About submenu">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                        <ul className="sub-menu">
                            <li>
                                <div className="mob-row">
                                    <a href="/team">Team</a>
                                    <button className="mob-toggle" aria-expanded="false" aria-label="Toggle Web Design submenu">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </button>
                                </div>
                                <ul className="sub-menu">
                                    <li>
                                        <div className="mob-row">
                                            <a href="/team-single">Team Details</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="/appointment">Appointment</a>
                                </div>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="pricing.html">Pricing</a>
                                </div>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="faq.html">FAQ'S</a>
                                </div>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="/contact">Contct</a>
                                </div>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="/404">404/Error Page</a>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <div className="mob-row">
                            <a href="/service">Service</a>
                            <button className="mob-toggle" aria-expanded="false" aria-label="Toggle About submenu">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                        <ul className="sub-menu">

                            <li>
                                <div className="mob-row">
                                    <a href="/service">Service</a>
                                </div>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="/service">Service Details</a>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <div className="mob-row">
                            <a href="#">Project</a>
                            <button className="mob-toggle" aria-expanded="false" aria-label="Toggle About submenu">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                        <ul className="sub-menu">

                            <li>
                                <div className="mob-row">
                                    <a href="#">Project</a>
                                </div>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="#">Project Details</a>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <div className="mob-row">
                            <a href="#">Blog</a>
                            <button className="mob-toggle" aria-expanded="false" aria-label="Toggle About submenu">
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>
                        <ul className="sub-menu">
                            <li>
                                <div className="mob-row">
                                    <a href="#">Blog Grid</a>
                                </div>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="#">Blog Standard</a>
                                </div>
                            </li>
                            <li>
                                <div className="mob-row">
                                    <a href="#">Blog Details</a>
                                </div>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

        </div>
        {/* header end */}

        {/* breadcrumb */}
        <Breadcrumb title="Our About Us" pageName="About" />

        {/* About Medford Hospital Section */}
        <section className="ta-about-section pta-120 pb-120" style={{ background: '#F5F6F8' }}>
            <div className="container">
                <div className="ta-about-wrap" style={{ background: '#ffffff', borderRadius: '20px', padding: '50px 40px', border: '1px solid #E5E7EB', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <div className="row align-items-center gy-40">
                        <div className="col-xl-7" data-aos="fade-right" data-aos-duration="600">
                            <div className="about-content-box">
                                <span className="sub-title mb-20" style={{ background: '#EEF2FF', color: '#4F46E5', fontSize: '12px', fontWeight: '700', padding: '6px 14px', borderRadius: '20px', display: 'inline-block', textTransform: 'uppercase' }}>About Medford Hospital</span>
                                <h2 className="header-xl txt-anim-2 mb-25" style={{ color: '#111827', fontWeight: '800', fontSize: '32px' }}>Medford Multi-Speciality Hospital</h2>
                                <p className="mb-20" style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.7' }}>
                                    Located in Kalsekar, Mumbra, Thane, Medford Multi-Speciality Hospital is a premier healthcare institution dedicated to delivering high-quality, comprehensive medical treatments and round-the-clock emergency care to our community.
                                </p>
                                <p className="mb-30" style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.7' }}>
                                    Our facility features a state-of-the-art Intensive Care Unit (ICCU) equipped with advanced ventilators, a minor operating theater, specialized pediatric wards, and fully-integrated pathology and pharmacy services operating 24 hours a day, 7 days a week.
                                </p>

                                <div className="row gy-20">
                                    <div className="col-md-6">
                                        <div className="feature-item-inline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-solid fa-square-check" style={{ color: '#4F46E5', fontSize: '18px' }}></i>
                                            <span style={{ color: '#111827', fontSize: '14px', fontWeight: '600' }}>24/7 Trauma & Emergency</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-item-inline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-solid fa-square-check" style={{ color: '#4F46E5', fontSize: '18px' }}></i>
                                            <span style={{ color: '#111827', fontSize: '14px', fontWeight: '600' }}>In-House Pharmacy & Lab</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-item-inline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-solid fa-square-check" style={{ color: '#4F46E5', fontSize: '18px' }}></i>
                                            <span style={{ color: '#111827', fontSize: '14px', fontWeight: '600' }}>Laparoscopic & Gen Surgery</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-item-inline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-solid fa-square-check" style={{ color: '#4F46E5', fontSize: '18px' }}></i>
                                            <span style={{ color: '#111827', fontSize: '14px', fontWeight: '600' }}>Pediatrics & Gynaecology</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5" data-aos="fade-left" data-aos-duration="600">
                            <div className="about-stats-card" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '35px' }}>
                                <h3 className="header-md mb-25" style={{ fontSize: '18px', fontWeight: '700', color: '#111827' }}>Why Choose Medford?</h3>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div className="stat-entry" style={{ display: 'flex', gap: '15px' }}>
                                        <div className="stat-icon-wrap" style={{ background: '#EEF2FF', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="fa-solid fa-user-doctor" style={{ color: '#4F46E5' }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', margin: '0 0 4px 0' }}>Specialist Doctors</h4>
                                            <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>A dedicated team of qualified practitioners covering over 15 medical disciplines.</p>
                                        </div>
                                    </div>

                                    <div className="stat-entry" style={{ display: 'flex', gap: '15px' }}>
                                        <div className="stat-icon-wrap" style={{ background: '#EEF2FF', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="fa-solid fa-kit-medical" style={{ color: '#4F46E5' }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', margin: '0 0 4px 0' }}>Advanced ICCU</h4>
                                            <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>Equipped with modern ventilator systems and patient monitors for critical care support.</p>
                                        </div>
                                    </div>

                                    <div className="stat-entry" style={{ display: 'flex', gap: '15px' }}>
                                        <div className="stat-icon-wrap" style={{ background: '#EEF2FF', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="fa-solid fa-clock" style={{ color: '#4F46E5' }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', margin: '0 0 4px 0' }}>24/7 Open Services</h4>
                                            <p style={{ color: '#6B7280', fontSize: '13px', margin: 0 }}>Emergency desk, pharmacy and basic diagnostics are fully functional all day and night.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* text-slider */}
        <div className="ta-text-slider-one ta-text-slider-two pb-120">
            <div className="container-fluid">
                <div className="marquee-right" data-aos="fade-in" data-aos-duration="1200">
                    <div className="marquee-inner">
                        <a href="#" className="marquee-text">Heart Transplant</a>
                        <a href="#"><img src="/images/marquee-shape.png" alt="marquee shape" /></a>
                        <a href="#" className="text-fill">Valve Diseases</a>
                        <a href="#"><img src="/images/marquee-shape.png" alt="marquee shape" /></a>
                        <a href="#" className="marquee-text">Heart Transplant</a>
                        <a href="#"><img src="/images/marquee-shape.png" alt="marquee shape" /></a>
                        <a href="#" className="text-fill">Valve Diseases</a>
                        <a href="#"><img src="/images/marquee-shape.png" alt="marquee shape" /></a>
                    </div>
                </div>
            </div>
        </div>

        {/* footer */}
      <Footer />
    </>
  );
}
