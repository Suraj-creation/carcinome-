import React from "react";
import { Shield, CheckCircle, Heart } from "lucide-react";

const styles = {
  container: {
    backgroundColor: "#1a3a5c",
    padding: "80px 20px",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginBottom: "20px",
    color: "#93d5ff",
  },
  title: {
    fontSize: "2.25rem",
    fontWeight: "700",
    marginBottom: "20px",
    maxWidth: "800px",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#93d5ff",
  },
  subtitle: {
    fontSize: "1.1rem",
    marginBottom: "40px",
    color: "#e0f2ff",
    maxWidth: "700px",
    lineHeight: "1.7",
  },
  buttonContainer: {
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    padding: "14px 28px",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
    textDecoration: "none",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
  },
  tertiaryButton: {
    backgroundColor: "transparent",
    color: "#93d5ff",
    border: "2px solid #93d5ff",
  },
  statsContainer: {
    display: "flex",
    gap: "40px",
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#e0f2ff",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
};

const Footerservice = () => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <Shield size={60} strokeWidth={1.5} />
      </div>

      <h1 style={styles.title}>
        At Carcinome, Your <span style={styles.highlight}>Healing</span> is Our
        Mission
      </h1>
      <p style={styles.subtitle}>
        Join thousands of families who have found hope, healing, and
        comprehensive support through our dedicated cancer care ecosystem:
      </p>

      <div style={styles.buttonContainer}>
        <a
          href="tel:+918191054955"
          style={{ ...styles.button, ...styles.secondaryButton }}
        >
          Call +91 8191054955
        </a>
        <a
          href="https://wa.me/918191054955"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.button, ...styles.tertiaryButton }}
        >
          <Heart
            size={18}
            fill="#93d5ff"
            style={{ marginRight: "8px", color: "transparent" }}
          />
          Join Patient Community
        </a>
      </div>

      <div style={styles.statsContainer}>
        <div style={styles.statItem}>
          <CheckCircle size={14} color="#93d5ff" />
          24/7 Support Available
        </div>
        <div style={styles.statItem}>
          <CheckCircle size={14} color="#93d5ff" />
          100+ Patients Served
        </div>
        <div style={styles.statItem}>
          <CheckCircle size={14} color="#93d5ff" />
          Pan-India Network
        </div>
      </div>
    </div>
  );
};

export default Footerservice;
