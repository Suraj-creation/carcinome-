import React from "react";
import {
  Briefcase,
  Home,
  Clock,
  CheckCircle,
  Mail,
  DollarSign,
} from "lucide-react";

// --- Image Placeholders Updated ---
// Using the provided file names 6.png and 7.png.
// NOTE: These files must be placed in a public directory or imported if using a bundler.
import IMG_HOSPITAL_TIEUPS from "../assets/6.png";
import IMG_HOME_CARE from "../assets/4.png";

// --- Style Definitions (Inline CSS Objects) ---
const styles = {
  // Colors
  COLOR_PRIMARY_BLUE: "#0047b3",
  COLOR_DARK_TEXT: "#101726",
  COLOR_LIGHT_TEXT: "#99A3BA",
  COLOR_ACCENT_GREEN: "#32CD32",
  COLOR_BACKGROUND_LIGHT: "#F8F9FA",

  // Main Container
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white",
    minHeight: "100vh",
  },

  // --- Hero Section Styles ---
  heroContainer: {
    backgroundColor: "#0047b3",
    color: "white",
    textAlign: "center",
    padding: "60px 20px 80px 20px",
    position: "relative",
    overflow: "hidden",
  },
  heroTag: {
    display: "inline-block",
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
  },
  heroSubtitle: {
    fontSize: "1rem",
    maxWidth: "800px",
    margin: "0 auto 40px auto",
    lineHeight: "1.5",
  },
  heroButtonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  heroButton: (isPrimary) => ({
    padding: "12px 20px",
    borderRadius: "8px",
    border: "1px solid white",
    backgroundColor: isPrimary ? "white" : "transparent",
    color: isPrimary ? "#0047b3" : "white",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s",
    fontSize: "0.9rem",
    flex: "0 1 auto",
    minWidth: "fit-content",
  }),

  // --- Pillars Introduction ---
  pillarsIntro: {
    textAlign: "center",
    padding: "60px 20px 40px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  pillarsTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#101726",
    marginBottom: "15px",
    lineHeight: "1.3",
  },
  pillarsSubtitle: {
    fontSize: "0.95rem",
    color: "#99A3BA",
    lineHeight: "1.5",
  },

  // --- Service Card Styles ---
  serviceSection: {
    maxWidth: "1200px",
    margin: "0 auto 60px auto",
    padding: "0 20px",
  },
  cardContainer: {
    border: "1px solid #E0E0E0",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    padding: "20px",
    marginBottom: "30px",
    display: "flex",
    gap: "20px",
    flexDirection: "column",
  },
  // Flex direction control (for image/text flip) - Only applies on desktop
  cardReverse: {
    flexDirection: "column",
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
  },
  cardContent: {
    width: "100%",
    padding: "10px 0",
  },
  cardServiceTag: {
    display: "inline-block",
    fontSize: "0.75rem",
    backgroundColor: "#F8F9FA",
    color: "#99A3BA",
    padding: "4px 10px",
    borderRadius: "5px",
    marginBottom: "10px",
    fontWeight: "600",
    border: "1px solid #E0E0E0",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#101726",
    marginBottom: "5px",
    lineHeight: "1.3",
  },
  cardSubtitle: {
    fontSize: "0.95rem",
    fontWeight: "500",
    color: "#32CD32",
    marginBottom: "15px",
  },
  cardDescription: {
    fontSize: "0.9rem",
    color: "#101726",
    lineHeight: "1.5",
    marginBottom: "20px",
  },
  keyFeaturesBox: {
    backgroundColor: "#F8F9FA",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  keyFeaturesTitle: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#101726",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  benefitList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  benefitItem: {
    display: "flex",
    alignItems: "flex-start",
    fontSize: "0.85rem",
    color: "#101726",
    marginBottom: "8px",
    lineHeight: "1.4",
  },
  benefitIcon: {
    width: "16px",
    height: "16px",
    marginRight: "8px",
    color: "#32CD32",
    flexShrink: 0,
    marginTop: "2px",
  },

  // Key Benefits Section (Home Care)
  keyBenefitsTitle: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#101726",
    marginBottom: "10px",
  },

  // Action Button
  cardActionButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#0047b3",
    color: "white",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "20px",
    textDecoration: "none",
    transition: "background-color 0.3s",
    fontSize: "0.9rem",
    justifyContent: "center",
    width: "100%",
  },
};

