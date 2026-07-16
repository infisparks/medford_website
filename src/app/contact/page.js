"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Subject",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name.toUpperCase(),
      email: formData.email.toUpperCase(),
      phone: formData.phone.toUpperCase(),
      subject: formData.subject.toUpperCase(),
      message: formData.message.toUpperCase(),
    };

    const { error } = await supabase
      .from("contact_inquiries")
      .insert([payload]);

    if (error) {
      console.error("Error saving contact message:", error);
      alert("There was an error sending your message. Please try again.");
    } else {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Subject",
        message: "",
      });
    }
  };

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
        <Breadcrumb title="Contact Us" pageName="Contact" />

        {/* contact info */}
        <section className="ta-contact-info-one pta-120">
            <div className="container">
                <div className="ta-contact-info-one-wrap">
                    <div className="row gy-30 align-items-center justify-content-center">
                        <div className="col-lg-6 col-xl-4">
                            <div className="contact-info-item" data-aos="fade-up" data-aos-duration="300">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="content">
                                    <h2 className="header-sm text-white">Phone Number</h2>
                                    <a className="text-white" href="tel:+919769000091">+91 97690 00091</a>
                                    <a className="text-white" href="tel:+919769000091">+91 97690 00091</a>
                                </div>
                                <div className="shape">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="contact-info-item" data-aos="fade-up" data-aos-duration="400">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="content">
                                    <h2 className="header-sm text-white">Our Email</h2>
                                    <a className="text-white" href="mailto:MedFordhospital@gmail.com">MedFordhospital@gmail.com</a>
                                    <a className="text-white" href="mailto:MedFordhospital@gmail.com">MedFordhospital@gmail.com</a>
                                </div>
                                <div className="shape">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="contact-info-item" data-aos="fade-up" data-aos-duration="500">
                                <div className="icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="content">
                                    <h2 className="header-sm text-white">Our Location</h2>
                                    <a className="text-white" href="#">Bluebells, Mumbra Bypass Road, Near Maaz Hotel, Kalsekar, Mumbra, Thane, Maharashtra 400612</a>
                                </div>
                                <div className="shape">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* contact us */}
        <section className="ta-contact-page-one pb-120">
            <div className="container">
                <div className="ta-contact-page-one-wrap">
                    <div className="row gy-30 align-items-center justify-content-center">
                        <div className="col-xl-6">
                            <form className="contact-page-one" onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="400">
                                <h3 className="header-md mb-20">Send us message anytime</h3>
                                <p className="mb-30">Feel Free to Contact us any time. We will get back to you as soon as we
                                    can!</p>
                                <div className="row">
                                    <div className="col-md-6 mb-30">
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 mb-30">
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                                    </div>
                                    <div className="col-md-6 mb-30">
                                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" required />
                                    </div>
                                    <div className="col-md-6 mb-30">
                                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                                    </div>
                                    <div className="col-12 mb-30">
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="ta-button-01">
                                            Send Message
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
                        <div className="col-xl-6">
                            <div className="ta-appointment-img" data-aos="fade-up" data-aos-duration="600">
                                <img src="/images/contact-us-main.png" className="img-fluid w-100" alt="appointment image" />
                                <div className="play-icon">
                                    <a className="ta-glightbox play-button-anime" href="https://www.youtube.com/watch?v=CHYX0TwfgFM">
                                        <i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* map */}
        <div className="ta-map-one pb-120">
            <div className="container">
                <div className="ta-map-one-wrap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24200.504778146773!2d-73.96063712906505!3d40.69460798807484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b944019a5db%3A0x349fb175590144dd!2sPrime%20Mold%20Removal%20Brooklyn!5e0!3m2!1sen!2sbd!4v1778015403875!5m2!1sen!2sbd" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

        {/* footer */}
      <Footer />
    </>
  );
}
