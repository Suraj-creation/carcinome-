import React from "react";
import { Shield, CheckCircle, Heart, ArrowRight, Phone } from "lucide-react";

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
    borderTop: "1px solid rgba(255,255,255,0.08)",
    position: "relative",
    overflow: "hidden",
  },
  shieldWrapper: {
    width: "96px",
    height: "96px",
    borderRadius: "50%",
    background: "rgba(147,213,255,0.1)",
    border: "1.5px solid rgba(147,213,255,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px",
    color: "#93d5ff",
    animation: "shieldPulse 3s ease-in-out infinite",
  },
  title: {
    fontSize: "2.25rem",
    fontWeight: "700",
    marginBottom: "16px",
    maxWidth: "800px",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#93d5ff",
  },
  subtitle: {
    fontSize: "1.05rem",
    marginBottom: "36px",
    color: "rgba(255,255,255,0.82)",
    maxWidth: "680px",
    lineHeight: "1.8",
  },
  buttonContainer: {
    display: "flex",
    gap: "14px",
    marginBottom: "28px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btnBase: {
    padding: "13px 28px",
    borderRadius: "50px",
    fontSize: "0.95rem",
    fontWeight: "600",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s",
    textDecoration: "none",
  },
  phoneBtn: {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid rgba(255,255,255,0.7)",
  },
  communityBtn: {
    backgroundColor: "transparent",
    color: "#93d5ff",
    border: "2px solid #93d5ff",
  },
  statsContainer: {
    display: "flex",
    gap: "0",
    marginTop: "8px",
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.65)",
    fontWeight: "500",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  statItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "0 16px",
    borderRight: "1px solid rgba(255,255,255,0.15)",
  },
  statItemLast: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "0 16px",
  },
};

const Footerservice = () => {
  return (
    <div style={styles.container}>
      <style>{`
        @keyframes shieldPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(147,213,255,0.15); }
          50% { box-shadow: 0 0 0 14px rgba(147,213,255,0); }
        }
      `}</style>

      <div style={styles.shieldWrapper}>
        <Shield size={44} strokeWidth={1.5} />
      </div>

      <h2 style={styles.title}>
        At Carcinome, Your <span style={styles.highlight}>Healing</span> is Our
        Mission
      </h2>
      <p style={styles.subtitle}>
        Join thousands of families who have found hope, healing, and
        comprehensive support through our dedicated cancer care ecosystem:
      </p>

      <div style={styles.buttonContainer}>
        <a
          href="tel:+918191054955"
          style={{ ...styles.btnBase, ...styles.phoneBtn }}
        >
          <Phone size={16} /> Call +91 8191054955
        </a>
        <a
          href="https://wa.me/918191054955"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.btnBase, ...styles.communityBtn }}
        >
          <Heart size={16} fill="#93d5ff" color="transparent" />
          Join Patient Community
        </a>
      </div>

      <div style={styles.statsContainer}>
        <div style={styles.statItem}>
          <CheckCircle size={13} color="#93d5ff" />
          24/7 Support Available
        </div>
        <div style={styles.statItem}>
          <CheckCircle size={13} color="#93d5ff" />
          100+ Patients Served
        </div>
        <div style={styles.statItemLast}>
          <CheckCircle size={13} color="#93d5ff" />
          Pan-India Network
        </div>
      </div>
    </div>
  );
};

export default Footerservice;
