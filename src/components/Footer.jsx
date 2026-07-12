import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ta-footer">
      <div className="ta-footer-wrapper pta-120">
        <div className="container">
          <div className="row justify-content-start justify-content-lg-between align-items-center gy-30">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-logo">
                <Link href="/"><img src="/images/logo-white.png" alt="logo" /></Link>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-top-contact">
                <div className="icon">
                  <i className="fa-light fa-phone-plus"></i>
                </div>
                <div className="content">
                  <span>Emergency Line</span>
                  <a href="tel:+919769000091">+91 97690 00091</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-top-contact">
                <div className="icon">
                  <i className="fa-light fa-envelope"></i>
                </div>
                <div className="content">
                  <span>Support Email</span>
                  <a href="mailto:MedFordhospital@gmail.com">MedFordhospital@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-top-contact">
                <div className="icon">
                  <i className="fa-sharp fa-regular fa-location-check"></i>
                </div>
                <div className="content">
                  <span>Visit Us On</span>
                  <a href="#">Bluebells, Mumbra Bypass Rd, Thane</a>
                </div>
              </div>
            </div>
          </div>
          <hr className="footer-hr" />
          <div className="row justify-content-between gy-30">
            <div className="col-md-6 col-xl-3">
              <h3 className="header-md foo-head">Quick Link</h3>
              <ul className="footer-links">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/directors">Board of Directors</Link></li>
                <li><Link href="/team">Our Doctors</Link></li>
                <li><Link href="/service">Our services</Link></li>
              </ul>
            </div>
            <div className="col-md-6 col-xl-5">
              <h3 className="header-md foo-head">Newsletter</h3>
              <div className="footer-newsletter">
                <p>Sign up today for hints tips & the latest product news & blog</p>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="input">
                    <input type="email" placeholder="Email Address*" required />
                    <button type="submit"><i className="fa-solid fa-location-arrow"></i></button>
                  </div>
                  <div className="chekbox">
                    <input type="checkbox" defaultChecked id="agreeCheckbox" />
                    <span>I agree to the Terms & Condition</span>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <h3 className="header-md foo-head">Opening Hours</h3>
              <ul className="footer-open-hours">
                <li>
                  <span>Monday – Sunday</span>
                  <span>24 Hours Open</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ta-footer-copyright">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-xl-4">
              <div className="copyright-text">
                <p>© <a href="https://infiplus.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Infiplus</a> All rights reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <ul className="social-icon">
                <li>Follow Us</li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://in.linkedin.com/company/medford-multi-specialty-hospital" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-12 col-xl-4">
              <ul className="copyright-menu">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
