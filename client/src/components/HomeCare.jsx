import React from "react";
import {
  Heart,
  Droplets,
  Activity,
  Stethoscope,
  Users,
  ShieldCheck,
  CheckCircle,
  Clock,
  Home,
  Syringe,
  ThermometerSun,
  Pill,
  Dumbbell,
  FlaskConical,
} from "lucide-react";

import IMG_HOME_CARE from "../assets/4.png";
import IMG_NURSING from "../assets/5.png";

// --- Style Definitions ---
const styles = {
  pageContainer: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#F8F9FA",
    minHeight: "100vh",
  },

  // Hero
  heroContainer: {
    backgroundColor: "#0047b3",
    color: "white",
    textAlign: "center",
    padding: "60px 20px 80px 20px",
    position: "relative",
    overflow: "hidden",
  },
  heroTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.8rem",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "50px",
    padding: "6px 15px",
    marginBottom: "20px",
    fontWeight: "300",
  },
  heroTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: "1.2",
    maxWidth: "800px",
    margin: "0 auto 20px auto",
  },
  heroSubtitle: {
    fontSize: "1rem",
    maxWidth: "750px",
    margin: "0 auto 15px auto",
    lineHeight: "1.6",
    opacity: 0.92,
  },
  heroTagline: {
    fontSize: "0.95rem",
    fontWeight: "500",
    opacity: 0.8,
    fontStyle: "italic",
  },

  // Problem Section
  problemSection: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 20px 40px 20px",
    textAlign: "center",
  },
  problemTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#101726",
    marginBottom: "15px",
    lineHeight: "1.3",
  },
  problemText: {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.7",
    maxWidth: "850px",
    margin: "0 auto",
  },

  // Services Grid
  servicesWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px 60px 20px",
  },
  serviceCard: {
    border: "1px solid #E0E0E0",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    backgroundColor: "white",
    padding: "30px",
    marginBottom: "30px",
    display: "flex",
    gap: "30px",
    flexDirection: "column",
  },
  cardIconHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "16px",
  },
  cardIconCircle: (color) => ({
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: color,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  }),
  cardNumber: {
    display: "inline-block",
    fontSize: "0.7rem",
    backgroundColor: "#F8F9FA",
    color: "#99A3BA",
    padding: "3px 10px",
    borderRadius: "5px",
    fontWeight: "600",
    border: "1px solid #E0E0E0",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#101726",
    marginBottom: "6px",
    lineHeight: "1.3",
  },
  cardSubtitle: {
    fontSize: "0.9rem",
    fontWeight: "500",
    color: "#32CD32",
    marginBottom: "15px",
  },
  featureList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    fontSize: "0.9rem",
    color: "#333",
    marginBottom: "10px",
    lineHeight: "1.5",
  },
  featureIcon: {
    width: "16px",
    height: "16px",
    marginRight: "10px",
    color: "#32CD32",
    flexShrink: 0,
    marginTop: "3px",
  },
  cardImageWrapper: {
    width: "100%",
    overflow: "hidden",
    borderRadius: "10px",
    flex: "none",
  },
  cardImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    display: "block",
    borderRadius: "10px",
  },

  // CTA Banner
  ctaBanner: {
    backgroundColor: "#0047b3",
    color: "white",
    textAlign: "center",
    padding: "50px 20px",
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "12px",
    lineHeight: "1.3",
  },
  ctaSubtitle: {
    fontSize: "1rem",
    opacity: 0.9,
    marginBottom: "25px",
    maxWidth: "600px",
    margin: "0 auto 25px auto",
    lineHeight: "1.5",
  },
  ctaButton: {
    padding: "12px 30px",
    borderRadius: "8px",
    border: "2px solid white",
    backgroundColor: "white",
    color: "#0047b3",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s",
  },
};

// Desktop media query
const desktopStyles = `
  @media (min-width: 768px) {
    .hc-hero-container { padding: 80px 20px 100px 20px; }
    .hc-hero-title { font-size: 2.5rem !important; }
    .hc-service-card {
      flex-direction: row !important;
      padding: 40px !important;
      gap: 40px !important;
      align-items: center;
    }
    .hc-card-reverse {
      flex-direction: row-reverse !important;
    }
    .hc-card-image-wrapper {
      flex: 0 0 38% !important;
    }
    .hc-card-image {
      height: 100% !important;
      min-height: 280px;
    }
    .hc-card-content {
      flex: 1;
    }
  }
`;

