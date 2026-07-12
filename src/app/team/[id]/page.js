"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

// Full doctors database
const allDoctors = [
  { id: "dr-mohammed-sadique-khan", name: "Dr Mohammed Sadique Khan", qualification: "MBBS, DNB (Gen Med), PGDFM, CCEBDM", department: "General Medicine", departmentHi: "जनरल मेडिसिन्स", days: "Mon - Sat", timing: "12.30 pm – 1.30 pm", type: "OPD / IPD", image: "/images/doctor/Dr Mohammed Sadique Khan.png" },
  { id: "dr-rajesh-patil", name: "Dr Rajesh Patil", qualification: "MBBS, MD (Gen Med)", department: "General Medicine", departmentHi: "जनरल मेडिसिन्स", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/Dr Rajesh Patil.png" },
  { id: "dr-khalid-ahamad-ansari", name: "Dr Khalid Ahamad Ansari", qualification: "MBBS, MD (Med), DNB (Critical Care)", department: "General Medicine", departmentHi: "जनरल मेडिसिन्स", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/Dr Khalid Ahamad Ansari.png" },
  { id: "dr-raju-kanak", name: "Dr Raju Kanak", qualification: "MBBS, DNB (Gen Med)", department: "General Medicine", departmentHi: "जनरल मेडिसिन्स", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/Dr Raju Kanak.png" },
  { id: "dr-rameez-akhtar", name: "Dr Rameez Akhtar", qualification: "MBBS, MD (Gen Med)", department: "General Medicine", departmentHi: "जनरल मेडिसिन्स", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/Dr Rameez Akhtar.png" },
  { id: "dr-azhar-khan", name: "Dr Azhar Khan", qualification: "MBBS, TDD", department: "Chest Physician", departmentHi: "चेस्ट फिजिशियन", days: "Mon - Sat", timing: "4.00 pm – 6.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Azhar Khan.png" },
  { id: "dr-jaspreet-singh-khandpur", name: "Dr Jaspreet Singh Khandpur", qualification: "MBBS, MD (Pulmonary Med), DNB (MUHS), Interventional Bronchoscopy & Thoracoscopy (UK)", department: "Chest Physician", departmentHi: "चेस्ट फिजिशियन", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Jaspreet Singh Khandpur.png" },
  { id: "dr-imtiyaz-kazi", name: "Dr Imtiyaz Kazi", qualification: "MBBS, MS (Ortho)", department: "Orthopedic Surgeon", departmentHi: "ओर्थपेडीक सर्जन", days: "Mon - Sat", timing: "8.00 pm – 9.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Imtiyaz Kazi.png" },
  { id: "dr-bhavik-khandelwal", name: "Dr Bhavik Khandelwal", qualification: "MBBS, D-Ortho", department: "Orthopedic Surgeon", departmentHi: "ओर्थपेडीक सर्जन", days: "Mon - Sat", timing: "4.00 pm – 5.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Bhavik Khandelwal.png" },
  { id: "dr-dilawar-tonkwala", name: "Dr Dilawar Tonkwala", qualification: "MBBS, D-Ortho", department: "Orthopedic Surgeon", departmentHi: "ओर्थपेडीक सर्जन", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Dilawar Tonkwala.png" },
  { id: "dr-faisal-bape", name: "Dr Faisal Bape", qualification: "MBBS, D-Ortho", department: "Orthopedic Surgeon", departmentHi: "ओर्थपेडीक सर्जन", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/Dr Faisal Bape.png" },
  { id: "dr-maaz-ur-rehman-shaikh", name: "Dr Maaz ur Rehman Shaikh", qualification: "MBBS, MRCS (UK), FISS (Nagpur), FIMIS (Mum), FISDC (Mum)", department: "Spine Surgeon", departmentHi: "स्पाइन सर्जन", days: "Mon - Sat", timing: "9.00 pm", type: "OPD / IPD", image: "/images/doctor/noprofile.png" },
  { id: "dr-nishat-afrin-khan", name: "Dr Nishat Afrin Khan", qualification: "MBBS, MS (Gync)", department: "Gynecology", departmentHi: "गयनेकोलॉजिस्ट", days: "Mon - Sat", timing: "1.30 pm – 3.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Nishat Afrin Khan.png" },
  { id: "dr-kanak-misra", name: "Dr Kanak Misra", qualification: "MBBS, DGO, DNB, FRM", department: "Gynecology", departmentHi: "गयनेकोलॉजिस्ट", days: "Mon - Sat", timing: "4.00 pm – 5.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Kanak Misra.png" },
  { id: "dr-neerja-gupta", name: "Dr Neerja Gupta", qualification: "MBBS, MS (Gync)", department: "Gynecology", departmentHi: "गयनेकोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/Dr Neerja Gupta.png" },
  { id: "dr-aysha-aymen", name: "Dr Aysha Aymen", qualification: "MBBS, MS (Gync)", department: "Gynecology", departmentHi: "गयनेकोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Aysha Aymen.png" },
  { id: "dr-kalpana-kinake", name: "Dr Kalpana Kinake", qualification: "MBBS, DGO (Gync & Obs)", department: "Gynecology", departmentHi: "गयनेकोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/noprofile.png" },
  { id: "dr-vikrant-bhagvat", name: "Dr Vikrant Bhagvat", qualification: "MBBS, DNB, FAMS, FIAGES", department: "General & Lap. Surgeon", departmentHi: "जनरल & लपरसकोपिक सर्जन", days: "Mon - Sat", timing: "5.00 pm – 6.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Vikrant Bhagvat.png" },
  { id: "dr-juily-bhagvat", name: "Dr Juily Bhagvat", qualification: "MBBS, DNB, FAMS, FIAGES", department: "General & Lap. Surgeon", departmentHi: "जनरल & लपरसकोपिक सर्जन", days: "Mon - Sat", timing: "5.00 pm – 6.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Juily Bhagvat.png" },
  { id: "dr-aditya-phadke", name: "Dr Aditya Phadke", qualification: "MBBS, MS (Gen Sur)", department: "General & Lap. Surgeon", departmentHi: "जनरल & लपरसकोपिक सर्जन", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Aditya Phadke.png" },
  { id: "dr-tahoora-tajammul", name: "Dr Tahoora Tajammul", qualification: "MBBS, DNB (Gen Sur)", department: "General & Lap. Surgeon", departmentHi: "जनरल & लपरसकोपिक सर्जन", days: "Mon - Sat", timing: "4.00 pm – 5.00 pm", type: "OPD / IPD", image: "/images/doctor/noprofile.png" },
  { id: "dr-umang-shandilaya", name: "Dr Umang Shandilaya", qualification: "MBBS, MS (Gen Sur)", department: "General & Lap. Surgeon", departmentHi: "जनरल & लपरसकोपिक सर्जन", days: "Mon - Sat", timing: "12.30 pm – 1.00 pm", type: "OPD / IPD", image: "/images/doctor/noprofile.png" },
  { id: "dr-pooja-sutar", name: "Dr Pooja Sutar", qualification: "MBBS, DCH, Fellowship in Neonatology", department: "Pediatrician", departmentHi: "पीडियाट्रिशियन", days: "Mon, Tue, Thu, Fri, Sat", timing: "2.00 pm – 4.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Pooja Sutar.png" },
  { id: "dr-talib-surve", name: "Dr Talib Surve", qualification: "MBBS, MD (BOM), DCH, DNB, PGDHM, PGDMS, PGCPN (USA)", department: "Pediatrician", departmentHi: "पीडियाट्रिशियन", days: "Wed / Fri", timing: "3.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Talib Surve.png" },
  { id: "dr-osman-mapkar", name: "Dr Osman Mapkar", qualification: "MBBS, MD (Gen Med), MRCP (UK), SCE (UK)", department: "Gastroenterologist", departmentHi: "गैस्ट्रोएन्टेरोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Osman Mapkar.png" },
  { id: "dr-ganpati-kine", name: "Dr Ganpati Kine", qualification: "MBBS, MD (Gen Med), DNB (Gastero.)", department: "Gastroenterologist", departmentHi: "गैस्ट्रोएन्टेरोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Ganpati Kine.png" },
  { id: "dr-nikhil-shinde", name: "Dr Nikhil Shinde", qualification: "MBBS, MD (Med), DNB (Nephro), MNAMS", department: "Nephrologist", departmentHi: "नेफ्रोलॉजिस्ट", days: "Mon - Sat", timing: "2.00 pm – 3.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Nikhil Shinde.png" },
  { id: "dr-sameer-vyahalkar", name: "Dr Sameer Vyahalkar", qualification: "MBBS, MD (Med), DNB (Nephro)", department: "Nephrologist", departmentHi: "नेफ्रोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Sameer Vyahalkar.png" },
  { id: "dr-shreshta-tripathi", name: "Dr Shreshta Tripathi", qualification: "MBBS, MD (Med), DNB (Nephro)", department: "Nephrologist", departmentHi: "नेफ्रोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Shreshta Tripathi.png" },
  { id: "dr-aakil-khan", name: "Dr Aakil Khan", qualification: "MBBS, MS, MCH (Urology)", department: "Urologist", departmentHi: "यूरोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/Dr Aakil Khan.png" },
  { id: "dr-prasad-brahme", name: "Dr Prasad Brahme", qualification: "MBBS, MS, MCH (Urology)", department: "Urologist", departmentHi: "यूरोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Prasad Brahme.png" },
  { id: "dr-pravin-rajgadkar", name: "Dr Pravin Rajgadkar", qualification: "MBBS, MS (ENT-Surg)", department: "E.N.T", departmentHi: "इ एन टी", days: "Mon - Sat", timing: "6.30 pm – 7.30 pm", type: "OPD / IPD", image: "/images/doctor/Dr Pravin Rajgadkar.png" },
  { id: "dr-abushama-khan", name: "Dr AbuShama Khan", qualification: "MBBS, MS (ENT-Surg)", department: "E.N.T", departmentHi: "इ एन टी", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/noprofile.png" },
  { id: "dr-vimlesh-pandey", name: "Dr Vimlesh Pandey", qualification: "MBBS, MD, DM (Cardio)", department: "Cardiologist", departmentHi: "कार्डियोलॉजिस्ट", days: "Mon - Sat", timing: "5.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Vimlesh Pandey.png" },
  { id: "dr-sandip-phulpagare", name: "Dr Sandip Phulpagare", qualification: "MBBS, MD, DM (Cardio)", department: "Cardiologist", departmentHi: "कार्डियोलॉजिस्ट", days: "Mon - Sat", timing: "5.30 pm", type: "OPD / IPD", image: "/images/doctor/Dr Sandip Phulpagare.png" },
  { id: "dr-varsha-mane", name: "Dr Varsha Mane", qualification: "MBBS, MD (Paed), Fellowship in Paed Cardiology", department: "Paediatric Cardiologist", departmentHi: "पेडियेट्रिक कार्डियोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Varsha Mane.png" },
  { id: "dr-shweta-nakhwa", name: "Dr Shweta Nakhwa", qualification: "MBBS, MD (Skin)", department: "Dermatologist", departmentHi: "डर्मेटोलॉजिस्ट", days: "Thursday", timing: "10.30 am", type: "OPD / IPD", image: "/images/doctor/Dr Shweta Nakhwa.png" },
  { id: "dr-fiza-chaudhary", name: "Dr Fiza Chaudhary", qualification: "MBBS, MD (Skin)", department: "Dermatologist", departmentHi: "डर्मेटोलॉजिस्ट", days: "Tue, Thu", timing: "7.00 pm – 8.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Fiza Chaudhary.png" },
  { id: "dr-sarfaraz-alam", name: "Dr Sarfaraz Alam", qualification: "MBBS, MS (Gen Sur), MCH (Plastic Sur.)", department: "Plastic Surgeon", departmentHi: "प्लास्टिक सर्जन", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/Dr Sarfaraz Alam.png" },
  { id: "dr-amjad-shaikh", name: "Dr Amjad Shaikh", qualification: "MBBS, MS (Gen Sur), MCH, CVTS", department: "CVTS Surgeon", departmentHi: "सी वि टी एस सर्जन", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Amjad Shaikh.png" },
  { id: "dr-aaliya-kazi", name: "Dr Aaliya Kazi", qualification: "MBBS, MD (Pys.)", department: "Psychiatrist", departmentHi: "साइकेट्रिस्ट", days: "Mon - Sat", timing: "8.00 pm – 9.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Aaliya Kazi.png" },
  { id: "dr-fahad-afzal", name: "Dr Fahad Afzal", qualification: "MBBS, DNB (Med Onco), DNB (Gen Med), SCE (UK), ESMO Certified", department: "Onco Physician", departmentHi: "ओंको फिजिशियन", days: "Saturday", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Fahad Afzal.png" },
  { id: "dr-zaki-bellary", name: "Dr Zaki Bellary", qualification: "MBBS, MS (Onco-Sur)", department: "Onco Surgeon", departmentHi: "ओंको सर्जन", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Zaki Bellary.png" },
  { id: "dr-deepkumar-mahajan", name: "Dr Deepkumar Mahajan", qualification: "MBBS, MS (Gen Sur), MCH (CVTS)", department: "Haematologist", departmentHi: "हेमाटोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Deepkumar Mahajan.png" },
  { id: "dr-naqash-nadar-suse", name: "Dr Naqash Nadar Suse", qualification: "MBBS, MD (Gen Med), DM", department: "Haemat-Oncologist", departmentHi: "हेमट - ऑन्कोलॉजिस्ट", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Naqash Nadar Suse.png" },
  { id: "dr-dipesh-pimpale", name: "Dr Dipesh Pimpale", qualification: "MBBS, MD (Med), DNB (Neurology)", department: "Neuro Physician", departmentHi: "न्यूरो - फिजिशियन", days: "Tue, Fri", timing: "7.00 pm – 8.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Dipesh Pimpale.png" },
  { id: "dr-ram-bhagyawant", name: "Dr Ram Bhagyawant", qualification: "MBBS, MD (Med), DM (Neurology – Gold Medalist)", department: "Neuro Physician", departmentHi: "न्यूरो - फिजिशियन", days: "Mon - Sat", timing: "On Call", type: "IPD", image: "/images/doctor/Dr Ram Bhagyawant.png" },
  { id: "dr-dilraj-kadlas", name: "Dr Dilraj Kadlas", qualification: "MBBS, MS (Gen Sug.), MCH (Neuro-Surgeon)", department: "Neuro Surgeon", departmentHi: "न्यूरो - सर्जन", days: "Mon - Sat", timing: "2.00 pm – 3.00 pm", type: "OPD / IPD", image: "/images/doctor/Dr Dilraj Kadlas.png" },
  { id: "dr-mazhr-turabi", name: "Dr Mazhr Turabi", qualification: "MBBS, MS (Gen Sug.), MCH (Neuro-Surgeon)", department: "Neuro Surgeon", departmentHi: "न्यूरो - सर्जन", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Mazhr Turabi.png" },
  { id: "dr-anish-gandhi", name: "Dr Anish Gandhi", qualification: "MBBS, MS (Gen Sug.), MCH (Neuro-Surgeon)", department: "Neuro Surgeon", departmentHi: "न्यूरो - सर्जन", days: "Mon - Sat", timing: "On Call", type: "OPD / IPD", image: "/images/doctor/Dr Anish Gandhi.png" },
  { id: "dr-zeeshan-asar", name: "Dr Zeeshan Asar", qualification: "BDS, MDS, FICS (Fellowship Cranio-Facial Surgeon)", department: "Maxillo-Facial Surgeon", departmentHi: "मैक्सिलो फेसिअल सर्जन", days: "On Call", timing: "—", type: "OPD / IPD", image: "/images/doctor/Dr Zeeshan Asar.png" },
  { id: "dr-adnan-shaikh", name: "Dr Adnan Shaikh", qualification: "MBBS, MS (Opthal)", department: "Ophthalmologist", departmentHi: "ऑप्थल्मोलॉजिस्ट", days: "On Call", timing: "—", type: "IPD", image: "/images/doctor/Dr Adnan Shaikh.png" },
  { id: "dr-abdul-karim", name: "Dr Abdul Karim", qualification: "MBBS, DNB (Opthal)", department: "Ophthalmologist", departmentHi: "ऑप्थल्मोलॉजिस्ट", days: "On Call", timing: "—", type: "IPD", image: "/images/doctor/Dr Abdul Karim.png" },
];

export default function DoctorDetailPage() {
  const params = useParams();
  const doctor = allDoctors.find((d) => d.id === params.id);

  // Fallback image state
  const [imgSrc, setImgSrc] = useState(
    doctor && doctor.image && doctor.image !== "/images/doctor/noprofile.png"
      ? doctor.image
      : "/images/doctor/noprofile.png"
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

                {/* Book Appointment Button */}
                <Link href="/appointment" className="ta-button-02 w-100 d-flex justify-content-center mt-20">
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

      <style jsx>{`
        .doctor-detail-section {
          background: #F5F6F8;
          padding-bottom: 80px;
        }

        /* Profile Card */
        .doctor-profile-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          padding-bottom: 24px;
          position: sticky;
          top: 100px;
        }
        .doctor-photo-wrap {
          position: relative;
        }
        .doctor-photo {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
          display: block;
        }
        .dept-badge {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(0deg, rgba(11,111,170,0.92) 0%, transparent 100%);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 24px 16px 12px;
        }
        .dept-hi {
          font-weight: 400;
          opacity: 0.85;
        }

        /* Quick Info */
        .quick-info {
          padding: 20px 20px 8px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .qi-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .qi-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #EBF5FB;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0B6FAA;
          font-size: 14px;
          flex-shrink: 0;
        }
        .qi-label {
          font-size: 11px;
          color: #6B7280;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .qi-value {
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          margin: 2px 0 0;
        }

        .type-pill {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
        }
        .type-pill.both { background: #e8f4fb; color: #0B6FAA; }
        .type-pill.opd { background: #e8f7ee; color: #15803d; }
        .type-pill.ipd { background: #fef3e2; color: #b45309; }

        .back-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6B7280;
          padding: 12px 20px 0;
          text-decoration: none;
          transition: color 0.2s;
        }
        .back-link:hover { color: #0B6FAA; }
        .mt-20 { margin-top: 20px; }

        /* Right Side */
        .doctor-intro {
          margin-bottom: 28px;
        }
        .dept-tag {
          display: inline-block;
          background: #EBF5FB;
          color: #0B6FAA;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 12px;
          letter-spacing: 0.3px;
        }
        .doctor-name {
          font-size: 30px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 10px;
          line-height: 1.2;
        }
        .doctor-qual {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.6;
          margin: 0;
        }

        /* About Box */
        .doctor-about-box {
          background: #fff;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
          border: 1px solid #E5E7EB;
        }
        .section-subhead {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 14px;
          padding-bottom: 10px;
          border-bottom: 2px solid #EBF5FB;
        }
        .doctor-about-text {
          font-size: 14px;
          color: #4B5563;
          line-height: 1.7;
          margin: 0 0 12px;
        }
        .doctor-about-text:last-child { margin-bottom: 0; }

        /* Detail Table */
        .detail-table-wrap {
          background: #fff;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #E5E7EB;
        }
        .detail-table {
          width: 100%;
          border-collapse: collapse;
        }
        .detail-table tr {
          border-bottom: 1px solid #F3F4F6;
        }
        .detail-table tr:last-child {
          border-bottom: none;
        }
        .td-label {
          font-size: 13px;
          color: #6B7280;
          padding: 12px 16px 12px 0;
          white-space: nowrap;
          width: 170px;
          font-weight: 500;
        }
        .td-label i {
          color: #0B6FAA;
          margin-right: 8px;
          width: 14px;
        }
        .td-value {
          font-size: 14px;
          color: #111827;
          font-weight: 500;
          padding: 12px 0;
        }
        .hi-text {
          color: #6B7280;
          font-weight: 400;
          font-size: 12px;
        }

        @media (max-width: 767px) {
          .doctor-name { font-size: 22px; }
          .td-label { width: auto; white-space: normal; }
          .detail-table, .detail-table tbody, .detail-table tr, .detail-table td {
            display: block;
          }
          .detail-table tr { border-bottom: none; padding: 8px 0; }
          .td-label { padding-bottom: 2px; }
          .td-value { padding-top: 0; }
        }
      `}</style>

      <Footer />
    </>
  );
}
