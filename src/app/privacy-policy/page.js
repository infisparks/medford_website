"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <Breadcrumb title="Privacy Policy" pageName="Privacy Policy" />

      <section className="terms-policy-section pta-120 pb-120">
        <div className="container">
          <div className="terms-policy-wrap" style={{ background: '#ffffff', borderRadius: '16px', padding: '40px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div className="policy-intro mb-40">
              <h2 className="header-md" style={{ color: '#111827', fontWeight: '800', marginBottom: '16px' }}>Medford Hospital Privacy Policy</h2>
              <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.7' }}>
                Medford Multi-Speciality Hospital is committed to protecting the privacy and security of your personal data and health information. This privacy policy explains how we collect, store, use, and protect your information when you visit our website or book online appointments.
              </p>
              <p style={{ color: '#6B7280', fontSize: '13px', fontStyle: 'italic', marginTop: '10px' }}>
                Last Updated: July 2026
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '30px 0' }} />

            <div className="policy-content" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>1. Information We Collect</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  When you use our online forms (such as contact inquiries or appointment bookings), we collect personal information that you explicitly fill out:
                </p>
                <ul style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6', marginTop: '8px', paddingLeft: '20px' }}>
                  <li>Your Name, Email Address, and Phone Number.</li>
                  <li>Preferred date for appointment booking.</li>
                  <li>Selected Doctor name.</li>
                  <li>Messages, medical inquiries, or symptoms you voluntarily share in input fields.</li>
                </ul>
              </div>

              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>2. How We Use Your Information</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  The details we collect are used strictly for clinical and administrative operations, specifically:
                </p>
                <ul style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6', marginTop: '8px', paddingLeft: '20px' }}>
                  <li>Processing and confirming your online appointment bookings.</li>
                  <li>Answering contact requests and feedback submitted via the contact form.</li>
                  <li>Communicating critical updates, instructions, or rescheduling notifications regarding your health visits.</li>
                  <li>Ensuring hospital record compliance in accordance with healthcare regulations.</li>
                </ul>
              </div>

              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>3. Data Storage & Security</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  All information submitted through this website is transmitted securely via SSL encryption and stored directly in database servers powered by Supabase. Access to this data is restricted to authorized hospital administrative staff and medical professionals involved directly in your treatment.
                </p>
              </div>

              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>4. Information Disclosure</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  We do not sell, rent, or trade your personal data or contact details to third-party marketing companies. Your details may only be shared with verified healthcare partners (such as diagnostics clinics or insurance providers) when explicitly authorized by you to facilitate medical clearances, billing, or claims processing.
                </p>
              </div>

              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>5. Your Rights</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  You have the right to request access to the information we hold about you, request corrections to any inaccuracies, or ask for deletion of your online consultation history from our web database by emailing us at <strong>MedFordhospital@gmail.com</strong> or calling the administration line directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
