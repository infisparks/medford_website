"use client";

import { useState } from "react";

export default function TabComponent({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="ta-tab">
      <ul className="ta-tab-nav ta-facilities-list" data-aos="fade-up" data-aos-duration="600">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => setActiveTab(tab.id)}
            style={{ cursor: "pointer" }}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="ta-tab-content" data-aos="fade-up" data-aos-duration="600">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`ta-tab-pane ${activeTab === tab.id ? "active" : ""}`}
            style={{ display: activeTab === tab.id ? "block" : "none" }}
          >
            <div className="ta-facilities-content">
              <div className="img-box image-hover-effect">
                <img src={tab.image} className="img-fluid" alt={`${tab.label} content`} />
              </div>
              <ul className="feature">
                {tab.features.map((feature, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-badge-check"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
