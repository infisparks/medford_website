import Link from "next/link";

export default function Header() {
  return (
    <>
      <header id="masthead" className="site-header">
        {/* ── Top Bar ── */}
        <div className="header-topbar">
          <div className="container">
            <div className="ta-left">
              <span className="ta-item">
                <i className="fa-solid fa-phone"></i> <strong>Book Online:</strong> You can request appointment in 24 hours
              </span>
              <span className="ta-item">
                <i className="fa-solid fa-location-check"></i> <strong>Location:</strong> Bluebells, Mumbra Bypass Rd, Kalsekar, Mumbra
              </span>
            </div>
            <div className="ta-left">
              <div className="ta-nav">
                <span className="ta-item">
                  <i className="fa-sharp fa-solid fa-alarm-plus"></i> <strong>Opening Hour:</strong> 24/7 Hours Open
                </span>
              </div>
              <div className="ta-socials">
                <a href="#" aria-label="Twitter/X"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://in.linkedin.com/company/medford-multi-specialty-hospital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Header ── */}
        <div className="header-main">
          <div className="container">
            {/* Logo */}
            <div className="site-logo">
              <Link href="/" className="logo-text">
                <img src="/images/logo.png" alt="logo image" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="main-nav" aria-label="Primary Navigation">
              <ul className="nav-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/service">Service</Link>
                </li>
                <li>
                  <Link href="/team">Doctors</Link>
                </li>
                <li>
                  <Link href="/directors">Directors</Link>
                </li>
                <li>
                  <Link href="/appointment">Appointment</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <Link href="/contact" className="ta-button-02 d-none d-md-flex">
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

              <button className="hamburger" id="hamburger" aria-label="Toggle Menu" aria-expanded="false">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.4716 0H14.6316C13.9606 0 13.3171 0.266553 12.8426 0.74102C12.3681 1.21549 12.1016 1.859 12.1016 2.53V7.37C12.1016 7.70224 12.167 8.03123 12.2941 8.33819C12.4213 8.64514 12.6077 8.92404 12.8426 9.15898C13.0775 9.39391 13.3564 9.58027 13.6634 9.70741C13.9703 9.83456 14.2993 9.9 14.6316 9.9H19.4716C19.8038 9.9 20.1328 9.83456 20.4398 9.70741C20.7467 9.58027 21.0256 9.39391 21.2606 9.15898C21.4955 8.92404 21.6818 8.64514 21.809 8.33819C21.9361 8.03123 22.0016 7.70224 22.0016 7.37V2.53C22.0016 1.859 21.735 1.21549 21.2606 0.74102C20.7861 0.266553 20.1426 0 19.4716 0ZM19.8016 7.37C19.8031 7.41375 19.7956 7.45735 19.7796 7.49808C19.7635 7.53881 19.7393 7.57581 19.7083 7.60676C19.6774 7.63772 19.6404 7.66197 19.5997 7.67801C19.5589 7.69405 19.5153 7.70153 19.4716 7.7H14.6316C14.5878 7.70153 14.5442 7.69405 14.5035 7.67801C14.4628 7.66197 14.4258 7.63772 14.3948 7.60676C14.3638 7.57581 14.3396 7.53881 14.3236 7.49808C14.3075 7.45735 14.3 7.41375 14.3016 7.37V2.53C14.3 2.48625 14.3075 2.44265 14.3236 2.40192C14.3396 2.36119 14.3638 2.32419 14.3948 2.29324C14.4258 2.26228 14.4628 2.23803 14.5035 2.22199C14.5442 2.20595 14.5878 2.19846 14.6316 2.2H19.4716C19.5153 2.19846 19.5589 2.20595 19.5997 2.22199C19.6404 2.23803 19.6774 2.26228 19.7083 2.29324C19.7393 2.32419 19.7635 2.36119 19.7796 2.40192C19.7956 2.44265 19.8031 2.48625 19.8016 2.53V7.37Z" fill="white"></path>
                  <path d="M7.37001 12.1001H2.53C2.19776 12.1001 1.86877 12.1655 1.56181 12.2927C1.25486 12.4198 0.975953 12.6062 0.741021 12.8411C0.506088 13.076 0.319729 13.355 0.192585 13.6619C0.0654403 13.9689 0 14.2979 0 14.6301V19.4701C0 20.1411 0.266553 20.7846 0.741021 21.2591C1.21549 21.7335 1.859 22.0001 2.53 22.0001H7.37001C7.70225 22.0001 8.03125 21.9347 8.3382 21.8075C8.64515 21.6804 8.92406 21.494 9.15899 21.2591C9.39392 21.0241 9.58028 20.7452 9.70743 20.4383C9.83457 20.1313 9.90001 19.8023 9.90001 19.4701V14.6301C9.90001 14.2979 9.83457 13.9689 9.70743 13.6619C9.58028 13.355 9.39392 13.076 9.15899 12.8411C8.92406 12.6062 8.64515 12.4198 8.3382 12.2927C8.03125 12.1655 7.70225 12.1001 7.37001 12.1001ZM7.70001 19.4701C7.70155 19.5138 7.69406 19.5574 7.67802 19.5982C7.66198 19.6389 7.63773 19.6759 7.60677 19.7069C7.57582 19.7378 7.53882 19.7621 7.49809 19.7781C7.45736 19.7941 7.41376 19.8016 7.37001 19.8001H2.53C2.48625 19.8016 2.44265 19.7941 2.40192 19.7781C2.36119 19.7621 2.32419 19.7378 2.29324 19.7069C2.26228 19.6759 2.23803 19.6389 2.22199 19.5982C2.20595 19.5574 2.19847 19.5138 2.2 19.4701V14.6301C2.19847 14.5863 2.20595 14.5427 2.22199 14.502C2.23803 14.4613 2.26228 14.4243 2.29324 14.3933C2.32419 14.3624 2.36119 14.3381 2.40192 14.3221C2.44265 14.306 2.48625 14.2986 2.53 14.3001H7.37001C7.41376 14.2986 7.45736 14.306 7.49809 14.3221C7.53882 14.3381 7.57582 14.3624 7.60677 14.3933C7.63773 14.4243 7.66198 14.4613 7.67802 14.502C7.69406 14.5427 7.70155 14.5863 7.70001 14.6301V19.4701Z" fill="white"></path>
                  <path d="M7.37001 0H2.53C1.859 0 1.21549 0.266553 0.741021 0.74102C0.266553 1.21549 0 1.859 0 2.53V7.37C0 7.70224 0.0654403 8.03123 0.192585 8.33819C0.319729 8.64514 0.506088 8.92404 0.741021 9.15898C1.21549 9.63344 1.859 9.9 2.53 9.9H7.37001C7.70225 9.9 8.03125 9.83456 8.3382 9.70741C8.64515 9.58027 8.92406 9.39391 9.15899 9.15898C9.39392 8.92404 9.58028 8.64514 9.70743 8.33819C9.83457 8.03123 9.90001 7.70224 9.90001 7.37V2.53C9.90001 2.19776 9.83457 1.86876 9.70743 1.56181C9.58028 1.25486 9.39392 0.975952 9.15899 0.74102C8.92406 0.506087 8.64515 0.319729 8.3382 0.192585C8.03125 0.0654402 7.70225 0 7.37001 0ZM7.70001 7.37C7.70155 7.41375 7.69406 7.45735 7.67802 7.49808C7.66198 7.53881 7.63773 7.57581 7.60677 7.60676C7.57582 7.63772 7.53882 7.66197 7.49809 7.67801C7.45736 7.69405 7.41376 7.70153 7.37001 7.7H2.53C2.48625 7.70153 2.44265 7.69405 2.40192 7.67801C2.36119 7.66197 2.32419 7.63772 2.29324 7.60676C2.26228 7.57581 2.23803 7.53881 2.22199 7.49808C2.20595 7.45735 2.19847 7.41375 2.2 7.37V2.53C2.19847 2.48625 2.20595 2.44265 2.22199 2.40192C2.23803 2.36119 2.26228 2.32419 2.29324 2.29324C2.32419 2.26228 2.36119 2.23803 2.40192 2.22199C2.44265 2.20595 2.48625 2.19846 2.53 2.2H7.37001C7.41376 2.19846 7.45736 2.20595 7.49809 2.22199C7.53882 2.23803 7.57582 2.26228 7.60677 2.29324C7.63773 2.32419 7.66198 2.36119 7.67802 2.40192C7.69406 2.44265 7.70155 2.48625 7.70001 2.53V7.37Z" fill="white"></path>
                  <path d="M17.0516 12.1001C16.0726 12.1001 15.1155 12.3904 14.3015 12.9343C13.4875 13.4782 12.853 14.2513 12.4784 15.1558C12.1037 16.0603 12.0057 17.0556 12.1967 18.0158C12.3877 18.976 12.8591 19.858 13.5514 20.5503C14.2437 21.2425 15.1257 21.714 16.0859 21.905C17.0461 22.096 18.0414 21.998 18.9459 21.6233C19.8504 21.2486 20.6234 20.6142 21.1674 19.8002C21.7113 18.9861 22.0016 18.0291 22.0016 17.0501C21.9987 15.7382 21.4762 14.4808 20.5485 13.5531C19.6209 12.6255 18.3635 12.103 17.0516 12.1001ZM17.0516 19.8001C16.5077 19.8001 15.976 19.6388 15.5238 19.3366C15.0715 19.0345 14.719 18.605 14.5109 18.1025C14.3028 17.6 14.2483 17.047 14.3544 16.5136C14.4605 15.9801 14.7224 15.4901 15.107 15.1056C15.4916 14.721 15.9816 14.459 16.5151 14.3529C17.0485 14.2468 17.6015 14.3013 18.104 14.5094C18.6065 14.7176 19.0359 15.07 19.3381 15.5223C19.6403 15.9745 19.8016 16.5062 19.8016 17.0501C19.8016 17.7794 19.5118 18.4789 18.9961 18.9946C18.4804 19.5104 17.7809 19.8001 17.0516 19.8001Z" fill="white"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <div className="search-overlay" id="searchOverlay" aria-hidden="true" role="search">
          <div className="container">
            <div className="search-wrap">
              <input type="search" id="searchField" placeholder="Search anything…" aria-label="Search site" />
              <button type="submit" className="search-submit">Submit</button>
            </div>
          </div>
          <button className="search-close-btn" id="searchClose" aria-label="Close search">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className="mobile-overlay" id="mobileOverlay"></div>

      {/* Mobile Drawer */}
      <div className="mobile-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation" aria-hidden="true">
        {/* logo and exit btn */}
        <div className="mob-hdr">
          <Link href="/" className="logo-text">
            <img src="/images/logo.png" alt="logo image" />
          </Link>
          <button className="mob-close" id="mobileClose" aria-label="Close navigation">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* sidebar content */}
        <div className="d-none d-xl-flex">
          <div className="offcanvas-content">
            <p className="desc">The goal of cardiology is not only to treat heart disease but also to promote long term heart health through</p>
            <div className="services mb-20">
              <h3 className="header-md mb-10">What Services We Provide</h3>
              <Link href="/service">
                <span>Regularly Checkup</span>
                <span><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
              <Link href="/service">
                <span>Personalized Healthcare</span>
                <span><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
              <Link href="/service">
                <span>Nuclear Stress Testing</span>
                <span><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
              <Link href="/service">
                <span>Professional Team</span>
                <span><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
              <Link href="/service">
                <span>cardiovascular care</span>
                <span><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
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
            <li>
              <div className="mob-row">
                <Link href="/">Home</Link>
              </div>
            </li>

            <li>
              <div className="mob-row">
                <Link href="/about">About</Link>
              </div>
            </li>

            <li>
              <div className="mob-row">
                <Link href="/service">Service</Link>
              </div>
            </li>

            <li>
              <div className="mob-row">
                <Link href="/team">Doctors</Link>
              </div>
            </li>

            <li>
              <div className="mob-row">
                <Link href="/directors">Directors</Link>
              </div>
            </li>

            <li>
              <div className="mob-row">
                <Link href="/appointment">Appointment</Link>
              </div>
            </li>

            <li>
              <div className="mob-row">
                <Link href="/contact">Contact</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
