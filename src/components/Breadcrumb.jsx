import Link from "next/link";

export default function Breadcrumb({ title, pageName }) {
  return (
    <section className="ta-breadcrumb bg-cover" style={{ backgroundImage: "url(/images/breadcrumb-bg.png)" }}>
      <div className="container">
        <div className="ta-breadcrumb-wrapper">
          <div className="row">
            <div className="col-12">
              <div className="ta-breadcrumb-content">
                <h1 className="header-xl txt-anim-2" data-aos="fade-up" data-aos-duration="600">
                  {title}
                </h1>
                <ul data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                  <li>
                    <Link href="/">Home</Link>
                    <i className="fa-sharp-duotone fa-light fa-slash-forward"></i>
                  </li>
                  <li>{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