// Media query styles for desktop
const desktopStyles = `
  @media (min-width: 768px) {
    .hero-container {
      padding: 80px 20px 100px 20px;
    }
    .hero-title {
      font-size: 2.5rem;
    }
    .hero-buttons-container {
      flex-wrap: nowrap;
    }
    .hero-button {
      padding: 12px 30px;
      font-size: 1rem;
      width: auto;
    }
    .pillars-intro {
      padding: 80px 20px 60px 20px;
    }
    .pillars-title {
      font-size: 1.5rem;
    }
    .card-container {
      flex-direction: row;
      padding: 30px;
      margin-bottom: 40px;
      gap: 30px;
    }
    .card-reverse {
      flex-direction: row-reverse;
    }
    .card-image-wrapper {
      flex: 1;
      height: auto;
    }
    .card-image {
      height: 100%;
    }
    .card-content {
      flex: 1;
      padding: 10px 0;
    }
    .card-title {
      font-size: 1.5rem;
    }
    .card-action-button {
      width: auto;
      justify-content: flex-start;
    }
  }
`;

// --- Main Component ---

const Service = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Add desktop styles */}
      <style>{desktopStyles}</style>

      {/* --- Hero Banner --- */}
      <div style={styles.heroContainer} className="hero-container">
        <div style={styles.heroTag}>
          <Briefcase
            size={14}
            style={{ marginRight: "5px", position: "relative", top: "1px" }}
          />
          Trusted by 50K+ Cancer Patients
        </div>
        <h1 style={styles.heroTitle} className="hero-title">
          Comprehensive Cancer Care
          <br />
          at Every point in your Journey
        </h1>
        <p style={styles.heroSubtitle}>
          From diagnosis to recovery, Carcinome ensures seamless, affordable,
          and compassionate support for patients and families. Your healing
          journey deserves nothing less than excellence.
        </p>
        <div
          style={styles.heroButtonsContainer}
          className="hero-buttons-container"
        >
          <a
            href="#start"
            style={styles.heroButton(true)}
            className="hero-button"
          >
            <Clock size={16} /> Start Your Journey Today
          </a>
          <a
            href="#support"
            style={styles.heroButton(false)}
            className="hero-button"
          >
            <Mail size={16} /> 24/7 Emergency Support
          </a>
        </div>
      </div>

      {/* --- Pillars Introduction --- */}
      <div style={styles.pillarsIntro} className="pillars-intro">
        <h2 style={styles.pillarsTitle} className="pillars-title">
          Eight Pillars of Comprehensive Cancer Care
        </h2>
        <p style={styles.pillarsSubtitle}>
          Every service is designed with one goal: ensuring no cancer patient
          fights alone. From world-class medical access to emotional support,
          we're with you every step of the way.
        </p>
      </div>

      {/* --- Service Pillars --- */}
      <div style={styles.serviceSection}>
        {/* 1. Premium Hospital Tie-Ups & Priority Access (Normal order) */}
        <div style={styles.cardContainer} className="card-container">
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            {/* Image updated to 6.png */}
            <img
              src={IMG_HOSPITAL_TIEUPS}
              alt="Hospital staff moving a patient in a hallway"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 1</p>
            <h3 style={styles.cardTitle} className="card-title">
              Premium Hospital Tie-Ups & Priority Access
            </h3>
            <p style={styles.cardSubtitle}>
              Skip the waiting lists. Get priority access to India's top cancer
              specialists through our concierge service model.
            </p>
            <p style={styles.cardDescription}>
              Your battle against cancer deserves the finest weapons. Carcinome
              has forged strategic MOUs with India's most prestigious oncology
              institutions, including Apollo, Manipal, AIIMS, Apollo Cradle
              Cancers, and 200+ leading specialists. We bypass many of the usual
              administrative headaches, ensuring quick scheduling. Our
              specialist referral dashboard eliminates the agony of endless
              waiting time, ensuring you receive the life-saving treatment you
              need when every moment counts.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>Key Features:</h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Minimal waiting
                  time for diagnostic consultations across 200+ top hospitals
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Priority admission
                  for surgery, chemotherapy, and radiation treatment
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Real-time treatment
                  updates sent directly to family members
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Complete price
                  protection and transparent billing with no hidden charges
                </li>
              </ul>
            </div>

            <a
              href="#find-hospitals"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Find Partner Hospitals Near You <Briefcase size={16} />
            </a>
          </div>
        </div>

        {/* 2. Compassionate Home & Palliative Care (Reverse order) */}
        <div
          style={{ ...styles.cardContainer, ...styles.cardReverse }}
          className="card-container card-reverse"
        >
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            {/* Image updated to 7.png */}
            <img
              src={IMG_HOME_CARE}
              alt="Nurse smiling at the camera in a home setting"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 2</p>
            <h3 style={styles.cardTitle} className="card-title">
              Compassionate Home & Palliative Care
            </h3>
            <p style={styles.cardSubtitle}>
              Bring hospital-grade care to the comfort of your home with
              certified nursing and palliative specialists.
            </p>
            <p style={styles.cardDescription}>
              Home is where healing happens best. Through our partnership with
              Pallium India and certified nursing agencies, we bring expert
              medical support directly to your doorstep. Our compassionate care
              team understands that cancer isn't just about medicine - it's
              about dignity, comfort, and keeping families together. Your
              healing is our foremost priority.
            </p>

            <div style={styles.keyBenefitsTitle}>Key Benefits:</div>
            <ul style={styles.benefitList}>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> 24x7 doctor
                consultations, nursing care, and Ryles Tube/IV line support
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> Advanced pain
                management for maximum comfort
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> At-home chemotherapy
                & infusion with monitoring
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> Emotional support and
                caregiver training
              </li>
            </ul>

            <a
              href="#request-home-care"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Request Home Care Support <Home size={16} />
            </a>
          </div>
        </div>

        {/* Repeat the same pattern for other cards */}
        <div style={styles.cardContainer} className="card-container">
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_HOSPITAL_TIEUPS}
              alt="Hospital staff moving a patient in a hallway"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 3</p>
            <h3 style={styles.cardTitle} className="card-title">
              Premium Hospital Tie-Ups & Priority Access
            </h3>
            <p style={styles.cardSubtitle}>
              Skip the waiting lists. Get priority access to India's top cancer
              specialists through our concierge service model.
            </p>
            <p style={styles.cardDescription}>
              Your battle against cancer deserves the finest weapons. Carcinome
              has forged strategic MOUs with India's most prestigious oncology
              institutions, including Apollo, Manipal, AIIMS, Apollo Cradle
              Cancers, and 200+ leading specialists. We bypass many of the usual
              administrative headaches, ensuring quick scheduling. Our
              specialist referral dashboard eliminates the agony of endless
              waiting time, ensuring you receive the life-saving treatment you
              need when every moment counts.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>Key Features:</h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Minimal waiting
                  time for diagnostic consultations across 200+ top hospitals
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Priority admission
                  for surgery, chemotherapy, and radiation treatment
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Real-time treatment
                  updates sent directly to family members
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Complete price
                  protection and transparent billing with no hidden charges
                </li>
              </ul>
            </div>

            <a
              href="#find-hospitals"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Find Partner Hospitals Near You <Briefcase size={16} />
            </a>
          </div>
        </div>

        {/* 4. Compassionate Home & Palliative Care (Reverse order) */}
        <div
          style={{ ...styles.cardContainer, ...styles.cardReverse }}
          className="card-container card-reverse"
        >
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_HOME_CARE}
              alt="Nurse smiling at the camera in a home setting"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 4</p>
            <h3 style={styles.cardTitle} className="card-title">
              Compassionate Home & Palliative Care
            </h3>
            <p style={styles.cardSubtitle}>
              Bring hospital-grade care to the comfort of your home with
              certified nursing and palliative specialists.
            </p>
            <p style={styles.cardDescription}>
              Home is where healing happens best. Through our partnership with
              Pallium India and certified nursing agencies, we bring expert
              medical support directly to your doorstep. Our compassionate care
              team understands that cancer isn't just about medicine - it's
              about dignity, comfort, and keeping families together. Your
              healing is our foremost priority.
            </p>

            <div style={styles.keyBenefitsTitle}>Key Benefits:</div>
            <ul style={styles.benefitList}>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> 24x7 doctor
                consultations, nursing care, and Ryles Tube/IV line support
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> Advanced pain
                management for maximum comfort
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> At-home chemotherapy
                & infusion with monitoring
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> Emotional support and
                caregiver training
              </li>
            </ul>

            <a
              href="#request-home-care"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Request Home Care Support <Home size={16} />
            </a>
          </div>
        </div>

        {/* Add remaining cards following the same pattern */}
        <div style={styles.cardContainer} className="card-container">
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            {/* Image updated to 6.png */}
            <img
              src={IMG_HOSPITAL_TIEUPS}
              alt="Hospital staff moving a patient in a hallway"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 1</p>
            <h3 style={styles.cardTitle} className="card-title">
              Premium Hospital Tie-Ups & Priority Access
            </h3>
            <p style={styles.cardSubtitle}>
              Skip the waiting lists. Get priority access to India's top cancer
              specialists through our concierge service model.
            </p>
            <p style={styles.cardDescription}>
              Your battle against cancer deserves the finest weapons. Carcinome
              has forged strategic MOUs with India's most prestigious oncology
              institutions, including Apollo, Manipal, AIIMS, Apollo Cradle
              Cancers, and 200+ leading specialists. We bypass many of the usual
              administrative headaches, ensuring quick scheduling. Our
              specialist referral dashboard eliminates the agony of endless
              waiting time, ensuring you receive the life-saving treatment you
              need when every moment counts.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>Key Features:</h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Minimal waiting
                  time for diagnostic consultations across 200+ top hospitals
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Priority admission
                  for surgery, chemotherapy, and radiation treatment
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Real-time treatment
                  updates sent directly to family members
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Complete price
                  protection and transparent billing with no hidden charges
                </li>
              </ul>
            </div>

            <a
              href="#find-hospitals"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Find Partner Hospitals Near You <Briefcase size={16} />
            </a>
          </div>
        </div>

        {/* 2. Compassionate Home & Palliative Care (Reverse order) */}
        <div
          style={{ ...styles.cardContainer, ...styles.cardReverse }}
          className="card-container card-reverse"
        >
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            {/* Image updated to 7.png */}
            <img
              src={IMG_HOME_CARE}
              alt="Nurse smiling at the camera in a home setting"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 2</p>
            <h3 style={styles.cardTitle} className="card-title">
              Compassionate Home & Palliative Care
            </h3>
            <p style={styles.cardSubtitle}>
              Bring hospital-grade care to the comfort of your home with
              certified nursing and palliative specialists.
            </p>
            <p style={styles.cardDescription}>
              Home is where healing happens best. Through our partnership with
              Pallium India and certified nursing agencies, we bring expert
              medical support directly to your doorstep. Our compassionate care
              team understands that cancer isn't just about medicine - it's
              about dignity, comfort, and keeping families together. Your
              healing is our foremost priority.
            </p>

            <div style={styles.keyBenefitsTitle}>Key Benefits:</div>
            <ul style={styles.benefitList}>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> 24x7 doctor
                consultations, nursing care, and Ryles Tube/IV line support
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> Advanced pain
                management for maximum comfort
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> At-home chemotherapy
                & infusion with monitoring
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> Emotional support and
                caregiver training
              </li>
            </ul>

            <a
              href="#request-home-care"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Request Home Care Support <Home size={16} />
            </a>
          </div>
        </div>

        {/* Repeat the same pattern for other cards */}
        <div style={styles.cardContainer} className="card-container">
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_HOSPITAL_TIEUPS}
              alt="Hospital staff moving a patient in a hallway"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 3</p>
            <h3 style={styles.cardTitle} className="card-title">
              Premium Hospital Tie-Ups & Priority Access
            </h3>
            <p style={styles.cardSubtitle}>
              Skip the waiting lists. Get priority access to India's top cancer
              specialists through our concierge service model.
            </p>
            <p style={styles.cardDescription}>
              Your battle against cancer deserves the finest weapons. Carcinome
              has forged strategic MOUs with India's most prestigious oncology
              institutions, including Apollo, Manipal, AIIMS, Apollo Cradle
              Cancers, and 200+ leading specialists. We bypass many of the usual
              administrative headaches, ensuring quick scheduling. Our
              specialist referral dashboard eliminates the agony of endless
              waiting time, ensuring you receive the life-saving treatment you
              need when every moment counts.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>Key Features:</h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Minimal waiting
                  time for diagnostic consultations across 200+ top hospitals
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Priority admission
                  for surgery, chemotherapy, and radiation treatment
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Real-time treatment
                  updates sent directly to family members
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Complete price
                  protection and transparent billing with no hidden charges
                </li>
              </ul>
            </div>

            <a
              href="#find-hospitals"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Find Partner Hospitals Near You <Briefcase size={16} />
            </a>
          </div>
        </div>

        {/* 4. Compassionate Home & Palliative Care (Reverse order) */}
        <div
          style={{ ...styles.cardContainer, ...styles.cardReverse }}
          className="card-container card-reverse"
        >
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_HOME_CARE}
              alt="Nurse smiling at the camera in a home setting"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 4</p>
            <h3 style={styles.cardTitle} className="card-title">
              Compassionate Home & Palliative Care
            </h3>
            <p style={styles.cardSubtitle}>
              Bring hospital-grade care to the comfort of your home with
              certified nursing and palliative specialists.
            </p>
            <p style={styles.cardDescription}>
              Home is where healing happens best. Through our partnership with
              Pallium India and certified nursing agencies, we bring expert
              medical support directly to your doorstep. Our compassionate care
              team understands that cancer isn't just about medicine - it's
              about dignity, comfort, and keeping families together. Your
              healing is our foremost priority.
            </p>

            <div style={styles.keyBenefitsTitle}>Key Benefits:</div>
            <ul style={styles.benefitList}>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> 24x7 doctor
                consultations, nursing care, and Ryles Tube/IV line support
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> Advanced pain
                management for maximum comfort
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> At-home chemotherapy
                & infusion with monitoring
              </li>
              <li style={styles.benefitItem}>
                <CheckCircle style={styles.benefitIcon} /> Emotional support and
                caregiver training
              </li>
            </ul>

            <a
              href="#request-home-care"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Request Home Care Support <Home size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
