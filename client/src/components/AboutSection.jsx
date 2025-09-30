import React from "react";
import "./AboutSection.css";
import aboutImg from "../assets/5.png";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      {/* Top Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Cancer Specialists</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Partner Hospitals</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Families Supported</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Expert Support</p>
        </div>
      </div>

      {/* Main Title */}
      <div className="about-heading">
        <h2>About Carcinome India’s First Integrative Oncology Platform</h2>
        <p>
          We are India’s first tech-enabled integrative oncology platform,
          revolutionizing cancer care through comprehensive support, advanced
          technology, a compassionate service.
        </p>
      </div>

      {/* Content Grid */}
      <div className="about-grid">
        <div className="about-text">
          <h3>Holistic Cancer Care Platform Built for Every Cancer Journey</h3>
          <p>
            Carcinome is India’s first holistic cancer care platform, built to
            simplify and humanize the cancer Journey. Unlike most cancer
            platforms that focus on specific diseases, Carcinome is a
            comprehensive pan-cancer aggregator covering{" "}
            <strong>
              Gall-Bladder Cancer, Breast Cancer, Correctional Cancer, Head &
              Neck Carcinoma, Lung Cancer, Cervical Cancer, And Rare Carcinomas
            </strong>
            .
          </p>
          <p>
            We combine cutting-edge technology, trusted hospital partnerships,
            and deep compassion to provide end-to-end cancer care support. Our
            platform serves as a bridge between patients, families, healthcare
            providers, NGOs, and government schemes, ensuring no one faces
            cancer alone.
          </p>
          <p>
            Founded by caregivers who have personally navigated the cancer
            journey, we understand the pain, confusion, financial stress, and
            emotional trauma that families face. Our mission is to transform
            this experience through technology-enabled care navigation,
            transparent pricing, and unwavering human support.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="Doctors and patients" />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="stats-grid bottom-stats">
        <div className="stat-card">
          <h3>100+</h3>
          <p>Families Supported</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Hospital Partners</p>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Cancer Types Covered</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
