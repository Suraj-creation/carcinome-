import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/4.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Main Content Area */}
      <div className="hero-main">
        <div className="hero-content">
          <div className="hero-left">
            {/* Eyebrow pill */}
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              India's First Tech-Enabled Platform
            </div>

            <h1>
              Carcinome –{" "}
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
              <button
                className="btn-outline"
                onClick={() =>
                  (window.location.href = "https://wa.me/918191054955")
                }
              >
                Connect With Us
              </button>
            </div>

            {/* Trust strip */}
            <div className="hero-trust-strip">
              <span className="hero-trust-item">
                <span className="hero-trust-dot">✦</span> 50+ Cancer Specialists
              </span>
              <span className="hero-trust-sep">·</span>
              <span className="hero-trust-item">
                <span className="hero-trust-dot">✦</span> 10+ Partner Hospitals
              </span>
              <span className="hero-trust-sep">·</span>
              <span className="hero-trust-item">
                <span className="hero-trust-dot">✦</span> 100+ Families Supported
              </span>
              <span className="hero-trust-sep">·</span>
              <span className="hero-trust-item">
                <span className="hero-trust-dot">✦</span> 24/7 Support
              </span>
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

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator">
          <ChevronDown size={22} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
