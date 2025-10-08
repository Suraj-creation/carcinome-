import React from "react";
import { Shield, CheckCircle, Heart } from "lucide-react";

const styles = {
  // --- Container Styles ---
  container: {
    backgroundColor: "#1E2B40", // Deep dark blue background
    padding: "80px 20px",
    textAlign: "center",
    color: "white",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  // --- Header Section ---
  iconContainer: {
    marginBottom: "20px",
    color: "#F39C12", // Golden/Yellow color for the shield
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    maxWidth: "800px",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#F39C12", // Golden/Yellow highlight for 'Healing'
  },
  subtitle: {
    fontSize: "1.1rem",
    marginBottom: "40px",
    color: "rgba(255, 255, 255, 0.85)",
    maxWidth: "700px",
    lineHeight: "1.5",
  },
  // --- Buttons ---
  buttonContainer: {
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    padding: "12px 25px",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // Green Primary Button
  primaryButton: {
    backgroundColor: "#2ECC71",
    color: "white",
    boxShadow: "0 4px 10px rgba(46, 204, 113, 0.4)",
  },
  // Dark Secondary Button
  secondaryButton: {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
  },
  // Yellow/Gold Third Button (Join Patient Community)
  tertiaryButton: {
    backgroundColor: "transparent",
    color: "#F39C12",
    border: "2px solid #F39C12",
  },
  // --- Footer Stats ---
  statsContainer: {
    display: "flex",
    gap: "30px",
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.7)",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
};

const Footerservice = () => {
  return (
    <div style={styles.container}>
      {/* Shield Icon */}
      <div style={styles.iconContainer}>
        <Shield size={60} strokeWidth={1.5} />
      </div>

      {/* Title and Subtitle */}
      <h1 style={styles.title}>
        At Carcinome, Your <span style={styles.highlight}>Healing</span> is Our
        Mission
      </h1>
      <p style={styles.subtitle}>
        Join thousands of families who have found hope, healing, and
        comprehensive support through our dedicated cancer care ecosystem:
      </p>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        {/* <button style={{ ...styles.button, ...styles.primaryButton }}>
          <CheckCircle size={18} style={{ marginRight: "8px" }} />
          Book Free Consultation
        </button> */}
        <button style={{ ...styles.button, ...styles.secondaryButton }}>
          Call +91 8191054955
        </button>
        <button style={{ ...styles.button, ...styles.tertiaryButton }}>
          <Heart
            size={18}
            fill="#F39C12"
            style={{ marginRight: "8px", color: "transparent" }}
          />
          Join Patient Community
        </button>
      </div>

      {/* Stats */}
      <div style={styles.statsContainer}>
        <div style={styles.statItem}>
          <CheckCircle size={14} color="#2ECC71" />
          24/7 Support Available
        </div>
        <div style={styles.statItem}>
          <CheckCircle size={14} color="#2ECC71" />
          100+ Patients Served
        </div>
        <div style={styles.statItem}>
          <CheckCircle size={14} color="#2ECC71" />
          Pan-India Network
        </div>
      </div>
    </div>
  );
};

export default Footerservice;
