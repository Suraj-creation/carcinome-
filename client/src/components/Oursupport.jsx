import React from "react";
import {
  Briefcase,
  Home,
  Shield,
  Ambulance,
  DollarSign,
  Stethoscope,
  Landmark,
  MessageSquare,
  Plus,
  Zap,
  Heart,
  Users,
} from "lucide-react"; // Added Users icon

// --- 1. Data Structure for all 8 main services ---
const servicesData = [
  {
    id: 1,
    icon: Briefcase,
    title: "Hospital Tie-Ups & Network",
    description:
      "Connect with the top 50+ cancer specialists and hospitals in India. Secure personalized, high-quality care with zero wait time.",
    benefits: [
      "Dedicated oncology coordinator",
      "No wait time for consultations",
      "Access to top 50+ specialists",
    ],
    keyFeatures: [
      "Instant appointment booking",
      "Paperwork assistance",
      "Specialist referral program",
    ],
    color: "#36A2EB", // Blue
    borderColor: "#36A2EB",
    backgroundColor: "#EBF5FB",
  },
  {
    id: 2,
    icon: Home,
    title: "Home & Palliative Care",
    description:
      "Seamless continuation of care at home, improving comfort, quick recovery, and emotional well-being.",
    benefits: [
      "24/7 dedicated nursing staff",
      "Post-operative monitoring",
      "Palliative and end-of-life support",
    ],
    keyFeatures: [
      "Doctor home visits",
      "Tele-counseling support",
      "Medical equipment rentals",
    ],
    color: "#2ECC71", // Green
    borderColor: "#2ECC71",
    backgroundColor: "#E8F6F3",
  },
  {
    id: 3,
    icon: Ambulance,
    title: "Ambulance Support Network",
    description:
      "24/7 emergency and non-emergency transfer services, ensuring safe and quick transit to and from the hospital.",
    benefits: [
      "Verified emergency vehicles",
      "Trained medical personnel",
      "Negotiated lower rates",
    ],
    keyFeatures: [
      "Pan-India coverage",
      "Real-time tracking",
      "Dedicated emergency contact",
    ],
    color: "#E74C3C", // Red
    borderColor: "#E74C3C",
    backgroundColor: "#FADBD8",
  },
  {
    id: 4,
    icon: Shield,
    title: "Affordable Stay Solutions",
    description:
      "Verified budget accommodation near hospitals for patients and caregivers during long treatment cycles.",
    benefits: [
      "Clean and comfortable rooms",
      "Proximity to hospitals",
      "Verified safety standards",
    ],
    keyFeatures: [
      "Pre-booking assistance",
      "Special discounted rates",
      "Family accommodation options",
    ],
    color: "#9B59B6", // Purple
    borderColor: "#9B59B6",
    backgroundColor: "#F4F1F8",
  },
  {
    id: 5,
    icon: DollarSign,
    title: "Financial Aid & Crowdfunding",
    description:
      "Support for managing treatment costs through grants, aid applications, and verified crowdfunding campaigns.",
    benefits: [
      "Access to government grants",
      "Crowdfunding setup & management",
      "Direct payment to hospitals",
    ],
    keyFeatures: [
      "Financial planning sessions",
      "Documentation support",
      "Transparent fund utilization",
    ],
    color: "#F39C12", // Orange
    borderColor: "#F39C12",
    backgroundColor: "#FEF9E7",
  },
  {
    id: 6,
    icon: Stethoscope,
    title: "Clinical Trials Access",
    description:
      "Get access to relevant national and international clinical trials, offering cutting-edge treatment options.",
    benefits: [
      "Eligibility screening",
      "Trial application guidance",
      "Dedicated trial coordinator",
    ],
    keyFeatures: [
      "Access to global network",
      "Latest research updates",
      "Ethical committee clearance",
    ],
    color: "#34495E", // Dark Grey
    borderColor: "#34495E",
    backgroundColor: "#F4F6F6",
  },
  {
    id: 7,
    icon: Landmark,
    title: "Government Scheme Support",
    description:
      "Guidance and assistance in enrolling for state and central government health insurance and aid schemes.",
    benefits: [
      "Eligibility verification",
      "Application submission help",
      "Document preparation",
    ],
    keyFeatures: [
      "Scheme comparison tool",
      "Quick enrollment process",
      "Direct contact with scheme officials",
    ],
    color: "#8E44AD", // Violet
    borderColor: "#8E44AD",
    backgroundColor: "#FCF3CF",
  },
  {
    id: 8,
    icon: MessageSquare,
    title: "Digital Opinion Concierge",
    description:
      "Secure and swift second opinion services from global experts, ensuring confidence in your treatment plan.",
    benefits: [
      "Access to global specialists",
      "Comprehensive report generation",
      "Secure data handling",
    ],
    keyFeatures: [
      "Video consultation setup",
      "Pre-consult document review",
      "Follow-up support",
    ],
    color: "#D35400", // Brown
    borderColor: "#D35400",
    backgroundColor: "#FDEBD0",
  },
];

