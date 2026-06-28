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
                  <a href="tel:+447820124453">+44 7820 124453</a>
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
                  <a href="mailto:Cardia80@gmail.com">Cardia80@gmail.com</a>
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
                  <a href="#">5th Street, New York, USA</a>
                </div>
              </div>
            </div>
          </div>
          <hr className="footer-hr" />
          <div className="row justify-content-between gy-30">
            <div className="col-md-6 col-xl-2">
              <h3 className="header-md foo-head">Quick Link</h3>
              <ul className="footer-links">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/team">Patients review</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="#">News & blog</Link></li>
                <li><Link href="/service">Our services</Link></li>
              </ul>
            </div>
            <div className="col-md-6 col-xl-3">
              <h3 className="header-md foo-head">Latest Blog</h3>
              <ul className="footer-blog">
                <li>
                  <Link href="#" className="thumb">
                    <img src="/images/blog-01.png" alt="blog image" />
                  </Link>
                  <div className="blog-content">
                    <span>17 Oct 2025</span>
                    <Link href="#">
                      <h3 className="header-sm">Simple Lifestyle Changes That Can Protect Your Heart</h3>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link href="#" className="thumb">
                    <img src="/images/blog-02.png" alt="blog image" />
                  </Link>
                  <div className="blog-content">
                    <span>17 Oct 2025</span>
                    <Link href="#">
                      <h3 className="header-sm">Simple Lifestyle Changes That Can Protect Your Heart</h3>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-xl-3">
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
            <div className="col-md-6 col-xl-2">
              <h3 className="header-md foo-head">Opening Hours</h3>
              <ul className="footer-open-hours">
                <li>
                  <span>Mon – Tue</span>
                  <span>10:00 – 18:00</span>
                </li>
                <li>
                  <span>Wed – Thu</span>
                  <span>10:00 – 18:00</span>
                </li>
                <li>
                  <span>Fri – Sat</span>
                  <span>10:00 – 16:00</span>
                </li>
                <li>
                  <span>Sun</span>
                  <span>Closed</span>
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
                <p>© Cardia is proudly owned by <Link href="/">ThemeAlpine</Link></p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <ul className="social-icon">
                <li>Follow Us</li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-12 col-xl-4">
              <ul className="copyright-menu">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Condition</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
