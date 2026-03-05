import React from "react";
import "./Footer.css";
import logo from "../assets/Logo.png";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-wrapper">
        <div className="footer-main-grid">
          {/* Column 1: Logo and Header Buttons */}
          <div className="footer-logo-section">
            <a href="/" className="footer-logo-link">
              <img
                src={logo}
                alt="CARCINOME Logo: Your Journey, Our Support"
                className="footer-logo-image"
              />
            </a>

            <div className="footer-header-buttons">
              <a
                className="footer-talk-btn"
                href="https://wa.me/918191054955"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to Us
              </a>
              <a
                className="footer-support-btn"
                href="https://wa.me/918191054955"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seek Support
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div className="footer-column-title">Quick Links</div>
            <ul className="footer-link-list">
              <li className="footer-link-item">
                <a className="footer-link" href="#home">Home</a>
              </li>
              <li className="footer-link-item">
                <a className="footer-link" href="#about">About Us</a>
              </li>
              <li className="footer-link-item">
                <a className="footer-link" href="#services">Services</a>
              </li>
              <li className="footer-link-item">
                <a className="footer-link" href="#contact">Contact Us</a>
              </li>
              <li className="footer-link-item">
                <a className="footer-link" href="#terms">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Cancer Treatment */}
          <div>
            <div className="footer-column-title">Cancer Treatment In India</div>
            <ul className="footer-link-list">
              <li className="footer-link-item">
                <a className="footer-link" href="#affordable">Affordable Cancer Consultation</a>
              </li>
              <li className="footer-link-item">
                <a className="footer-link" href="#holistic">Holistic Cancer</a>
              </li>
              <li className="footer-link-item">
                <a className="footer-link" href="#platform">Support Platform</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <div className="footer-column-title">Contact</div>

            <div className="footer-contact-detail">
              <MapPin className="footer-contact-icon" />
              <span>Mumbai, India</span>
            </div>

            <div className="footer-contact-detail">
              <Mail className="footer-contact-icon" />
              <a className="footer-contact-link" href="mailto:priyanka.joshi@carcinome.in">
                priyanka.joshi@carcinome.in
              </a>
            </div>

            <div className="footer-contact-detail">
              <Phone className="footer-contact-icon" />
              <span>+91-8191054955</span>
            </div>

            <div className="footer-column-title" style={{ marginTop: "25px", marginBottom: "10px" }}>
              Connect with us
            </div>
            <div className="footer-social-container">
              <a
                className="footer-social-icon"
                style={{ backgroundColor: "#0077B5" }}
                href="https://www.linkedin.com/company/carcinome"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Carcinome on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                className="footer-social-icon"
                style={{ backgroundColor: "#C13584" }}
                href="https://www.instagram.com/carcinome"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Carcinome on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">Carcinome. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
