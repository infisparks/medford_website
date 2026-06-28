import Link from "next/link";

export default function TeamCard({ avatar, name, specialty, delay = 300, href = "/team-single", socials }) {
  const defaultSocials = socials || [
    { icon: "fa-brands fa-facebook-f", url: "#" },
    { icon: "fa-brands fa-linkedin-in", url: "#" },
    { icon: "fa-brands fa-instagram", url: "#" },
    { icon: "fa-brands fa-youtube", url: "#" }
  ];

  return (
    <div className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-duration={delay}>
      <div className="team-three-item">
        <div className="image-hover-effect main-image">
          <img src={avatar} className="img-fluid w-100" alt={`${name} profile`} />
          <ul className="icons">
            {defaultSocials.map((social, index) => (
              <li key={index}>
                <a href={social.url} aria-label="Social Link">
                  <i className={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="info">
          <Link href={href}>
            <h2 className="header-md">{name}</h2>
          </Link>
          <span>{specialty}</span>
        </div>
      </div>
    </div>
  );
}