// --- Data ---
const serviceSections = [
  {
    number: "01",
    icon: Syringe,
    iconColor: "#0047b3",
    title: "Infusions, Medical & Nursing Care",
    subtitle: "Nurse-led, protocol-driven infusion care at home",
    image: IMG_HOME_CARE,
    features: [
      "Antibiotic & albumin infusions",
      "Hydration, selected biologics, PCA pain infusions (where approved)",
      "PICC line, Hickman & port-a-cath care",
      "Injections: G-CSF, insulin, B12, anticoagulants, hormonal therapies",
      "Post-operative dressings & wound care",
    ],
  },
  {
    number: "02",
    icon: ThermometerSun,
    iconColor: "#e63946",
    title: "Monitoring & Symptom Management",
    subtitle: "Early detection, timely escalation",
    image: IMG_NURSING,
    features: [
      "Vitals: BP, temperature, SpO₂, glucose",
      "Infection watch for immunocompromised patients",
      "Symptom checks: pain, nausea, fatigue, breathlessness",
      "Early symptom flagging & doctor-aligned escalation pathways",
    ],
  },
  {
    number: "03",
    icon: Pill,
    iconColor: "#7d4cff",
    title: "Supportive Therapies",
    subtitle: "Comfort-focused symptom relief at home",
    image: IMG_HOME_CARE,
    features: [
      "Oxygen concentrator setup, nebulization, tracheostomy care",
      "Nutrition & feeding: NG/PEG feeds, oncology diet consults, TPN if indicated",
      "Pain & symptom relief (oral/IV/patch), antiemetics, bowel care",
    ],
  },
  {
    number: "04",
    icon: Dumbbell,
    iconColor: "#00a86b",
    title: "Rehabilitation & Allied Care",
    subtitle: "Recovery support beyond medical treatment",
    image: IMG_NURSING,
    features: [
      "Physiotherapy for mobility, strength, fatigue",
      "Lymphedema management post-BCS",
      "Psycho-oncology sessions",
      "Scheduled tele-check-ins for continuity",
    ],
  },
  {
    number: "05",
    icon: Users,
    iconColor: "#f59e0b",
    title: "General Support Services",
    subtitle: "Day-to-day care and logistics handled",
    image: IMG_HOME_CARE,
    features: [
      "Trained attendants for ADLs: bathing, feeding, mobility",
      "At-home lab collection: CBC, KFT/LFT, tumor markers, urine/stool",
      "Home delivery of cancer meds & infusion supplies",
      "Equipment support: wheelchairs, beds, suction machines",
    ],
  },
];

// --- Component ---
const HomeCare = () => {
  return (
    <div style={styles.pageContainer}>
      <style>{desktopStyles}</style>

      {/* Hero Banner */}
      <div
        style={styles.heroContainer}
        className="hc-hero-container"
      >
        <div style={styles.heroTag}>
          <Home size={14} />
          Cancer Care at Home
        </div>
        <h1 style={styles.heroTitle} className="hc-hero-title">
          Cancer Care at Home:
          <br />
          Beyond the Hospital Journey
        </h1>
        <p style={styles.heroSubtitle}>
          Carcinome delivers protocol-driven, nurse-led oncology care at home,
          aligned with the treating oncologist to reduce avoidable emergencies
          and improve patient comfort.
        </p>
        <p style={styles.heroTagline}>Your Journey, Our Support.</p>
      </div>

      {/* Problem Background */}
      <div style={styles.problemSection}>
        <h2 style={styles.problemTitle}>Why Home Care Matters</h2>
        <p style={styles.problemText}>
          Hospitals often require a minimum infusion count, causing patients who
          need just 1–2 simple infusions to wait for long hours or face
          unnecessary admissions. Trial-specific infusion protocols are rarely
          available through hospital home-care services. Families end up managing
          repeated travel, long queues, infection exposure, and logistical
          stress. Even after discharge, patients still need symptom control,
          nutrition support, and safe monitoring — needs hospitals cannot provide
          continuously at home.
        </p>
      </div>

      {/* Service Sections */}
      <div style={styles.servicesWrapper}>
        {serviceSections.map((section, index) => (
          <div
            key={section.number}
            style={styles.serviceCard}
            className={`hc-service-card ${index % 2 !== 0 ? "hc-card-reverse" : ""}`}
          >
            {/* Image */}
            <div
              style={styles.cardImageWrapper}
              className="hc-card-image-wrapper"
            >
              <img
                src={section.image}
                alt={section.title}
                style={styles.cardImage}
                className="hc-card-image"
              />
            </div>

            {/* Content */}
            <div className="hc-card-content">
              <span style={styles.cardNumber}>Service {section.number}</span>

              <div style={styles.cardIconHeader}>
                <div style={styles.cardIconCircle(section.iconColor)}>
                  {React.createElement(section.icon, { size: 22 })}
                </div>
                <div>
                  <h3 style={styles.cardTitle}>{section.title}</h3>
                  <p style={styles.cardSubtitle}>{section.subtitle}</p>
                </div>
              </div>

              <ul style={styles.featureList}>
                {section.features.map((feature, i) => (
                  <li key={i} style={styles.featureItem}>
                    <CheckCircle style={styles.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div style={styles.ctaBanner}>
        <h2 style={styles.ctaTitle}>
          Safe, Comfortable Cancer Care at Home
        </h2>
        <p style={styles.ctaSubtitle}>
          Nurse-led infusions and monitoring reduce repeated hospital visits.
          Families receive continuity of care with improved outcomes.
        </p>
        <button
          style={styles.ctaButton}
          onClick={() =>
            (window.location.href = "https://wa.me/918191054955")
          }
        >
          Connect With Us →
        </button>
      </div>
    </div>
  );
};

export default HomeCare;