// --- 2. Data Structure for additional support (bottom section) ---
const additionalSupport = [
  {
    icon: Plus,
    title: "24/7 Cancer Care Helpline",
    subtitle:
      "Round-the-clock support for medical emergencies, treatment queries, and emotional support",
  },
  {
    icon: Zap,
    title: "Medical Record Management",
    subtitle:
      "Secure digital storage and management of all medical reports, test results, and treatment history",
  },
  {
    icon: Heart,
    title: "Caregiver Support Programs",
    subtitle:
      "Training and support programs for family members and professional caregivers",
  },
  {
    icon: Users,
    title: "Survivor Support Network",
    subtitle:
      "Connect with cancer survivors and support groups for motivation and shared experiences",
  },
];

// --- 3. Component Style Definitions (Inline CSS) ---

const styles = {
  // --- Global Container Styles ---
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#F8F9FA",
    padding: "0 0 50px 0",
    color: "#333333",
    minWidth: "320px",
    overflowX: "hidden",
  },
  // General styles for sections
  sectionCenter: {
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 15px",
  },
  headingTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#2C3E50",
    lineHeight: "1.2",
  },
  headingSubtitle: {
    fontSize: "1rem",
    color: "#7F8C8D",
    maxWidth: "700px",
    margin: "0 auto 40px auto",
    lineHeight: "1.4",
  },

  // --- Top Header Buttons ---
  headerButtonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "40px",
    flexWrap: "wrap",
    padding: "0 10px",
  },
  headerButton: (color, isSelected) => ({
    padding: "12px 20px",
    borderRadius: "8px",
    border: `2px solid ${color}`,
    backgroundColor: isSelected ? color : "white",
    color: isSelected ? "white" : color,
    fontWeight: "600",
    fontSize: "0.85rem",
    cursor: "pointer",
    boxShadow: isSelected ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transition: "all 0.3s",
    minWidth: "120px",
    flex: "1 1 120px",
  }),

  // --- Main Services Grid - IMPROVED RESPONSIVE DESIGN ---
  servicesGrid: {
    display: "grid",
    // Mobile first: single column
    gridTemplateColumns: "1fr",
    gap: "20px",
    padding: "0 10px",
    margin: "0 auto",
    // Tablet: 2 columns
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      maxWidth: "800px",
    },
    // Laptop: 3 columns
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      maxWidth: "1100px",
    },
    // Desktop: 4 columns
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
      maxWidth: "1200px",
    },
  },

  // --- Service Card - IMPROVED FOR LAPTOP ---
  cardContainer: (borderColor) => ({
    border: `1px solid #DDDDDD`,
    borderTop: `4px solid ${borderColor}`,
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s",
    minHeight: "auto",
    textAlign: "left",
    width: "100%",
    boxSizing: "border-box",
    // Better for laptop screens
    "@media (min-width: 768px)": {
      padding: "18px",
      minHeight: "380px",
      display: "flex",
      flexDirection: "column",
    },
    "@media (min-width: 1024px)": {
      padding: "20px",
      minHeight: "400px",
    },
  }),
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "15px",
    "@media (min-width: 768px)": {
      marginBottom: "12px",
    },
  },
  cardIcon: (color) => ({
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: color,
    color: "white",
    marginRight: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    flexShrink: 0,
    "@media (min-width: 768px)": {
      padding: "10px",
      marginRight: "15px",
    },
  }),
  cardTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#2C3E50",
    lineHeight: "1.3",
    margin: "0",
    "@media (min-width: 768px)": {
      fontSize: "1rem",
      lineHeight: "1.2",
    },
    "@media (min-width: 1024px)": {
      fontSize: "1.1rem",
    },
  },
  cardDescription: {
    fontSize: "0.85rem",
    color: "#7F8C8D",
    marginBottom: "15px",
    lineHeight: "1.4",
    "@media (min-width: 768px)": {
      fontSize: "0.8rem",
      marginBottom: "12px",
      lineHeight: "1.3",
    },
    "@media (min-width: 1024px)": {
      fontSize: "0.85rem",
    },
  },
  featureSection: {
    borderTop: "1px dashed #E0E0E0",
    paddingTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    flexGrow: 1,
    "@media (min-width: 768px)": {
      gap: "12px",
      paddingTop: "12px",
    },
  },
  featureGroup: {
    flex: "1",
    minWidth: "auto",
  },
  featureList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    fontSize: "0.75rem",
    "@media (min-width: 768px)": {
      fontSize: "0.7rem",
    },
    "@media (min-width: 1024px)": {
      fontSize: "0.75rem",
    },
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "6px",
    color: "#555555",
    lineHeight: "1.3",
    "@media (min-width: 768px)": {
      marginBottom: "4px",
      lineHeight: "1.2",
    },
  },
  featureCheck: (color) => ({
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: color,
    marginRight: "8px",
    marginTop: "4px",
    flexShrink: 0,
    "@media (min-width: 768px)": {
      width: "6px",
      height: "6px",
      marginTop: "3px",
    },
  }),

  // --- Additional Support Services - IMPROVED FOR LAPTOP ---
  additionalSupportTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#2C3E50",
    marginTop: "50px",
    marginBottom: "25px",
  },
  additionalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
    padding: "0 10px",
    margin: "0 auto",
    maxWidth: "400px",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
      maxWidth: "800px",
      gap: "20px",
    },
  },
  additionalCard: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #E0E0E0",
    "@media (min-width: 768px)": {
      padding: "20px",
    },
  },
  additionalIconContainer: {
    margin: "0 auto 8px auto",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#D6EAF8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#3498DB",
    "@media (min-width: 768px)": {
      width: "50px",
      height: "50px",
      marginBottom: "12px",
    },
  },
  additionalCardTitle: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: "5px",
    lineHeight: "1.2",
    "@media (min-width: 768px)": {
      fontSize: "1rem",
      marginBottom: "8px",
    },
  },
  additionalCardSubtitle: {
    fontSize: "0.75rem",
    color: "#7F8C8D",
    lineHeight: "1.3",
    "@media (min-width: 768px)": {
      fontSize: "0.8rem",
    },
  },

  // --- How Carcinome Works - IMPROVED FOR LAPTOP ---
  howItWorksTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#2C3E50",
    marginTop: "50px",
    marginBottom: "25px",
    borderTop: "1px solid #EAECEE",
    paddingTop: "30px",
  },
  stepGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    padding: "0 10px",
    margin: "0 auto",
    maxWidth: "300px",
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
      maxWidth: "600px",
      gap: "30px",
    },
  },
  stepItem: {
    textAlign: "center",
  },
  stepNumber: (color) => ({
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    backgroundColor: color,
    color: "white",
    fontSize: "1rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 8px auto",
    "@media (min-width: 768px)": {
      width: "45px",
      height: "45px",
      fontSize: "1.2rem",
      marginBottom: "12px",
    },
  }),
  stepDescription: {
    fontSize: "0.8rem",
    color: "#555555",
    fontWeight: "600",
    "@media (min-width: 768px)": {
      fontSize: "0.9rem",
    },
  },

  // --- Final CTA ---
  ctaButton: {
    padding: "12px 25px",
    borderRadius: "5px",
    backgroundColor: "#4A67FF",
    color: "white",
    fontWeight: "600",
    fontSize: "0.9rem",
    border: "none",
    cursor: "pointer",
    marginTop: "30px",
    boxShadow: "0 4px 10px rgba(74, 103, 255, 0.4)",
    transition: "background-color 0.3s",
    width: "auto",
    maxWidth: "280px",
    "@media (min-width: 768px)": {
      fontSize: "1rem",
      padding: "15px 30px",
    },
  },
};

