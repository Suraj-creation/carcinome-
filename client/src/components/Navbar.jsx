import React, { useState, useEffect } from "react";
import logoImg from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setIsOpen(false);

    if (section === "services") {
      navigate("/service");
    } else if (section === "clinical-trials") {
      navigate("/clinical-trials");
    } else {
      navigate("/", { state: { section } });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".nav-links") &&
        !event.target.closest(".hamburger")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left: Logo + Tagline */}
      <div className="nav-left" onClick={() => handleLinkClick("home")}>
        <img src={logoImg} alt="Carcinome Logo" className="nav-logo" />
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <button
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </button>
        </li>

        <li>
          <button
            className={`nav-link ${activeLink === "clinical-trials" ? "active" : ""}`}
            onClick={() => handleLinkClick("clinical-trials")}
          >
            Clinical Trials
          </button>
        </li>

        <li>
          <button
            className="connect-btn"
            // onClick={() => handleLinkClick("connect")}
            onClick={() =>
              (window.location.href = "https://wa.me/918191054955")
            }
          >
            Connect With Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
