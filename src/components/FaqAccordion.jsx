"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="ta-faq-item-wrap" data-aos="fade-up">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div key={index} className={`faq-item ${isActive ? "active" : ""}`}>
            <div className="heading" onClick={() => toggleAccordion(index)} style={{ cursor: "pointer" }}>
              <h2 className="header-sm">{item.question}</h2>
              <i className="fa-regular fa-angle-down"></i>
            </div>
            <div
              className="content"
              style={{
                display: isActive ? "block" : "none",
                height: isActive ? "auto" : 0,
                opacity: isActive ? 1 : 0,
                overflow: "hidden",
                transition: "all 0.4s ease"
              }}
            >
              <p className="text">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
