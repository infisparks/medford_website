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
                                    <a href="#">123 Street, New York, USA</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="text">
                                    <h4 className="header-sm">Phone</h4>
                                    <a href="tel:+447820124453">+44 7820 124453</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="text">
                                    <h4 className="header-sm">Email</h4>
                                    <a href="mailto:cardia@gmail.com">cardia@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul className="social-icon">
                        <li>Follow Us</li>
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
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
        <Breadcrumb title="Our Services" pageName="Services" />

        {/* service */}
        <section className="ta-service-page pta-120">
            <div className="container">
                <div className="ta-service-page-wrap">
                    <div className="row gy-30">
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="300">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-01.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Regularly Checkup</a></h2>
                                    <p className="text">Regular checkups essential maintaining overall health preventing
                                        medical issues before they become serious</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="400">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-02.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Professional Team</a></h2>
                                    <p className="text">Each member brings unique expertise commitment to excellence
                                        contributing to well coordinate approach patient</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="500">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-03.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Personalized Healthcare</a></h2>
                                    <p className="text">Personalized healthcare is innovative approach to medicine that
                                        tailor medical treatment the individual needs</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="600">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-04.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Nuclear Stress Testing</a></h2>
                                    <p className="text">Nuclear stress testing is a diagnostic the procedure used to
                                        evaluate blood flow to the heart muscle during periods</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="300">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-05.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Ambulatory Surgery</a></h2>
                                    <p className="text">Ambulatory surgery also known for outpatient same day surgery refers
                                        the surgical procedure require hospital</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="400">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-06.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Valve Diseases</a></h2>
                                    <p className="text">Valve diseases refer to disorders that affect one or more of the
                                        four valves the aortic mitral tricuspid and valves</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="500">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-07.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Heart Transplant</a></h2>
                                    <p className="text">Heart transplant is a surgical procedure performed to replace a
                                        diseased failing heart with a heart from deceased</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="600">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-08.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Children Services</a></h2>
                                    <p className="text">Children’s services encompass a range
                                        programs and support designed promote the health education and well being</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="300">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-09.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Heart Screening</a></h2>
                                    <p className="text">Heart screening is a preventive health measure designed to detect
                                        early signs of heart disease before develop</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="400">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-10.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Cardiovascular Care</a></h2>
                                    <p className="text">Cardiovascular care focuses on the prevention diagnosis management
                                        that diseases that affect the heart</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="500">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-11.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Emergency Care</a></h2>
                                    <p className="text">Emergency care provides immediate individuals to experiencing sudden
                                        illnes injury or life threatening conditions</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration="600">
                            <div className="ta-service-four-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/service-icon-12.svg" alt="feature icon" />
                                    </div>
                                    <a className="arrow" href="/service">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="content">
                                    <h2><a className="header-sm" href="/service">Community Services</a></h2>
                                    <p className="text">Community services encompass a broad range of programs resources
                                        designed to support the health well being</p>
                                </div>
                                <a href="/service" className="ser-btn">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-12">
                            <div className="pagination-wrapper pagination-wrapper-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                                <ul className="pg-pagination">
                                    <li><a href="#">1</a></li>
                                    <li className="active">
                                        <a href="#">2</a>
                                    </li>
                                    <li><a href="#">3</a></li>
                                    <li>
                                        <a href="#" aria-label="Next">
                                            <i className="fa-solid fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* footer */}
      <Footer />
    </>
  );
}
