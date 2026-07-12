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
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="https://in.linkedin.com/company/medford-multi-specialty-hospital" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
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
        <Breadcrumb title="Doctor Details" pageName="Doctor-Details" />

        {/*team details*/}
        <section className="ta-team-single pta-120">
            <div className="container">
                <div className="ta-team-single-wrapper">
                    <div className="row gy-30 gx-60">
                        <div className="col-xl-5">
                            <div className="team-single-left" data-aos="fade-up" data-aos-duration="600">
                                <div className="thumb image-hover-effect mb-30">
                                    <img src="/images/team-details.png" className="img-fluid w-100" alt="team deatils" />
                                </div>
                                <h2 className="header-lg mb-20">Doctor Skill</h2>
                                <p className="mb-40">Dr. Stephanie Holmgren possesses exceptional clinical and diagnostic
                                    skills, with a
                                    strong ability assess complex medical conditions and develop effective treatment
                                    plans tailored to each patient’s needs. His expertise extends across a broad
                                    spectrum</p>
                                <div className="progress-bars" data-aos="fade-up" data-aos-duration="600">
                                    <div className="progress-item mb-10" data-percent="90">
                                        <div className="progress-header">
                                            <span className="progress-label header-sm">Cardia Monitoring</span>
                                            <span className="progress-badge">90%</span>
                                        </div>
                                        <div className="progress-track">
                                            <div className="progress-fill"></div>
                                        </div>
                                    </div>
                                    <div className="progress-item mb-10" data-percent="70">
                                        <div className="progress-header">
                                            <span className="progress-label header-sm">Patients Recovery</span>
                                            <span className="progress-badge">70%</span>
                                        </div>
                                        <div className="progress-track">
                                            <div className="progress-fill"></div>
                                        </div>
                                    </div>
                                    <div className="progress-item mb-10" data-percent="85">
                                        <div className="progress-header">
                                            <span className="progress-label header-sm">Heart Specialists</span>
                                            <span className="progress-badge">85%</span>
                                        </div>
                                        <div className="progress-track">
                                            <div className="progress-fill"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="team-single-content" data-aos="fade-up" data-aos-duration="600">
                                <h2 className="header-lg mb-10">Stephanie Holmgren</h2>
                                <p className="mb-30">Medical Specialist</p>
                                <h3 className="header-md mb-10">Biography</h3>
                                <p>Dr. Stephanie Holmgren completed his/her medical degree at kardi, followed by a
                                    residency in Internal Medicine at kardi and a fellowship in Cardiology at Kardi.
                                    During training, Dr. Stephanie Holmgren developed a strong interest in specific area
                                    e.g interventional heart failure management combines medical precision</p>

                                <ul className="ser-team-info" data-aos="fade-up" data-aos-duration="600">
                                    <li>
                                        <span className="info">Phone</span>
                                        <a href="tel:+919769000091">+91 97690 00091</a>
                                    </li>
                                    <li>
                                        <span className="info">Website</span>
                                        <a href="www.creativesplanet.com">www.creativesplanet.com</a>
                                    </li>
                                    <li>
                                        <span className="info">Email</span>
                                        <a href="mailto:MedFordhospital@gmail.com">MedFordhospital@gmail.com</a>
                                    </li>
                                </ul>

                                <ul className="team-single-social-icon mb-30" data-aos="fade-up" data-aos-duration="600">
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="https://in.linkedin.com/company/medford-multi-specialty-hospital" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                </ul>

                                <form className="contact-page-one" action="#" data-aos="fade-up" data-aos-duration="600">
                                    <h3 className="header-md mb-20">Send us message anytime</h3>
                                    <p className="mb-30">Feel Free to Contact us any time. We will get back to you as soon
                                        as we
                                        can!</p>
                                    <div className="row">
                                        <div className="col-md-6 mb-30">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="col-md-6 mb-30">
                                            <input type="email" placeholder="Your Email" />
                                        </div>
                                        <div className="col-md-6 mb-30">
                                            <input type="text" placeholder="Your Phone" />
                                        </div>
                                        <div className="col-md-6 mb-30">
                                            <input type="text" value="Subject" />
                                        </div>
                                        <div className="col-12 mb-30">
                                            <textarea placeholder="Your Message"></textarea>
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
                                </form>
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
