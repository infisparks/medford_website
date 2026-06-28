import "@/styles/bootstrap.min.css";
import "@/styles/all.min.css";
import "@/styles/aos.css";
import "@/styles/glightbox.min.css";
import "@/styles/odometer-theme-default.css";
import "@/styles/swiper-bundle.min.css";
import "@/styles/main.css";

import Script from "next/script";
import TemplateInitializer from "@/components/TemplateInitializer";

export const metadata = {
  title: "Cardia - Cardiologist and Medical Clinic",
  description: "Cardia - Cardiologist and Medical Clinic React Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Mouse cursor effect */}
        <div className="mouseCursor cursor-inner"></div>
        <div className="mouseCursor cursor-outer"></div>

        {/* Back to top wrap */}
        <div className="cloudflow-progress-wrap">
          <svg className="cloudflow-progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
          </svg>
        </div>

        {/* Route transition initializer */}
        <TemplateInitializer />

        {/* Main Content */}
        <div className="ta-page-wrap">
          {children}
        </div>

        {/* Load static scripts in correct dependency order */}
        <Script src="/js/jquery-4.0.0.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/header.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/aos.js" strategy="afterInteractive" />
        <Script src="/js/jquery.appaer.min.js" strategy="afterInteractive" />
        <Script src="/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.marquee.min.js" strategy="afterInteractive" />
        <Script src="/js/glightbox.min.js" strategy="afterInteractive" />
        <Script src="/js/lenis.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
