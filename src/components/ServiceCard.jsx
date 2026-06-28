import Link from "next/link";

export default function ServiceCard({ icon, title, description, delay = 300, href = "/service" }) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration={delay}>
      <div className="ta-service-four-item">
        <div className="icon">
          <div className="img">
            <img src={icon} alt={`${title} icon`} />
          </div>
          <Link className="arrow" href={href}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.25 1.25L1.25 21.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M3.25 1.25H21.25V19.25" stroke="#001837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link className="header-sm" href={href}>
              {title}
            </Link>
          </h2>
          <p className="text">{description}</p>
        </div>
        <Link href={href} className="ser-btn">
          Read More <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </div>
    </div>
  );
}
