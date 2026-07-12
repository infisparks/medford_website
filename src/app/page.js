"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabComponent from "@/components/TabComponent";
import FaqAccordion from "@/components/FaqAccordion";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const facilitiesTabs = [
  {
    id: "tab1",
    label: "Facilities",
    image: "/images/tab-01.png",
    features: [
      "We accept many insurance plans and offer discounts",
      "Friendly team you can call friends",
      "We use energy saving and waste reducing methods"
    ]
  },
  {
    id: "tab2",
    label: "Reaction",
    image: "/images/tab-02.png",
    features: [
      "We accept many insurance plans and offer discounts",
      "Friendly team you can call friends",
      "We use energy saving and waste reducing methods"
    ]
  },
  {
    id: "tab3",
    label: "Emergency",
    image: "/images/tab-03.png",
    features: [
      "We accept many insurance plans and offer discounts",
      "Friendly team you can call friends",
      "We use energy saving and waste reducing methods"
    ]
  }
];

const faqItems = [
  {
    question: "What tests might a cardiologist recommend?",
    answer: "With advanced care expert doctors and a supportive environment we focus not just on managing symptoms but on helping you heal and regain your quality of life take the first step today because you deserve to feel better live better and be well"
  },
  {
    question: "When should I see a cardiologist?",
    answer: "There are many variations of passages the majority have suffered time alteration in some fo injected humour, or randomised words believable some time apart from time"
  },
  {
    question: "How can I prepare for a heart test or procedure?",
    answer: "There are many variations of passages the majority have suffered time alteration in some fo injected humour, or randomised words believable some time apart from time"
  },
  {
    question: "What does a cardiologist do?",
    answer: "There are many variations of passages the majority have suffered time alteration in some fo injected humour, or randomised words believable some time apart from time"
  },
  {
    question: "How often should I have my heart checked?",
    answer: "There are many variations of passages the majority have suffered time alteration in some fo injected humour, or randomised words believable some time apart from time"
  }
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "2026-05-02",
    service: "service-one",
    doctor: "Doctor",
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
      appointment_date: formData.date,
      service: formData.service.toUpperCase(),
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
        service: "service-one",
        doctor: "Doctor",
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

        {/* hero */}
        <section className="ta-hero-one pta-120 bg-cover" style={{backgroundImage: "url(/images/bg.png)"}}>
            <div className="container">
                <div className="ta-hero-one-wrap">
                    <div className="row align-items-center justify-content-center gy-30">
                        <div className="col-xxl-6">
                            <div className="hero-left">
                                <p className="sub-title" data-aos="fade-up" data-aos-duration="600">be heart healthy</p>
                                <h1 className="header-xxl mb-40 txt-anim-2" data-aos="fade-up" data-aos-duration="600">
                                    maximum care for
                                    patients health <img src="/images/header.png" alt="header image" />
                                    issues wellbing</h1>
                                <p className="mb-50" data-aos="fade-up" data-aos-duration="600">With a team of experienced
                                    cardiologists cardiac surgeons and
                                    specialized staff we
                                    provide comprehensive care using advanced technology and evidence based practices
                                    from routine heart screenings</p>
                                <div className="btn-grp" data-aos="fade-up" data-aos-duration="600">
                                    <a href="/appointment" className="ta-button-01">
                                        Book Appointment
                                        <span className="button__icon-wrapper">
                                            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                                            </svg>

                                            <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                                                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </a>
                                    <a className="popup-video ta-glightbox" href="https://www.youtube.com/watch?v=CHYX0TwfgFM"> <i className="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6">
                            <div className="hero-right">
                                <img src="/images/main.png" className="main-img img-fluid" alt="hero main" data-aos="fade-up" data-aos-duration="600" />
                                <img src="/images/circle.png" className="circle d-none d-xl-flex" alt="hero main" data-aos="fade-left" data-aos-duration="600" />
                                <div className="group" data-aos="fade-left" data-aos-duration="600">
                                    <img src="/images/group.png" alt="hero main" />
                                    <p>
                                        <span className="odometer header-md" data-count="30,000">00</span> Patients Have
                                        Trusted
                                        Cardia Services!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* feature */}
        <section className="ta-feature-one">
            <div className="container-fluid">
                <div className="ta-feature-one-wrap">
                    <div className="row gy-30">
                        <div className="col-md-6 col-xl-3" data-aos="fade-up" data-aos-duration="300">
                            <div className="ta-feature-one-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/feature-icon-01.png" alt="feature icon" />
                                    </div>
                                    <div className="arrow">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2 className="header-sm">Regularly Checkup</h2>
                                    <p className="text">Regular checkups are vital part of maintaining overall health and
                                        preventin serious medical the conditions these routine visits healthcare</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3" data-aos="fade-up" data-aos-duration="400">
                            <div className="ta-feature-one-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/feature-icon-02.png" alt="feature icon" />
                                    </div>
                                    <div className="arrow">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2 className="header-sm">Professional Team</h2>
                                    <p className="text">Our professional team is the backbone of the exceptional care
                                        service we provide comprised of highly skilled doctors specialists</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3" data-aos="fade-up" data-aos-duration="500">
                            <div className="ta-feature-one-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/feature-icon-03.png" alt="feature icon" />
                                    </div>
                                    <div className="arrow">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2 className="header-sm">Personalized Healthcare</h2>
                                    <p className="text">Personalized healthcare is at the heart of our approach patient care
                                        we recognize that every individual is unique with specific health</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3" data-aos="fade-up" data-aos-duration="600">
                            <div className="ta-feature-one-item">
                                <div className="icon">
                                    <div className="img">
                                        <img src="/images/feature-icon-04.png" alt="feature icon" />
                                    </div>
                                    <div className="arrow">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="content">
                                    <h2 className="header-sm">Nuclear Stress Testing</h2>
                                    <p className="text">Nuclear stress testing is a safe and effective
                                        diagnostic tool use to evaluate blood flow to the
                                        heart muscle during physical stress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* about */}
        <section className="ta-about-one pta-120">
            <div className="container">
                <div className="ta-about-one-wrap">
                    <div className="row gy-30 align-items-center justify-content-center">
                        <div className="col-md-6 col-xl-5">
                            <div className="ta-about-one-left">
                                <p className="sub-title aos-init " data-aos="fade-up" data-aos-duration="600">About Cardia
                                </p>
                                <h2 className="header-xl txt-anim-2 mb-20" data-aos="fade-up" data-aos-duration="600">Heart
                                    Surgery Specialist Expert Doctors</h2>
                                <p className="mb-20" data-aos="fade-up" data-aos-duration="600">Our skilled cardiology team
                                    performs nuclear stress tests with
                                    precision and
                                    care ensuring accurate results that guide personalized treatment</p>
                                <ul className="feature mb-20" data-aos="fade-up" data-aos-duration="600">
                                    <li><i className="fa-jelly-fill fa-regular fa-check"></i> Benefits Of Health Conscious
                                        Living</li>
                                    <li><i className="fa-jelly-fill fa-regular fa-check"></i> Benefits Of Proactive Health
                                        Management</li>
                                    <li><i className="fa-jelly-fill fa-regular fa-check"></i> Countless Benefits Of
                                        Prioritizing Health</li>
                                </ul>
                                <a href="/about" className="ta-button-02" data-aos="fade-up" data-aos-duration="600">
                                    More About Us
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
                        <div className="col-md-6 col-xl-3">
                            <div className="ta-about-one-middle">
                                <img src="/images/about-main.png" data-aos="zoom-in" data-aos-duration="600" alt="about main" />
                                <div className="about-shape" data-aos="zoom-in-left" data-aos-duration="600">
                                    <img src="/images/shape.png" className="shape-img" alt="about shape" />
                                    <img src="/images/about-logo.png" className="logo-img" alt="about logo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-4">
                            <ul className="ta-about-one-right" data-aos="fade-up" data-aos-duration="600">
                                <li className="icon-item">
                                    <div className="icon">
                                        <img src="/images/icon-01.png" alt="about-icon" />
                                    </div>
                                    <div className="text">
                                        <h3 className="header-md">Comfort Environment</h3>
                                        <p>Comfort Environment provide to all patient at
                                            heath care hospital heart function</p>
                                    </div>
                                </li>
                                <li className="icon-item">
                                    <div className="icon">
                                        <img src="/images/icon-02.png" alt="about-icon" />
                                    </div>
                                    <div className="text">
                                        <h3 className="header-md">Expert Cardiologist</h3>
                                        <p>Our Expert Cardiologists are easily manage all
                                            heart surgeries cholesterol management</p>
                                    </div>
                                </li>
                                <li className="icon-item">
                                    <div className="icon">
                                        <img src="/images/icon-03.png" alt="about-icon" />
                                    </div>
                                    <div className="text">
                                        <h3 className="header-md">Cardio Monitoring</h3>
                                        <p>We have latest Cardio Monitoring technologies
                                            in our health care invasive procedures</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* facilities */}
        <section className="ta-facilities-one pb-120">
            <div className="container">
                <div className="ta-facilities-one-wrap">
                    <div className="row gy-30 align-items-center justify-content-center">
                        <div className="col-xl-8">
                            <div className="ta-facilities-one-left ta-tab">
                                <p className="sub-title" data-aos="fade-up" data-aos-duration="600">Our Facilities
                                </p>
                                <h2 className="header-xl txt-anim-2 mb-20" data-aos="fade-up" data-aos-duration="600">we
                                    take good care for your health</h2>
                                <p data-aos="fade-up" data-aos-duration="600">With a multidisciplinary approach that
                                    brings together cardiologists cardiac surgeons
                                    nurses and other healthcare
                                    professionals these services strive to deliver high quality patient centered care
                                    that improves outcomes</p>
                                <TabComponent tabs={facilitiesTabs} />
                            </div>
                        </div>
                        <div className="col-xl-4 d-none d-xl-flex parent">
                            <div className="ta-facilities-one-right moveAround" data-aos="zoom-in" data-aos-duration="600">
                                <img src="/images/facilities-main.png" className="img-fluid" alt="facilities main" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* service */}
        <section className="ta-service-one pta-120">
            <div className="container">
                <div className="ta-service-one-wrap">
                    <div className="row gy-30 align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="center-sub-main-header service-one-header">
                                <p className="sub-title aos-init mb-30 text-white" data-aos="fade-up" data-aos-duration="600">SERVICES
                                    WE PROVIDE </p>
                                <h2 className="header-xl txt-anim-2 text-white" data-aos="fade-up" data-aos-duration="600">
                                    Reliable &
                                    High Quality Service</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-duration="600">
                        <div className="col-lg-6">
                            <div className="service-one-item">
                                <div className="icon">
                                    <a className="service-icon" href="/service">
                                        <img src="/images/service-icon-01.png" alt="service icon" />
                                    </a>
                                    <a className="service-img" href="/service">
                                        <img src="/images/service-image-01.png" alt="service icon" />
                                    </a>
                                </div>
                                <div className="info">
                                    <span className="serial">
                                        <svg width="60" height="1" viewBox="0 0 60 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.2" x1="-4.37114e-08" y1="0.5" x2="60" y2="0.499995" stroke="white"></line>
                                        </svg>
                                        01
                                    </span>
                                    <a href="/service">
                                        <h3 className="header-md">Heart Failure Management</h3>
                                    </a>
                                </div>
                                <a className="arrow" href="/service">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.25 1.25L1.25 21.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3.25 1.25H21.25V19.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-one-item">
                                <div className="icon">
                                    <a className="service-icon" href="/service">
                                        <img src="/images/service-icon-05.png" alt="service icon" />
                                    </a>
                                    <a className="service-img" href="/service">
                                        <img src="/images/service-image-02.png" alt="service icon" />
                                    </a>
                                </div>
                                <div className="info">
                                    <span className="serial">
                                        <svg width="60" height="1" viewBox="0 0 60 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.2" x1="-4.37114e-08" y1="0.5" x2="60" y2="0.499995" stroke="white"></line>
                                        </svg>
                                        02
                                    </span>
                                    <a href="/service">
                                        <h3 className="header-md">Preventive Cardiology and Risk Assessment</h3>
                                    </a>
                                </div>
                                <a className="arrow" href="/service">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.25 1.25L1.25 21.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3.25 1.25H21.25V19.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-one-item">
                                <div className="icon">
                                    <a className="service-icon" href="/service">
                                        <img src="/images/service-icon-03.png" alt="service icon" />
                                    </a>
                                    <a className="service-img" href="/service">
                                        <img src="/images/service-image-03.png" alt="service icon" />
                                    </a>
                                </div>
                                <div className="info">
                                    <span className="serial">
                                        <svg width="60" height="1" viewBox="0 0 60 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.2" x1="-4.37114e-08" y1="0.5" x2="60" y2="0.499995" stroke="white"></line>
                                        </svg>
                                        03
                                    </span>
                                    <a href="/service">
                                        <h3 className="header-md">Coronary Angioplasty and Stenting</h3>
                                    </a>
                                </div>
                                <a className="arrow" href="#">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.25 1.25L1.25 21.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3.25 1.25H21.25V19.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-one-item">
                                <div className="icon">
                                    <a className="service-icon" href="/service">
                                        <img src="/images/service-icon-04.png" alt="service icon" />
                                    </a>
                                    <a className="service-img" href="/service">
                                        <img src="/images/service-image-04.png" alt="service icon" />
                                    </a>
                                </div>
                                <div className="info">
                                    <span className="serial">
                                        <svg width="60" height="1" viewBox="0 0 60 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.2" x1="-4.37114e-08" y1="0.5" x2="60" y2="0.499995" stroke="white"></line>
                                        </svg>
                                        04
                                    </span>
                                    <a href="/service">
                                        <h3 className="header-md">Holter and Event Monitoring</h3>
                                    </a>
                                </div>
                                <a className="arrow" href="/service">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.25 1.25L1.25 21.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3.25 1.25H21.25V19.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-one-item">
                                <div className="icon">
                                    <a className="service-icon" href="/service">
                                        <img src="/images/service-icon-05.png" alt="service icon" />
                                    </a>
                                    <a className="service-img" href="/service">
                                        <img src="/images/service-image-05.png" alt="service icon" />
                                    </a>
                                </div>
                                <div className="info">
                                    <span className="serial">
                                        <svg width="60" height="1" viewBox="0 0 60 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.2" x1="-4.37114e-08" y1="0.5" x2="60" y2="0.499995" stroke="white"></line>
                                        </svg>
                                        05
                                    </span>
                                    <a href="/service">
                                        <h3 className="header-md">Cardiac Catheterization and Angiography</h3>
                                    </a>
                                </div>
                                <a className="arrow" href="/service">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.25 1.25L1.25 21.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3.25 1.25H21.25V19.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-one-item">
                                <div className="icon">
                                    <a className="service-icon" href="/service">
                                        <img src="/images/service-icon-06.png" alt="service icon" />
                                    </a>
                                    <a className="service-img" href="/service">
                                        <img src="/images/service-image-06.png" alt="service icon" />
                                    </a>
                                </div>
                                <div className="info">
                                    <span className="serial">
                                        <svg width="60" height="1" viewBox="0 0 60 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line opacity="0.2" x1="-4.37114e-08" y1="0.5" x2="60" y2="0.499995" stroke="white"></line>
                                        </svg>
                                        06
                                    </span>
                                    <a href="/service">
                                        <h3 className="header-md">Pacemaker and ICD Implantation</h3>
                                    </a>
                                </div>
                                <a className="arrow" href="/service">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.25 1.25L1.25 21.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3.25 1.25H21.25V19.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* pricing */}
        <section className="ta-pricing-one pta-120">
            <div className="container">
                <div className="ta-pricing-one-wrap">
                    <div className="row mb-50 align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="center-sub-main-header">
                                <p className="sub-title aos-init mb-20" data-aos="fade-up" data-aos-duration="600">What we
                                    offer </p>
                                <h2 className="header-xl txt-anim-2" data-aos="fade-up" data-aos-duration="600">Reasonable
                                    Plan of Treatment</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30 align-items-center justify-content-center">
                        <div className="col-md-6 col-xl-4" data-aos="fade-up" data-aos-duration="400">
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <div className="text">
                                        <span>Basic plan</span>
                                        <h3 className="header-md">Basic Care</h3>
                                        <h3 className="header-lg">$29/<span>Per Person</span></h3>
                                    </div>
                                    <div className="icon">
                                        <img src="/images/pricing-icon-01.png" alt="pricing icon" />
                                    </div>
                                </div>
                                <div className="header-content">
                                    <h3 className="header-md">What's included?</h3>
                                    <ul className="feature">
                                        <li>
                                            <span>Expert Nursing facility give us doctor</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Instant Checkup & Appointment</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Quickly response provide our specialist</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Online Consultant To The Patient</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Our doctors are the health caring & heart</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                    </ul>
                                </div>
                                <a href="/contact" className="ta-button-02">
                                    Book Your Test
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
                        <div className="col-md-6 col-xl-4" data-aos="fade-up" data-aos-duration="500">
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <div className="text">
                                        <span>Premium Plan</span>
                                        <h3 className="header-md">Essential Care</h3>
                                        <h3 className="header-lg">$49/<span>Per Person</span></h3>
                                    </div>
                                    <div className="icon">
                                        <img src="/images/pricing-icon-02.png" alt="pricing icon" />
                                    </div>
                                </div>
                                <div className="header-content">
                                    <h3 className="header-md">What's included?</h3>
                                    <ul className="feature">
                                        <li>
                                            <span>Fre consulting Until cooperation</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Hygiene Treatment (16 years old)</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Organic Essential Oils</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Hygiene Treatment (Biofilm Therapy)</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Follow-up calls & assistance</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                    </ul>
                                </div>
                                <a href="/contact" className="ta-button-01">
                                    Book Your Test
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
                        <div className="col-md-6 col-xl-4" data-aos="fade-up" data-aos-duration="600">
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <div className="text">
                                        <span>Standard Plan</span>
                                        <h3 className="header-md">Total Care</h3>
                                        <h3 className="header-lg">$89/<span>Per Person</span></h3>
                                    </div>
                                    <div className="icon">
                                        <img src="/images/pricing-icon-03.png" alt="pricing icon" />
                                    </div>
                                </div>
                                <div className="header-content">
                                    <h3 className="header-md">What's included?</h3>
                                    <ul className="feature">
                                        <li>
                                            <span>Complete Blood Count</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Sexually Transmitted Diseases</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Cholesterol / Lipid Levels</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Liver Function Blood Test</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                        <li>
                                            <span>Chronic condition management</span>
                                            <i className="fa-sharp fa-solid fa-badge-check"></i>
                                        </li>
                                    </ul>
                                </div>
                                <a href="/contact" className="ta-button-02">
                                    Book Your Test
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
                    </div>
                </div>
            </div>
        </section>

        {/* text-slider */}
        <div className="ta-text-slider-one mb-30">
            <div className="container-fluid">
                <div className="marquee-right" data-aos="fade-in" data-aos-duration="1200">
                    <div className="marquee-inner">
                        <a href="#" className="marquee-text">case studies</a>
                        <a href="#"><img src="/images/marquee-shape.png" alt="marquee shape" /></a>
                        <a href="#" className="marquee-text">case studies</a>
                        <a href="#"><img src="/images/marquee-shape.png" alt="marquee shape" /></a>
                        <a href="#" className="marquee-text">case studies</a>
                        <a href="#"><img src="/images/marquee-shape.png" alt="marquee shape" /></a>
                        <a href="#" className="marquee-text">case studies</a>
                        <a href="#"><img src="/images/marquee-shape.png" alt="marquee shape" /></a>
                    </div>
                </div>
            </div>
        </div>

        {/* case study*/}
        <section className="ta-case-one pb-120">
            <div className="container">
                <div className="ta-case-one-wrap ta-tab">
                    <div className="row gy-30">
                        <div className="col-lg-6">
                            <ul className="ta-tab-nav ta-case-one-list" data-aos="fade-up" data-aos-duration="600">
                                <li data-tab="a1">
                                    <div className="text">
                                        <span>cardiology</span>
                                        <h3 className="header-md">latest equipment surgery</h3>
                                    </div>
                                    <div className="arrow">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li className="active" data-tab="a2">
                                    <div className="text">
                                        <span>Saving Lives</span>
                                        <h3 className="header-md">blood pressure monitoring</h3>
                                    </div>
                                    <div className="arrow">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li data-tab="a3">
                                    <div className="text">
                                        <span>healthcare</span>
                                        <h3 className="header-md">heart transplant carefully</h3>
                                    </div>
                                    <div className="arrow">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li data-tab="a4">
                                    <div className="text">
                                        <span>treatment</span>
                                        <h3 className="header-md">heart failure management</h3>
                                    </div>
                                    <div className="arrow">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="ta-tab-content" data-aos="fade-up" data-aos-duration="600">
                                <div className="ta-tab-pane" id="a1">
                                    <div className="ta-facilities-content">
                                        <div className="img-box image-hover-effect">
                                            <img src="/images/case-01.png" className="img-fluid" alt="facilities image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ta-tab-pane active" id="a2">
                                    <div className="ta-facilities-content">
                                        <div className="img-box image-hover-effect">
                                            <img src="/images/case-02.png" className="img-fluid" alt="facilities image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ta-tab-pane" id="a3">
                                    <div className="ta-facilities-content">
                                        <div className="img-box image-hover-effect">
                                            <img src="/images/case-01.png" className="img-fluid" alt="facilities image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ta-tab-pane" id="a4">
                                    <div className="ta-facilities-content">
                                        <div className="img-box image-hover-effect">
                                            <img src="/images/case-02.png" className="img-fluid" alt="facilities image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* testimonial */}
        <section className="ta-testimonial-one pb-120">
            <div className="container">
                <div className="ta-testimonial-one-wrap">
                    <div className="row mb-50 align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="center-sub-main-header">
                                <p className="sub-title aos-init mb-20" data-aos="fade-up" data-aos-duration="600">patients
                                    testimonials</p>
                                <h2 className="header-xl txt-anim-2" data-aos="fade-up" data-aos-duration="600">Real Stories
                                    And our achievements</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30 align-items-center justify-content-center">
                        <div className="col-xl-5">
                            <div className="testi-one-left bg-cover" style={{backgroundImage: "url(/images/testi-bg.png)"}}>
                                <img src="/images/testi-shape.svg" className="img-fluid" alt="testimonial shape" />
                                <h3 className="header-lg text-center">
                                    Excellence in Clinical Leadership and
                                    Medical Innovation Award
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="swiper testiOneSwiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testi-one-item">
                                            <div className="testi-img">
                                                <img src="/images/testi-01.png" className="img-fluid" alt="testimonial image" />
                                                <i className="fa-sharp fa-solid fa-quote-left"></i>
                                            </div>
                                            <div className="testi-content">
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="desc">"From the moment I walked into the cardiology
                                                    department, I felt I was in the best hands possible the entire team
                                                    from the receptionist to the cardiologist treated me with kindness
                                                    patience and professionalism. My doctor took the time to explain
                                                    every detail of my diagnosis treatment options and what to expect
                                                    during recovery. Thanks to their expert care my heart condition.”
                                                </p>
                                                <div className="info">
                                                    <a href="#">
                                                        <h3 className="header-md">Guadalupe Hickman</h3>
                                                    </a>
                                                    <span>Happy Patients</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-one-item">
                                            <div className="testi-img">
                                                <img src="/images/testi-02.png" className="img-fluid" alt="testimonial image" />
                                                <i className="fa-sharp fa-solid fa-quote-left"></i>
                                            </div>
                                            <div className="testi-content">
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="desc">"From the moment I walked into the cardiology
                                                    department, I felt I was in the best hands possible the entire team
                                                    from the receptionist to the cardiologist treated me with kindness
                                                    patience and professionalism. My doctor took the time to explain
                                                    every detail of my diagnosis treatment options and what to expect
                                                    during recovery. Thanks to their expert care my heart condition.”
                                                </p>
                                                <div className="info">
                                                    <a href="#">
                                                        <h3 className="header-md">Soifa Belly</h3>
                                                    </a>
                                                    <span>Happy Patients</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-one-item">
                                            <div className="testi-img">
                                                <img src="/images/testi-03.png" className="img-fluid" alt="testimonial image" />
                                                <i className="fa-sharp fa-solid fa-quote-left"></i>
                                            </div>
                                            <div className="testi-content">
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p className="desc">"From the moment I walked into the cardiology
                                                    department, I felt I was in the best hands possible the entire team
                                                    from the receptionist to the cardiologist treated me with kindness
                                                    patience and professionalism. My doctor took the time to explain
                                                    every detail of my diagnosis treatment options and what to expect
                                                    during recovery. Thanks to their expert care my heart condition.”
                                                </p>
                                                <div className="info">
                                                    <a href="#">
                                                        <h3 className="header-md">Denifer Jorder</h3>
                                                    </a>
                                                    <span>Happy Patients</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* process */}
        <section className="ta-process-one pta-120">
            <div className="container">
                <div className="ta-process-one-wrap">
                    <div className="row gy-30 align-items-center justify-content-center mb-50">
                        <div className="col-12">
                            <div className="center-sub-main-header " >
                                <p className="sub-title mb-20 text-white" data-aos="fade-up" data-aos-duration="600">working
                                    process</p>
                                <h2 className="header-xl txt-anim-2 text-white" data-aos="fade-up" data-aos-duration="600">
                                    Online
                                    Simple Step For Appointment</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30 align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="600">
                        <div className="col-md-6 col-xl-4">
                            <div className="process-item-one">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="/images/process-icon-01.png" alt="process image" />
                                    </div>
                                    <span>Step 01</span>
                                </div>
                                <div className="text">
                                    <h3 className="header-md">Make Appointment</h3>
                                    <p>Your heart health matters and taking the first step
                                        toward care is easier than ever. Whether experiencing
                                        symptoms or simply need a routine check up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="process-item-one">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="/images/process-icon-02.png" alt="process image" />
                                    </div>
                                    <span>Step 02</span>
                                </div>
                                <div className="text">
                                    <h3 className="header-md">Select Expert Doctor</h3>
                                    <p>Choosing the right doctor is one of the most important decisions you can make for
                                        your health. Our team expert physicians combines years of clinical experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="process-item-one border-0">
                                <div className="icon-box">
                                    <div className="icon">
                                        <img src="/images/process-icon-03.png" alt="process image" />
                                    </div>
                                    <span>Step 03</span>
                                </div>
                                <div className="text">
                                    <h3 className="header-md">Get Cure & Relief</h3>
                                    <p>If you are living with discomfort pain or ongoing health concerns know that
                                        relief is possible and you don’t have to face it alone our dedicated medical
                                        team is here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* contact / appointment submission */}
        <section className="ta-contact-one pta-120">
            <div className="container">
                <div className="ta-contact-one-wrap">
                    <div className="row gy-30">
                        <div className="col-xl-6">
                            <form className="contact-form-one" onSubmit={handleSubmit}>
                                <div className="row">
                                    <h3 className="header-md mb-20">Book Your Appointment Today!</h3>
                                    <p className="mb-30">Your health is your greatest asset don’t wait to take care of it.
                                        Whether you're coming in for a routine check up a specialist consultation or ongoing treatment</p>
                                    
                                    <div className="col-md-6 mb-20">
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" required />
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <select name="service" value={formData.service} onChange={handleChange}>
                                            <option value="service-one">Service One</option>
                                            <option value="service-two">Service Two</option>
                                            <option value="service-three">Service Three</option>
                                            <option value="service-four">Service Four</option>
                                            <option value="service-six">Service Five</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <select name="doctor" value={formData.doctor} onChange={handleChange}>
                                            <option value="Doctor">Doctor One</option>
                                            <option value="Doctor-two">Doctor Two</option>
                                            <option value="Doctor-three">Doctor Three</option>
                                            <option value="Doctor-four">Doctor Four</option>
                                            <option value="Doctor-six">Doctor Five</option>
                                        </select>
                                    </div>
                                    <div className="col-12 mb-30">
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
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
                        <div className="col-xl-6">
                            <div className="accordion-one">
                                <p className="sub-title aos-init" data-aos="fade-up" data-aos-duration="600">Frequently Asked Questions</p>
                                <h2 className="header-xl txt-anim-2 mb-20" data-aos="fade-up" data-aos-duration="600">have all question cleared up something with Cardia</h2>

                                <FaqAccordion items={faqItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* partners */}
        <div className="ta-partners-one pb-120">
            <div className="container">
                <div className="ta-partners-one-wrap">
                    <div className="row">
                        <div className="col-12">
                            <div className="swiper partnerOneSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <a href="#" className="partner">
                                            <img src="/images/partner-01.png" alt="partners" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="partner">
                                            <img src="/images/partner-02.png" alt="partners" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="partner">
                                            <img src="/images/partner-03.png" alt="partners" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="partner">
                                            <img src="/images/partner-04.png" alt="partners" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="partner">
                                            <img src="/images/partner-05.png" alt="partners" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="partner">
                                            <img src="/images/partner-06.png" alt="partners" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="partner">
                                            <img src="/images/partner-01.png" alt="partners" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="partner">
                                            <img src="/images/partner-02.png" alt="partners" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="#" className="partner">
                                            <img src="/images/partner-03.png" alt="partners" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* blog */}
        <section className="ta-blog-one pb-120">
            <div className="container">
                <div className="ta-blog-one-wrap">
                    <div className="row mb-50 align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="center-sub-main-header">
                                <p className="sub-title aos-init mb-20" data-aos="fade-up" data-aos-duration="600">news & blog</p>
                                <h2 className="header-xl txt-anim-2" data-aos="fade-up" data-aos-duration="600">Explore The Latest News & Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center gy-30">
                        <div className="col-md-6 col-xl-4" data-aos="fade-up" data-aos-duration="300">
                            <article className="ta-blog-grid-01">
                                <div className="news-thumb image-hover-effect">
                                    <img decoding="async" width="530" height="370" src="/images/blog-img-01.png" className="img-fluid" alt="blog image" />
                                    <div className="news-thumb-meta">
                                        <span className="thumb-date">01 <br /></span>
                                        <span className="thumb-month">Dec</span>
                                    </div>
                                </div>
                                <div className="news-description">
                                    <div className="news-top-meta">
                                        <div className="post_meta post-author">
                                            <div className="author-thumb">
                                                <i className="far fa-user" aria-hidden="true"></i>
                                                <span className="note">By</span>
                                                <a href="#" className="name"> admin </a>
                                            </div>
                                        </div>
                                        <div className="post_meta post-comments">
                                            <span className="entry-comments">
                                                <i className="far fa-comments" aria-hidden="true"></i>
                                                <a href="#"> Comments (05) </a>
                                            </span>
                                        </div>
                                    </div>
                                    <h2 className="header-md bg-line-underline"><a href="#">Women and Heart Disease Symptoms You Shouldn’t Ignore</a></h2>
                                    <div className="post-excerpt">
                                        <p>It depends on your age risk factors and medical history for those risk or over annual check up may be advised Your cardiologist</p>
                                    </div>
                                    <div className="read-more-button">
                                        <a href="#" className="bg-line-underline">Read More <i className="fa-sharp-duotone fa-solid fa-arrow-up-left"></i></a>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-xl-4" data-aos="fade-up" data-aos-duration="400">
                            <article className="ta-blog-grid-01">
                                <div className="news-thumb image-hover-effect">
                                    <img decoding="async" width="530" height="370" src="/images/blog-img-03.png" className="img-fluid" alt="blog image" />
                                    <div className="news-thumb-meta">
                                        <span className="thumb-date">01 <br /></span>
                                        <span className="thumb-month">Dec</span>
                                    </div>
                                </div>
                                <div className="news-description">
                                    <div className="news-top-meta">
                                        <div className="post_meta post-author">
                                            <div className="author-thumb">
                                                <i className="far fa-user" aria-hidden="true"></i>
                                                <span className="note">By</span>
                                                <a href="#" className="name"> admin </a>
                                            </div>
                                        </div>
                                        <div className="post_meta post-comments">
                                            <span className="entry-comments">
                                                <i className="far fa-comments" aria-hidden="true"></i>
                                                <a href="#"> Comments (05) </a>
                                            </span>
                                        </div>
                                    </div>
                                    <h2 className="header-md bg-line-underline"><a href="#">Heart Attack Symptoms What You Should Never Ignore</a></h2>
                                    <div className="post-excerpt">
                                        <p>It depends on your age risk factors and medical history for those risk or over annual check up may be advised Your cardiologist</p>
                                    </div>
                                    <div className="read-more-button">
                                        <a href="#" className="bg-line-underline">Read More <i className="fa-sharp-duotone fa-solid fa-arrow-up-left"></i></a>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-xl-4" data-aos="fade-up" data-aos-duration="500">
                            <article className="ta-blog-grid-01">
                                <div className="news-thumb image-hover-effect">
                                    <img decoding="async" width="530" height="370" src="/images/blog-img-06.png" className="img-fluid" alt="blog image" />
                                    <div className="news-thumb-meta">
                                        <span className="thumb-date">01 <br /></span>
                                        <span className="thumb-month">Dec</span>
                                    </div>
                                </div>
                                <div className="news-description">
                                    <div className="news-top-meta">
                                        <div className="post_meta post-author">
                                            <div className="author-thumb">
                                                <i className="far fa-user" aria-hidden="true"></i>
                                                <span className="note">By</span>
                                                <a href="#" className="name"> admin </a>
                                            </div>
                                        </div>
                                        <div className="post_meta post-comments">
                                            <span className="entry-comments">
                                                <i className="far fa-comments" aria-hidden="true"></i>
                                                <a href="#"> Comments (05) </a>
                                            </span>
                                        </div>
                                    </div>
                                    <h2 className="header-md bg-line-underline"><a href="#">Cholesterol Myths and Facts What You Really Need to Know</a></h2>
                                    <div className="post-excerpt">
                                        <p>The goal of cardiology is not only treat heart disease but also promote long term heart health through preventive care patient education</p>
                                    </div>
                                    <div className="read-more-button">
                                        <a href="#" className="bg-line-underline">Read More <i className="fa-sharp-duotone fa-solid fa-arrow-up-left"></i></a>
                                    </div>
                                </div>
                            </article>
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