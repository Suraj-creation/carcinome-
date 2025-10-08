import React from "react";
import {
  Briefcase,
  Home,
  Clock,
  CheckCircle,
  Mail,
  DollarSign,
  Ambulance,
  Building,
  Heart,
  FlaskRoundIcon as Flask,
  FileText,
  Users,
} from "lucide-react";

// --- Image Placeholders ---
// Update these imports based on your actual image files
import IMG_HOSPITAL_TIEUPS from "../assets/6.png";
import IMG_HOME_CARE from "../assets/4.png";
import IMG_AMBULANCE from "../assets/6.png"; // Add appropriate images
import IMG_ACCOMMODATION from "../assets/6.png";
import IMG_FINANCIAL from "../assets/6.png";
import IMG_CLINICAL_TRIALS from "../assets/6.png";
import IMG_GOVERNMENT from "../assets/6.png";
import IMG_SECOND_OPINION from "../assets/6.png";

// --- Style Definitions (Inline CSS Objects) ---
// CSS has been modified below to match the new layout
const styles = {
  // Colors
  COLOR_PRIMARY_BLUE: "#0047b3",
  COLOR_DARK_TEXT: "#101726",
  COLOR_LIGHT_TEXT: "#99A3BA",
  COLOR_ACCENT_GREEN: "#32CD32",
  COLOR_BACKGROUND_LIGHT: "#F8F9FA", // Light grey background for the page

  // Main Container
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F8F9FA", // MODIFIED: Changed page background color
    minHeight: "100vh",
  },

  // --- Hero Section Styles (Unchanged) ---
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

  // --- Pillars Introduction (Unchanged) ---
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

  // --- Service Card Styles (Unchanged for mobile) ---
  serviceSection: {
    maxWidth: "1200px",
    margin: "0 auto 60px auto",
    padding: "0 20px",
  },
  cardContainer: {
    border: "1px solid #E0E0E0",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    backgroundColor: "white", // MODIFIED: Ensure card is white
    padding: "20px",
    marginBottom: "30px",
    display: "flex",
    gap: "20px",
    flexDirection: "column",
  },
  cardReverse: {}, // No style needed here, handled by class in media query
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
  keyBenefitsTitle: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#101726",
    marginBottom: "10px",
  },
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
// --- MODIFIED SECTION ---
const desktopStyles = `
  @media (min-width: 768px) {
    /* Hero section styles (unchanged) */
    .hero-container { padding: 80px 20px 100px 20px; }
    .hero-title { font-size: 2.5rem; }
    .hero-buttons-container { flex-wrap: nowrap; }
    .hero-button { padding: 12px 30px; font-size: 1rem; width: auto; }
    /* Pillars intro styles (unchanged) */
    .pillars-intro { padding: 80px 20px 60px 20px; }
    .pillars-title { font-size: 1.5rem; }

    /* --- Card styles (MODIFIED) --- */
    .card-container {
      flex-direction: row;
      padding: 40px; /* Increased padding */
      margin-bottom: 40px;
      gap: 50px; /* Increased gap */
      align-items: center; /* Vertically align content */
    }
    .card-reverse {
      flex-direction: row-reverse;
    }
    .card-image-wrapper {
      flex: 0 0 40%; /* Set image width to 40% */
      height: auto;
    }
    .card-image {
      height: 100%;
    }
    .card-content {
      flex: 1; /* Content will take the remaining space */
      padding: 0; /* Removed padding to align with container */
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
// --- END OF MODIFIED SECTION ---

// --- Main Component (Unchanged) ---

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
        {/* 1. Premium Hospital Tie-Ups & Priority Access */}
        <div style={styles.cardContainer} className="card-container">
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
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
              hospitals through our strategic partnerships.
            </p>
            <p style={styles.cardDescription}>
              Your battle against cancer deserves the finest weapons. Carcinome
              has forged strategic MOUs with India's most prestigious cancer
              hospitals, including Tata Memorial, AIMS, Apollo Cancer Centers,
              and 200+ leading oncology facilities nationwide. Our integrated
              referral dashboard eliminates the agony of endless waiting lists,
              ensuring you get the life-saving treatment you need when every
              moment counts.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>
                <CheckCircle style={styles.benefitIcon} /> Key Benefits:
              </h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Minimal waiting
                  time for diagnostic consultations across 200+ partner
                  hospitals
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Priority admission
                  for surgery, chemotherapy, and radiation therapy
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Real-time treatment
                  updates sent directly to family members
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> End-to-end care
                  coordinator and transparent billing with no hidden charges
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

        {/* 2. Compassionate Home & Palliative Care */}
        <div
          style={styles.cardContainer}
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
              Pallium India and certified nursing bureaus, we bring world-class
              cancer care directly to your doorstep. Our compassionate care team
              understands that recovery isn't just about medicine – it's about
              dignity, comfort, and keeping families together during the most
              challenging times.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>
                <CheckCircle style={styles.benefitIcon} /> Key Benefits:
              </h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Board-certified
                  oncology nurses available 24/7
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Advanced pain
                  management for maximum comfort
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> At-home
                  chemotherapy & infusion with monitoring
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Emotional support
                  and caregiver training
                </li>
              </ul>
            </div>

            <a
              href="#request-home-care"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Request Home Care Support <Home size={16} />
            </a>
          </div>
        </div>

        {/* 3. 24/7 Emergency & Medical Transport */}
        <div style={styles.cardContainer} className="card-container">
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_AMBULANCE}
              alt="Ambulance with medical staff"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 3</p>
            <h3 style={styles.cardTitle} className="card-title">
              24/7 Emergency & Medical Transport
            </h3>
            <p style={styles.cardSubtitle}>
              Where every second matters, our 24/7 ambulance network ensures
              rapid, safe transport with ICU-equipped vehicles.
            </p>
            <p style={styles.cardDescription}>
              In cancer emergencies, every second can be the difference between
              life and hope. Our centralized ambulance network spans across
              India, featuring road, rail, and air ambulances equipped with
              life-saving ICU facilities. Our partnerships with trusted
              providers ensure that distance never becomes a barrier to
              receiving critical care.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>
                <CheckCircle style={styles.benefitIcon} /> Key Benefits:
              </h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> ICU equipment:
                  ventilators, monitors, emergency meds
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Air ambulance for
                  critical inter-city transfers
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Wheelchair-friendly
                  vehicles for routine visits
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Direct insurance
                  billing to avoid upfront payment
                </li>
              </ul>
            </div>

            <a
              href="#book-ambulance"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Book Emergency Ambulance <Ambulance size={16} />
            </a>
          </div>
        </div>

        {/* 4. Budget-Friendly Accommodation Near Hospitals */}
        <div
          style={styles.cardContainer}
          className="card-container card-reverse"
        >
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_ACCOMMODATION}
              alt="Comfortable accommodation room"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 4</p>
            <h3 style={styles.cardTitle} className="card-title">
              Budget-Friendly Accommodation Near Hospitals
            </h3>
            <p style={styles.cardSubtitle}>
              Quality accommodation shouldn't drain your treatment budget. Find
              verified, affordable stays near top hospitals.
            </p>
            <p style={styles.cardDescription}>
              Cancer treatment often means long stays away from home, and
              accommodation costs can quickly overwhelm families already facing
              financial strain. Carcinome has curated a network of
              budget-friendly, hygiene-certified stays within walking distance
              of major cancer hospitals. From mid-ultra to charitable guest
              houses, we ensure your family has a safe, clean place to rest
              while you focus on recovery.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>
                <CheckCircle style={styles.benefitIcon} /> Key Benefits:
              </h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Caregiver-friendly
                  facilities & background screening
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> 24/7 power backup &
                  Wi-Fi hospital shuttle services
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Smooth discharge
                  coordination with hospital teams
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} />{" "}
                  Wheelchair-accessible rooms and bathrooms
                </li>
              </ul>
            </div>

            <a
              href="#find-accommodation"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Find Affordable Stays <Building size={16} />
            </a>
          </div>
        </div>

        {/* 5. Comprehensive Financial Assistance & Crowdfunding */}
        <div style={styles.cardContainer} className="card-container">
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_FINANCIAL}
              alt="Financial assistance and crowdfunding"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 5</p>
            <h3 style={styles.cardTitle} className="card-title">
              Comprehensive Financial Assistance & Crowdfunding
            </h3>
            <p style={styles.cardSubtitle}>
              Don't let financial barriers stop your fight. Access multiple
              funding sources and create compelling campaigns.
            </p>
            <p style={styles.cardDescription}>
              No family should have to choose between life-saving treatment and
              financial security. Carcinome's financial assistance program
              connects you with multiple funding sources including crowdfunding
              campaigns and government initiatives. Our expert team helps create
              compelling stories that touch hearts and open wallets, ensuring
              your treatment is never compromised due to lack of funds.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>
                <CheckCircle style={styles.benefitIcon} /> Key Benefits:
              </h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Campaigns across
                  various crowdfunding & social platforms
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> 80G tax
                  certificates and real-time donation tracking
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Post-treatment
                  financial counseling
                </li>
              </ul>
            </div>

            <a
              href="#financial-aid"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Apply for Financial Aid <DollarSign size={16} />
            </a>
          </div>
        </div>

        {/* 6. Access to Cutting-Edge Clinical Trials */}
        <div
          style={styles.cardContainer}
          className="card-container card-reverse"
        >
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_CLINICAL_TRIALS}
              alt="Clinical trials and research"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 6</p>
            <h3 style={styles.cardTitle} className="card-title">
              Access to Cutting-Edge Clinical Trials
            </h3>
            <p style={styles.cardSubtitle}>
              When standard treatments aren't enough, clinical trials offer
              hope. Get access to tomorrow's cures today.
            </p>
            <p style={styles.cardDescription}>
              Hope doesn't end when conventional treatments reach their limits.
              Carcinome opens doors to groundbreaking clinical trials across
              India and internationally, connecting you with experimental
              therapies that could be the key to your recovery. Our research
              network includes partnerships with leading institutions conducting
              trials for immunotherapy, targeted therapy, and revolutionary
              treatment protocols.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>
                <CheckCircle style={styles.benefitIcon} /> Key Benefits:
              </h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Immunotherapy,
                  targeted therapy, CAR-T options
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> International PI
                  second opinions before enrollment
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Travel &
                  accommodation support if out-of-city
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Regular safety
                  assessments and monitoring
                </li>
              </ul>
            </div>

            <a
              href="#clinical-trials"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Check Trial Eligibility <Flask size={16} />
            </a>
          </div>
        </div>

        {/* 7. Government Scheme Navigation & Support */}
        <div style={styles.cardContainer} className="card-container">
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_GOVERNMENT}
              alt="Government scheme support"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 7</p>
            <h3 style={styles.cardTitle} className="card-title">
              Government Scheme Navigation & Support
            </h3>
            <p style={styles.cardSubtitle}>
              Navigate complex government healthcare schemes effortlessly. Get
              maximum benefits with our expert guidance.
            </p>
            <p style={styles.cardDescription}>
              Government healthcare schemes can be lifesavers, but navigating
              the bureaucratic maze often feels impossible when you're fighting
              cancer. Carcinome's dedicated government scheme specialists
              transform this complexity into simplicity, ensuring you receive
              every benefit you're entitled to under various central and state
              healthcare programs.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>
                <CheckCircle style={styles.benefitIcon} /> Key Benefits:
              </h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Application
                  completion within 7 days
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> High approval rates
                  with expert guidance
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> State-wise scheme
                  mapping across 28 states
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Retroactive claim
                  filing for past treatments
                </li>
              </ul>
            </div>

            <a
              href="#government-schemes"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Explore Government Schemes <FileText size={16} />
            </a>
          </div>
        </div>

        {/* 8. Digital Second Opinion Concierge */}
        <div
          style={styles.cardContainer}
          className="card-container card-reverse"
        >
          <div style={styles.cardImageWrapper} className="card-image-wrapper">
            <img
              src={IMG_SECOND_OPINION}
              alt="Digital second opinion service"
              style={styles.cardImage}
            />
          </div>
          <div style={styles.cardContent}>
            <p style={styles.cardServiceTag}>Service 8</p>
            <h3 style={styles.cardTitle} className="card-title">
              Digital Second Opinion Concierge
            </h3>
            <p style={styles.cardSubtitle}>
              Get expert second opinions from India's top oncologists and
              international specialists within 48-72 hours.
            </p>
            <p style={styles.cardDescription}>
              When facing a cancer diagnosis, a second opinion isn't just
              recommended – it's essential. Carcinome's Digital Opinion
              Concierge connects you with India's most respected oncologists and
              international specialists, providing comprehensive second opinions
              that can potentially change your treatment trajectory and
              outcomes.
            </p>

            <div style={styles.keyFeaturesBox}>
              <h4 style={styles.keyFeaturesTitle}>
                <CheckCircle style={styles.benefitIcon} /> Key Benefits:
              </h4>
              <ul style={styles.benefitList}>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Rapid turnaround
                  with detailed written reports
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Direct video
                  consults when needed
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Risk-benefit
                  analysis and alternative options
                </li>
                <li style={styles.benefitItem}>
                  <CheckCircle style={styles.benefitIcon} /> Ongoing support
                  throughout the journey
                </li>
              </ul>
            </div>

            <a
              href="#second-opinion"
              style={styles.cardActionButton}
              className="card-action-button"
            >
              Get Second Opinion <Users size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
