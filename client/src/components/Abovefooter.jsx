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
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#4A67FF", // Deep Blue background for the entire section
    color: "white",
    padding: "50px 20px",
    textAlign: "center",
    minHeight: "80vh",
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
    fontSize: "2.5rem",
    fontWeight: "700",
    maxWidth: "800px",
    margin: "0 auto 20px auto",
    lineHeight: "1.2",
  },
  subText: {
    fontSize: "1.1rem",
    maxWidth: "900px",
    margin: "0 auto 40px auto",
    fontWeight: "300",
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
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
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
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4A67FF",
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
    borderRadius: "8px",
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
    fontWeight: "300",
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
    fontWeight: "300",
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "40px 30px",
    borderRadius: "12px",
    maxWidth: "850px",
    margin: "0 auto",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  quoteIcon: {
    width: "24px",
    height: "24px",
    margin: "0 auto 15px auto",
  },
  quoteText: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "15px",
    fontWeight: "300",
    fontStyle: "italic",
  },
  quoteAuthor: {
    fontSize: "0.9rem",
    fontWeight: "600",
  },
};

// --- 2. Main Component ---

const AboveFooter = () => {
  return (
    <div style={styles.container} id="contact">
      <div style={styles.taglineContainer}>
        <Heart style={styles.taglineHeart} />
        Your Journey to Healing Starts Here
      </div>

      <h1 style={styles.mainTitle}>
        No Patient Should Ever Walk Alone in Their Cancer Journey
      </h1>

      <p style={styles.subText}>
        Whether you're seeking expert treatment guidance, financial assistance,
        emotional support, or advanced care options—**Carcinome stands by you at
        every step.**
      </p>

      <div style={styles.midCallout}>
        Join **10,000+ families** who've found hope, comprehensive support, and
        life-changing cancer care through our platform.
      </div>

      {/* Consultation Cards */}
      <div style={styles.cardWrapper}>
        {/* Card 1: Free Consultation */}
        <div style={styles.card}>
          <div style={styles.cardIconContainer("#4A67FF")}>
            <Briefcase size={32} />
          </div>
          <h2 style={styles.cardTitle}>Get Your Free Cancer Consultation</h2>
          <p style={styles.cardDescription}>
            Connect with India’s leading cancer specialists for expert guidance,
            second opinions, and personalized treatment planning at no cost.
          </p>
          <button style={styles.primaryButton}>
            Book a Free Consultation Now &rarr;
          </button>
          <div style={styles.cardFooter}>
            <CheckCircle style={styles.footerIcon} />
            Available 24/7 • 48-72 hour response time
          </div>
        </div>

        {/* Card 2: Talk to Experts */}
        <div style={styles.card}>
          <div style={styles.cardIconContainer("#2ECC71")}>
            <Briefcase size={32} />{" "}
            {/* Using Briefcase icon for consistency, adjusting color */}
          </div>
          <h2 style={styles.cardTitle}>Talk to Our Carcinome Experts</h2>
          <p style={styles.cardDescription}>
            Speak with experienced cancer care coordinators who understand your
            journey and guide you to the right resources.
          </p>
          <button style={styles.secondaryButton}>
            Talk to Our Carcinome Experts &rarr;
          </button>
          <div style={styles.cardFooter}>
            <CheckCircle style={styles.footerIcon} />
            Compassionate support • Expert guidance • Free consultation
          </div>
        </div>
      </div>

      {/* Multiple Ways to Get the Support You Need */}
      <h2 style={styles.waysTitle}>
        Multiple Ways to Get the Support You Need
      </h2>
      <p style={styles.waysSubtitle}>
        Choose the option that works best for your situation.
      </p>

      <div style={styles.waysGrid}>
        {/* Item 1: Hotline */}
        <div style={styles.waysItem}>
          <div style={styles.waysIconContainer}>
            <Phone size={24} />
          </div>
          <h3 style={styles.waysItemTitle}>Emergency Hotline</h3>
          <p style={styles.waysItemDescription}>
            24/7 immediate assistance for urgent medical queries.
          </p>
          <p style={styles.waysItemDetail}>Call: +91 9000000000</p>
        </div>
        {/* Item 2: WhatsApp Support */}
        <div style={styles.waysItem}>
          <div style={styles.waysIconContainer}>
            <MessageSquare size={24} />
          </div>
          <h3 style={styles.waysItemTitle}>WhatsApp Support</h3>
          <p style={styles.waysItemDescription}>
            Quick questions and appointment bookings.
          </p>
          <p style={styles.waysItemDetail}>Available 8 AM - 7 PM</p>
        </div>
        {/* Item 3: Video Consultation */}
        <div style={styles.waysItem}>
          <div style={styles.waysIconContainer}>
            <Video size={24} />
          </div>
          <h3 style={styles.waysItemTitle}>Video Consultation</h3>
          <p style={styles.waysItemDescription}>
            Face-to-face expert consultations from anywhere.
          </p>
          <p style={styles.waysItemDetail}>Book online anytime</p>
        </div>
        {/* Item 4: Support Groups */}
        <div style={styles.waysItem}>
          <div style={styles.waysIconContainer}>
            <Users size={24} />
          </div>
          <h3 style={styles.waysItemTitle}>Support Groups</h3>
          <p style={styles.waysItemDescription}>
            Connect with others on similar journeys.
          </p>
          <p style={styles.waysItemDetail}>Join our community</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={styles.statsBar}>
        <div style={styles.statPill}>50+ Specialists Available</div>
        <div style={styles.statPill}>24/7 Expert Support</div>
        <div style={styles.statPill}>100+ Families Helped</div>
      </div>

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
