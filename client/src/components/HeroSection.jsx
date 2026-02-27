import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/4.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Main Content Area */}
      <div className="hero-main">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              Carcinome – India's First{" "}
              <span className="highlight">Tech-Enabled</span> Cancer Care
              Aggregator Platform
            </h1>
            <p>
              Compassion-driven cancer support, connecting hospitals,
              oncologists, caregivers, NGOs, and donors into one ecosystem. With
              technology and care combined, we ensure you never walk alone in
              your journey.
            </p>

            <div className="hero-buttons">
              {/* <button className="btn-primary">Book Free Consultation</button> */}
              <button
                className="btn-outline"
                onClick={() =>
                  (window.location.href = "https://wa.me/918191054955")
                }
              >
                Connect With Us
              </button>
            </div>
          </div>

          <div className="hero-right">
            <img
              src={heroImg}
              alt="Doctor helping patient"
              className="hero-main-img"
            />
          </div>
        </div>
      </div>

      {/* Bottom Strip - UPDATED WITH CONTAINER */}
      <div className="hero-strip">
        <div className="strip-container">
          <div className="strip-content">
            <div className="strip-search">
              <input
                type="text"
                placeholder="Select Service"
                className="search-input"
              />
              <input
                type="text"
                placeholder="City (e.g. Mumbai, Delhi, Kolkata)"
                className="search-input"
              />
              <button className="get-help-btn">Get Help →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
