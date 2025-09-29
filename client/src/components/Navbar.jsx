import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logoImg from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = (section) => {
    setActiveLink(section);
    setIsOpen(false);
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
      <div className="nav-left">
        <img src={logoImg} alt="Carcinome Logo" className="logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a
            href="#home"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeLink === "services" ? "active" : ""}
            onClick={() => handleLinkClick("services")}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === "about" ? "active" : ""}
            onClick={() => handleLinkClick("about")}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleLinkClick("contact")}
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleLinkClick("contact")}
          >
            Book Consultation
          </a>
        </li>
        <li>
          <button
            className="connect-btn"
            onClick={() => handleLinkClick("connect")}
          >
            Connect With Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
