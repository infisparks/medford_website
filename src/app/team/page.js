"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

// Full flat doctors database
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
  // Graceful client fallback for missing or failing doctor images
  const [imgSrc, setImgSrc] = useState(
    doctor.image && doctor.image !== "/images/doctor/noprofile.png"
      ? doctor.image
      : "/images/doctor/noprofile.png"
  );

  const typeBadgeClass =
    doctor.type.includes("OPD") && doctor.type.includes("IPD")
      ? "both"
      : doctor.type.includes("OPD")
      ? "opd"
      : "ipd";

  return (
    <div
      className="col-md-6 col-lg-4 col-xl-3 d-flex"
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

        {/* Card Footer */}
        <div className="card-footer-action">
          <Link href={`/team/${doctor.id}`} className="view-profile-btn">
            View Profile <i className="fa-solid fa-arrow-right-long btn-arrow"></i>
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
            {/* Search Bar */}
            <div className="search-box-wrap">
              <input
                type="text"
                placeholder="Search by doctor name, qualification, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
              />
              <i className="fa-solid fa-magnifying-glass search-field-icon"></i>
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>

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

          {/* Results Summary Info */}
          <div className="results-info-row mb-30" data-aos="fade-up" data-aos-duration="400">
            <span className="results-count">
              Showing <strong>{filteredDoctors.length}</strong> {filteredDoctors.length === 1 ? "doctor" : "doctors"}
            </span>
            {searchQuery && (
              <span className="search-indicator-tag">
                Query: "{searchQuery}"
              </span>
            )}
          </div>

          {/* Doctors Grid */}
          <div className="ta-team-three-wrap">
            <div className="row gy-30 align-items-stretch justify-content-start">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor, i) => (
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
                      We couldn't find any doctor matching your criteria. Try adjusting your search query or choosing another department.
                    </p>
                    <button
                      className="reset-filters-btn"
                      onClick={() => {
                        setSearchQuery("");
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

      {/* Styled JSX for Professional Premium Theme */}
      <style jsx>{`
        /* Listing Layout styling */
        .pta-120 {
          padding-top: 60px;
          padding-bottom: 90px;
          background-color: #F5F6F8;
        }

        /* Unified Filters Area */
        .filters-container {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #E5E7EB;
        }

        /* Search input design */
        .search-box-wrap {
          position: relative;
          width: 100%;
          margin-bottom: 20px;
        }
        .search-input-field {
          width: 100%;
          padding: 14px 18px 14px 46px;
          border-radius: 10px;
          border: 1px solid #E5E7EB;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #111827;
          background-color: #F9FAFB;
          outline: none;
          transition: all 0.25s ease;
        }
        .search-input-field::placeholder {
          color: #9CA3AF;
        }
        .search-input-field:focus {
          border-color: #6366F1;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
        }
        .search-field-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #9CA3AF;
          font-size: 16px;
          pointer-events: none;
        }
        .clear-search-btn {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #6B7280;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .clear-search-btn:hover {
          color: #111827;
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
        /* Hide scrollbars but keep functionality */
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
        .dept-tabs-scroll::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }

        /* Tab Buttons styling */
        .dept-tab-pill-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          background-color: #F3F4F6;
          border: 1px solid transparent;
          border-radius: 30px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
          text-align: left;
        }
        .tab-btn-icon {
          font-size: 14px;
          color: #6B7280;
          transition: color 0.25s;
        }
        .tab-btn-text {
          display: flex;
          flex-direction: column;
        }
        .tab-btn-en {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #4B5563;
          line-height: 1.2;
        }
        .tab-btn-hi {
          font-size: 10px;
          color: #9CA3AF;
          margin-top: 1px;
          font-weight: 400;
        }

        /* Hover states */
        .dept-tab-pill-btn:hover {
          background-color: #E5E7EB;
        }
        .dept-tab-pill-btn:hover .tab-btn-icon {
          color: #111827;
        }
        .dept-tab-pill-btn:hover .tab-btn-en {
          color: #111827;
        }

        /* Active active states */
        .dept-tab-pill-btn.active {
          background-color: #6366F1;
          border-color: #4F46E5;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.24);
        }
        .dept-tab-pill-btn.active .tab-btn-icon {
          color: #ffffff;
        }
        .dept-tab-pill-btn.active .tab-btn-en {
          color: #ffffff;
        }
        .dept-tab-pill-btn.active .tab-btn-hi {
          color: rgba(255, 255, 255, 0.75);
        }

        /* Results row information */
        .results-info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .results-count {
          font-size: 14px;
          color: #4B5563;
        }
        .results-count strong {
          color: #111827;
        }
        .search-indicator-tag {
          background-color: #EEF2FF;
          color: #4F46E5;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid #E0E7FF;
        }

        /* Doctor Cards Styling */
        .doctor-card-modern {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }
        .doctor-card-modern:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
          border-color: #D1D5DB;
        }

        .photo-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1;
          background-color: #F3F4F6;
          overflow: hidden;
        }
        .doctor-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .doctor-card-modern:hover .doctor-photo {
          transform: scale(1.03);
        }

        .service-type-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .service-type-badge.both {
          background: #EEF2FF;
          color: #4F46E5;
        }
        .service-type-badge.opd {
          background: #ECFDF5;
          color: #047857;
        }
        .service-type-badge.ipd {
          background: #FFFBEB;
          color: #B45309;
        }

        /* Body Details Styling */
        .card-body-content {
          padding: 16px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-dept-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: #6366F1;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .card-dept-tag-hi {
          color: #9CA3AF;
          font-weight: 400;
          text-transform: none;
        }
        .doctor-card-name {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px 0;
          line-height: 1.3;
          transition: color 0.2s;
        }
        .doctor-card-name:hover {
          color: #4F46E5;
        }
        .doctor-card-qual {
          font-size: 12px;
          color: #6B7280;
          line-height: 1.4;
          margin: 0 0 16px 0;
          min-height: 34px;
          /* Handle line clamping safely */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Small Grid info inside card */
        .timing-info-grid {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 12px;
          border-top: 1px dashed #E5E7EB;
        }
        .timing-info-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .timing-icon {
          font-size: 11px;
          color: #9CA3AF;
          width: 12px;
        }
        .timing-text {
          font-size: 12px;
          color: #4B5563;
        }

        /* Card Footer Link Button */
        .card-footer-action {
          padding: 12px 16px 16px;
          background-color: #FAFAFA;
          border-top: 1px solid #F3F4F6;
        }
        .view-profile-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 10px;
          background-color: #EEF2FF;
          color: #4F46E5;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .view-profile-btn:hover {
          background-color: #6366F1;
          color: #ffffff;
        }
        .btn-arrow {
          margin-left: 6px;
          transition: transform 0.2s ease;
        }
        .view-profile-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Empty state styling */
        .empty-results-card {
          text-align: center;
          padding: 60px 20px;
          background-color: #ffffff;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }
        .empty-icon-wrap {
          font-size: 40px;
          color: #9CA3AF;
          margin-bottom: 16px;
        }
        .empty-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
        }
        .empty-subtitle {
          font-size: 14px;
          color: #6B7280;
          max-width: 480px;
          margin: 0 auto 24px;
          line-height: 1.5;
        }
        .reset-filters-btn {
          padding: 10px 22px;
          background-color: #6366F1;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .reset-filters-btn:hover {
          background-color: #4F46E5;
        }

        @media (max-width: 767px) {
          .pta-120 {
            padding-top: 40px;
            padding-bottom: 60px;
          }
          .filters-container {
            padding: 16px;
          }
          .dept-tab-pill-btn {
            padding: 8px 14px;
          }
          .tab-btn-en {
            font-size: 12px;
          }
        }
      `}</style>

      {/* Footer */}
      <Footer />
    </>
  );
}