// Helper function to handle responsive styles since inline styles don't support media queries
const getResponsiveStyle = (baseStyle) => {
  return baseStyle;
};

// --- 4. Main Component ---

const OurSupport = () => {
  // Simple Card Component using inline styles
  const ServiceCard = ({ service }) => (
    <div style={getResponsiveStyle(styles.cardContainer(service.borderColor))}>
      <div style={getResponsiveStyle(styles.cardHeader)}>
        <div style={getResponsiveStyle(styles.cardIcon(service.color))}>
          {React.createElement(service.icon, { size: 20 })}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={getResponsiveStyle(styles.cardTitle)}>{service.title}</h3>
          <p style={getResponsiveStyle(styles.cardDescription)}>
            {service.description}
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: "600",
          color: "#7F8C8D",
          borderTop: "1px solid #EAECEE",
          paddingTop: "12px",
          marginBottom: "8px",
        }}
      >
        Key Features
      </p>

      <div style={getResponsiveStyle(styles.featureSection)}>
        <div style={getResponsiveStyle(styles.featureGroup)}>
          <ul style={getResponsiveStyle(styles.featureList)}>
            {service.benefits.map((benefit, i) => (
              <li key={i} style={getResponsiveStyle(styles.featureItem)}>
                <div
                  style={getResponsiveStyle(styles.featureCheck(service.color))}
                ></div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={getResponsiveStyle(styles.featureGroup)}>
          <ul style={getResponsiveStyle(styles.featureList)}>
            {service.keyFeatures.map((feature, i) => (
              <li key={i} style={getResponsiveStyle(styles.featureItem)}>
                <div
                  style={getResponsiveStyle(styles.featureCheck(service.color))}
                ></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.pageContainer}>
      <div style={styles.sectionCenter}>
        {/* Header and Subtitle */}
        <p
          style={{
            ...styles.headingSubtitle,
            marginBottom: "10px",
            fontSize: "0.9rem",
          }}
        >
          Comprehensive Cancer Care Services | Essential Support Verticals
        </p>
        <h2 style={styles.headingTitle}>
          Our Core Cancer Care Ecosystem: Complete Support Services
        </h2>
        <p style={styles.headingSubtitle}>
          We fill every gap in the cancer care journey—from hospital access and
          medical records to financial aid and home support—to ensure better
          health outcomes, improved resources, and coverage for the care giving
          ecosystem.
        </p>

        {/* Top Header Buttons (The 3 main categories) */}
        <div style={styles.headerButtonsContainer}>
          <button style={styles.headerButton("#4A67FF", true)}>
            Hospital Network
          </button>
          <button style={styles.headerButton("#2ECC71", false)}>
            Home Care
          </button>
          <button style={styles.headerButton("#9B59B6", false)}>
            Digital Consultation
          </button>
        </div>

        {/* Main 8 Services Grid */}
        <div style={getResponsiveStyle(styles.servicesGrid)}>
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Additional Support Services */}
        <h3 style={styles.additionalSupportTitle}>
          Additional Support Services
        </h3>
        <div style={getResponsiveStyle(styles.additionalGrid)}>
          {additionalSupport.map((item, index) => (
            <div key={index} style={getResponsiveStyle(styles.additionalCard)}>
              <div style={getResponsiveStyle(styles.additionalIconContainer)}>
                {React.createElement(item.icon, { size: 20 })}
              </div>
              <p style={getResponsiveStyle(styles.additionalCardTitle)}>
                {item.title}
              </p>
              <p style={getResponsiveStyle(styles.additionalCardSubtitle)}>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* How Carcinome Works */}
        <h3 style={styles.howItWorksTitle}>How Carcinome Cancer Care Works</h3>
        <div style={getResponsiveStyle(styles.stepGrid)}>
          {[
            { num: 1, text: "Connect", color: "#4A67FF" },
            { num: 2, text: "Navigate", color: "#2ECC71" },
            { num: 3, text: "Support", color: "#9B59B6" },
            { num: 4, text: "Beyond Treatment", color: "#E74C3C" },
          ].map((step) => (
            <div key={step.num} style={getResponsiveStyle(styles.stepItem)}>
              <div style={getResponsiveStyle(styles.stepNumber(step.color))}>
                {step.num}
              </div>
              <p style={getResponsiveStyle(styles.stepDescription)}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <button style={getResponsiveStyle(styles.ctaButton)}>
          Explore All Services in Detail
        </button>
      </div>
    </div>
  );
};

export default OurSupport;
