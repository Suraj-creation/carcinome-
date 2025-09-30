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
    title: "Medical Record Medical Records Management",
    subtitle:
      "Secure digital storage and management of all medical reports, test results, and treatment history  ",
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
    overflowX: "hidden", // Prevent horizontal scroll on mobile
  },
  // General styles for sections
  sectionCenter: {
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  headingTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#2C3E50",
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
    gap: "15px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  headerButton: (color, isSelected) => ({
    padding: "12px 25px",
    borderRadius: "8px",
    border: `2px solid ${color}`,
    backgroundColor: isSelected ? color : "white",
    color: isSelected ? "white" : color,
    fontWeight: "600",
    fontSize: "0.9rem",
    cursor: "pointer",
    boxShadow: isSelected ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transition: "all 0.3s",
    minWidth: "150px", // Ensure buttons don't shrink too much
  }),

  // --- Main Services Grid ---
  // Note: Inline styles cannot use media queries. We use a fluid grid setup here.
  servicesGrid: {
    display: "grid",
    // On small screens, this behaves as 1 column. On wider screens, it flows to 2 columns.
    gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
    gap: "20px",
    padding: "0 20px",
  },

  // --- Service Card ---
  cardContainer: (borderColor) => ({
    border: `1px solid #DDDDDD`,
    borderTop: `4px solid ${borderColor}`,
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "25px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s",
    minHeight: "350px",
    textAlign: "left", // Override sectionCenter
  }),
  cardHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  cardIcon: (color) => ({
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: color,
    color: "white",
    marginRight: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  }),
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#2C3E50",
  },
  cardDescription: {
    fontSize: "0.9rem",
    color: "#7F8C8D",
    marginBottom: "20px",
    lineHeight: "1.4",
  },
  featureSection: {
    borderTop: "1px dashed #E0E0E0",
    paddingTop: "15px",
    display: "flex",
    flexWrap: "wrap", // Allow wrap on small screens
    gap: "15px",
  },
  featureGroup: {
    flex: 1,
    minWidth: "150px", // Ensure groups don't overlap too much
  },
  featureList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    fontSize: "0.8rem",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
    color: "#555555",
  },
  featureCheck: (color) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: color,
    marginRight: "8px",
    flexShrink: 0,
  }),

  // --- Additional Support Services ---
  additionalSupportTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#2C3E50",
    marginTop: "60px",
    marginBottom: "30px",
  },
  additionalGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  additionalCard: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "180px", // Use max-width for better flow
  },
  additionalIconContainer: {
    margin: "0 auto 10px auto",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#D6EAF8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#3498DB",
  },
  additionalCardTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#2C3E50",
  },
  additionalCardSubtitle: {
    fontSize: "0.8rem",
    color: "#7F8C8D",
  },

  // --- How Carcinome Works ---
  howItWorksTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#2C3E50",
    marginTop: "60px",
    marginBottom: "30px",
    borderTop: "1px solid #EAECEE",
    paddingTop: "40px",
  },
  stepGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px", // Reduced gap for mobile
    flexWrap: "wrap",
    position: "relative",
  },
  stepItem: {
    textAlign: "center",
    width: "100px", // Reduced width for mobile flow
  },
  stepNumber: (color) => ({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: color,
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px auto",
  }),
  stepDescription: {
    fontSize: "0.85rem",
    color: "#555555",
  },

  // --- Final CTA ---
  ctaButton: {
    padding: "12px 30px",
    borderRadius: "5px",
    backgroundColor: "#4A67FF", // Blue
    color: "white",
    fontWeight: "600",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    marginTop: "40px",
    boxShadow: "0 4px 10px rgba(74, 103, 255, 0.4)",
    transition: "background-color 0.3s",
  },
};

// --- 4. Main Component ---

const OurSupport = () => {
  // Simple Card Component using inline styles
  const ServiceCard = ({ service }) => (
    <div style={styles.cardContainer(service.borderColor)}>
      <div style={styles.cardHeader}>
        <div style={styles.cardIcon(service.color)}>
          {React.createElement(service.icon, { size: 24 })}
        </div>
        <div>
          <h3 style={styles.cardTitle}>{service.title}</h3>
          {/* Displaying full description now */}
          <p style={styles.cardDescription}>{service.description}</p>
        </div>
      </div>

      <p
        style={{
          fontSize: "0.8rem",
          fontWeight: "600",
          color: "#7F8C8D",
          borderTop: "1px solid #EAECEE",
          paddingTop: "15px",
          marginBottom: "10px",
        }}
      >
        Key Features
      </p>

      <div style={styles.featureSection}>
        <div style={styles.featureGroup}>
          <ul style={styles.featureList}>
            {service.benefits.map((benefit, i) => (
              <li key={i} style={styles.featureItem}>
                <div style={styles.featureCheck(service.color)}></div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.featureGroup}>
          <ul style={styles.featureList}>
            {service.keyFeatures.map((feature, i) => (
              <li key={i} style={styles.featureItem}>
                <div style={styles.featureCheck(service.color)}></div>
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
        <p style={{ ...styles.headingSubtitle, marginBottom: "10px" }}>
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
        <div style={styles.servicesGrid}>
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Additional Support Services */}
        <h3 style={styles.additionalSupportTitle}>
          Additional Support Services
        </h3>
        <div style={styles.additionalGrid}>
          {additionalSupport.map((item, index) => (
            <div key={index} style={styles.additionalCard}>
              <div style={styles.additionalIconContainer}>
                {React.createElement(item.icon, { size: 30 })}
              </div>
              <p style={styles.additionalCardTitle}>{item.title}</p>
              <p style={styles.additionalCardSubtitle}>{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* How Carcinome Works */}
        <h3 style={styles.howItWorksTitle}>How Carcinome Cancer Care Works</h3>
        <div style={styles.stepGrid}>
          {[
            { num: 1, text: "Connect", color: "#4A67FF" },
            { num: 2, text: "Navigate", color: "#2ECC71" },
            { num: 3, text: "Support", color: "#9B59B6" },
            { num: 4, text: "Beyond Treatment", color: "#E74C3C" },
          ].map((step) => (
            <div key={step.num} style={styles.stepItem}>
              <div style={styles.stepNumber(step.color)}>{step.num}</div>
              <p style={styles.stepDescription}>{step.text}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <button style={styles.ctaButton}>Explore All Services in Detail</button>
      </div>
    </div>
  );
};

export default OurSupport;
