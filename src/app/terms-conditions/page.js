"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <Breadcrumb title="Terms & Conditions" pageName="Terms & Conditions" />

      <section className="terms-policy-section pta-120 pb-120">
        <div className="container">
          <div className="terms-policy-wrap" style={{ background: '#ffffff', borderRadius: '16px', padding: '40px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div className="policy-intro mb-40">
              <h2 className="header-md" style={{ color: '#111827', fontWeight: '800', marginBottom: '16px' }}>Medford Hospital Terms & Conditions</h2>
              <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.7' }}>
                Welcome to Medford Multi-Speciality Hospital. By booking appointments online or accessing our healthcare services, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
              <p style={{ color: '#6B7280', fontSize: '13px', fontStyle: 'italic', marginTop: '10px' }}>
                Last Updated: July 2026
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '30px 0' }} />

            <div className="policy-content" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>1. Online Appointment Booking</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  Our online appointment system is designed for scheduling standard outpatient consultations. By submitting a booking request, you certify that the information provided (name, contact details, date, and doctor choice) is accurate and complete. Booking an appointment online is subject to confirmation based on doctor availability.
                </p>
              </div>

              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>2. Emergency & Critical Care</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  The online appointment form is <strong>NOT for emergency medical situations</strong>. If you or someone you are booking for is experiencing a life-threatening medical emergency (e.g. chest pain, severe bleeding, breathing difficulties, or acute trauma), please contact our emergency line at <strong>+91 97690 00091</strong> directly or visit our 24/7 emergency care unit immediately.
                </p>
              </div>

              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>3. Rescheduling & Cancellation</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  If you need to cancel or reschedule your consultation, please inform our reception desk at least 2 hours prior to your scheduled slot. Medford Hospital reserves the right to reschedule appointments in case of medical emergencies or unannounced doctor absences.
                </p>
              </div>

              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>4. Code of Conduct</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  Patients and visitors are expected to maintain respectful behavior toward our medical staff, nursing staff, and administrative team. Any form of verbal abuse, physical violence, or disruptive behavior on hospital premises will result in immediate termination of services and legal action.
                </p>
              </div>

              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>5. Privacy & Data Handling</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  All personal data, contact details, and inquiry descriptions collected through this website are handled in accordance with our Privacy Policy. Information entered is encrypted and stored securely to facilitate patient care, medical records retention, and direct communication regarding appointments.
                </p>
              </div>

              <div>
                <h3 className="header-sm" style={{ color: '#111827', fontWeight: '700', marginBottom: '10px' }}>6. Liability Disclaimer</h3>
                <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
                  Medford Hospital provides patient counseling and treatments based on specialized clinical evaluations. The information on this website is for general educational purposes only and does not constitute official diagnosis or medical advice.
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
