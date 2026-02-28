import React from "react";
// FIX: Removed local file import that caused the "Could not resolve" error.
import logo from "../assets/Logo.png";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

// --- 1. Style Definitions (Inline CSS Objects) ---

const styles = {
  // --- Main Container ---
  footerContainer: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#101726", // Deep almost-black blue
    color: "white",
    padding: "50px 20px 20px 20px",
    borderTop: "1px solid #1a2233",
  },
  contentWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingBottom: "30px",
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr", // Adjusting columns to match image spacing
    gap: "40px",
    padding: "0 0 50px 0",
  },
  // --- Logo & Header Buttons ---
  logoSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  logoLink: {
    // New style for the link wrapping the logo
    display: "block",
    marginBottom: "10px",
  },
  logoImage: {
    // Style for the actual image tag
    width: "150px", // Adjust width to match visual size (approximate)
    height: "auto",
  },
  logoSubtitle: {
    fontSize: "0.8rem",
    color: "#99A3BA", // Lighter grey for subtitle
    fontWeight: "300",
    marginTop: "5px",
  },
  headerButtons: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
  },
  talkButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#4A67FF",
    color: "white",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  supportButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "#101726",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  // --- Link Columns ---
  columnTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "15px",
    color: "white",
  },
  linkList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  linkItem: {
    marginBottom: "8px",
    fontSize: "0.95rem",
  },
  link: {
    textDecoration: "none",
    color: "#99A3BA",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  // --- Contact Column ---
  contactDetail: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    fontSize: "0.95rem",
    color: "#99A3BA",
  },
  contactIcon: {
    width: "18px",
    height: "18px",
    marginRight: "10px",
    color: "#4A67FF", // Blue icon color
    flexShrink: 0,
  },
  contactLink: {
    color: "#99A3BA",
    textDecoration: "none",
  },
  // --- Social Media Column ---
  socialContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },
  socialIcon: (bgColor) => ({
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: bgColor,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }),
  // --- Copyright ---
  copyrightSection: {
    borderTop: "1px solid #1a2233",
    paddingTop: "20px",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#99A3BA",
  },
  // --- Responsive Adjustments ---
  responsiveGrid: (isMobile) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr 1fr 1.5fr",
    gap: "40px",
    padding: "0 0 50px 0",
  }),
};

const Footer = () => {
  // Simple approximation of screen width for responsive layout changes
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.footerContainer}>
      <div style={styles.contentWrapper}>
        <div
          style={
            isMobile
              ? { display: "flex", flexDirection: "column", gap: "30px" }
              : styles.mainGrid
          }
        >
          {/* Column 1: Logo and Header Buttons */}
          <div
            style={{
              ...styles.logoSection,
              alignItems: isMobile ? "center" : "flex-start",
              gridColumn: isMobile ? "1 / -1" : "auto", // Span full width on mobile
              marginBottom: isMobile ? "10px" : "0",
            }}
          >
            <a href="/" style={styles.logoLink}>
              {/* FIX: Using static public path for image source */}
              <img
                src={logo}
                alt="CARCINOME Logo: Your Journey, Our Support"
                style={{
                  width: "200px",

                  height: "40px",

                  marginRight: "8px",

                  filter: "invert(1)", // turns black → white while preserving details
                }}
              />
            </a>

            <div
              style={{
                ...styles.headerButtons,
                justifyContent: isMobile ? "center" : "flex-start",
                width: isMobile ? "100%" : "auto",
              }}
            >
              <button
                style={styles.talkButton}
                onClick={() =>
                  (window.location.href = "https://wa.me/918191054955")
                }
              >
                Talk to Us
              </button>
              <button
                style={styles.supportButton}
                onClick={() =>
                  (window.location.href = "https://wa.me/918191054955")
                }
              >
                Seek Support
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <div style={styles.columnTitle}>Quick Links</div>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>
                <a style={styles.link} href="#home">
                  Home
                </a>
              </li>
              <li style={styles.linkItem}>
                <a style={styles.link} href="#about">
                  About Us
                </a>
              </li>
              <li style={styles.linkItem}>
                <a style={styles.link} href="#services">
                  Services
                </a>
              </li>
              <li style={styles.linkItem}>
                <a style={styles.link} href="#contact">
                  Contact Us
                </a>
              </li>
              <li style={styles.linkItem}>
                <a style={styles.link} href="#terms">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Cancer Treatment */}
          <div>
            <div style={styles.columnTitle}>Cancer Treatment In India</div>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>
                <a style={styles.link} href="#affordable">
                  Affordable Cancer Consultation
                </a>
              </li>
              <li style={styles.linkItem}>
                <a style={styles.link} href="#holistic">
                  Holistic Cancer
                </a>
              </li>
              <li style={styles.linkItem}>
                <a style={styles.link} href="#platform">
                  Support Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <div style={styles.columnTitle}>Contact</div>

            <div style={styles.contactDetail}>
              <MapPin style={styles.contactIcon} />
              <span>Mumbai, India</span>
            </div>

            <div style={styles.contactDetail}>
              <Mail style={styles.contactIcon} />
              <a
                style={styles.contactLink}
                href="mailto:priyanka.joshi@carcinome.in"
              >
                priyanka.joshi@carcinome.in
              </a>
            </div>

            <div style={styles.contactDetail}>
              <Phone style={styles.contactIcon} />
              <span>+91-8191054955</span>
            </div>

            {/* FIX: Merged duplicate style attributes */}
            <div
              style={{
                ...styles.columnTitle,
                marginTop: "25px",
                marginBottom: "10px",
              }}
            >
              Connect with us
            </div>
            <div style={styles.socialContainer}>
              <div style={styles.socialIcon("#0077B5")}>
                <Linkedin size={20} />
              </div>
              <div style={styles.socialIcon("#C13584")}>
                <Instagram size={20} />
              </div>
              {/* Note: Using black for Twitter/X logo as per image */}
              {/* <div style={styles.socialIcon("#000000")}>
                <Twitter size={20} />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={styles.copyrightSection}>Carcinome. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
