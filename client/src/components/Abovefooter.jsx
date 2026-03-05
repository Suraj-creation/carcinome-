import React from "react";
import {
  Heart,
  Briefcase,
  Phone,
  MessageSquare,
  Video,
  Users,
  CheckCircle,
} from "lucide-react";

// --- 1. Style Definitions (Inline CSS Objects) ---

const styles = {
  // --- Main Container ---
  container: {
    backgroundColor: "var(--color-primary, #0052cc)",
    color: "white",
    padding: "50px 20px",
    textAlign: "center",
  },
  // --- Header Section ---
  taglineContainer: {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 18px",
    borderRadius: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    fontSize: "0.85rem",
    fontWeight: "500",
    marginBottom: "40px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
  },
  taglineHeart: {
    width: "14px",
    height: "14px",
    marginRight: "8px",
  },
  mainTitle: {
    fontSize: "2.25rem",
    fontWeight: "700",
    maxWidth: "800px",
    margin: "0 auto 20px auto",
    lineHeight: "1.2",
  },
  subText: {
    fontSize: "1.1rem",
    maxWidth: "900px",
    margin: "0 auto 40px auto",
    fontWeight: "500",
  },
  // --- Mid-Section Callout ---
  midCallout: {
    fontSize: "1.1rem",
    fontWeight: "500",
    padding: "15px 30px",
    borderRadius: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    display: "inline-block",
    marginBottom: "50px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  // --- Consultation Cards Container (Flex is key here) ---
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginBottom: "60px",
  },
  // --- Individual Card Style ---
  card: {
    backgroundColor: "white",
    color: "#333",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "450px",
    textAlign: "left",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
  },
  cardIconContainer: (color) => ({
    marginBottom: "20px",
    color: color,
  }),
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "20px",
    lineHeight: "1.4",
  },
  // --- Card Buttons ---
  primaryButton: {
    padding: "12px 25px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "var(--color-primary, #0052cc)",
    color: "white",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButton: {
    padding: "12px 25px",
    borderRadius: "10px",
    border: "2px solid #2ECC71", // Green border
    backgroundColor: "white",
    color: "#2ECC71", // Green text
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // --- Card Footer Info ---
  cardFooter: {
    marginTop: "15px",
    fontSize: "0.85rem",
    color: "#777",
    display: "flex",
    alignItems: "center",
  },
  footerIcon: {
    width: "14px",
    height: "14px",
    marginRight: "5px",
    color: "#F39C12", // Orange for lightning/time
  },
  // --- Multiple Ways Section ---
  waysTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    margin: "50px auto 10px auto",
    maxWidth: "700px",
  },
  waysSubtitle: {
    fontSize: "1rem",
    fontWeight: "500",
    marginBottom: "40px",
  },
  waysGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "50px",
  },
  waysItem: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    padding: "25px 20px",
    borderRadius: "10px",
    maxWidth: "250px",
    minHeight: "180px",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  waysIconContainer: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px auto",
    color: "white",
  },
  waysItemTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "5px",
  },
  waysItemDescription: {
    fontSize: "0.85rem",
    fontWeight: "400",
    marginBottom: "10px",
  },
  waysItemDetail: {
    fontSize: "0.8rem",
    color: "rgba(255, 255, 255, 0.7)",
    fontStyle: "italic",
  },
  // --- Stats Bar ---
  statsBar: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginBottom: "60px",
  },
  statPill: {
    padding: "8px 20px",
    borderRadius: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    fontSize: "0.9rem",
    fontWeight: "500",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  // --- Quote Box ---
  quoteBox: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: "40px 30px",
    borderRadius: "16px",
    maxWidth: "850px",
    margin: "0 auto",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(8px)",
  },
  quoteIcon: {
    width: "24px",
    height: "24px",
    margin: "0 auto 15px auto",
  },
  quoteText: {
    fontSize: "1.15rem",
    lineHeight: "1.8",
    marginBottom: "15px",
    fontWeight: "400",
    fontStyle: "italic",
    opacity: 1,
    color: "#ffffff",
  },
  quoteAuthor: {
    fontSize: "0.9rem",
    fontWeight: "700",
    color: "#e0f2ff",
  },
};

// --- 2. Main Component ---

const AboveFooter = () => {
  return (
    <div style={styles.container} id="contact">
      {/* Quote Box */}
      <div style={styles.quoteBox}>
        <Heart style={styles.quoteIcon} />
        <p style={styles.quoteText}>
          "Your cancer journey doesn't define you, but how we support you
          through it defines us. At Carcinome, every patient is family, every
          challenge is shared, and every victory is celebrated together."
        </p>
        <p style={styles.quoteAuthor}>— The Carcinome Team</p>
      </div>
    </div>
  );
};

export default AboveFooter;
