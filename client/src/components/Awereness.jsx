import React from "react";
import { BookOpen, User, Zap, MessageSquare, Heart, Plus } from "lucide-react";

// --- 1. Data Structures ---

// Programs Section Data
const programs = [
  {
    icon: BookOpen,
    title: "Educational Resources & Blog",
    color: "#4A90E2", // Light Blue
    points: [
      "Cancer type information, diagnosis, and treatment protocols, symptoms, risk factors, and prevention.",
      "Customized content based on regional and demographical health trends.",
      "Expert interviews and webinars.",
      "Medical record management guides.",
      "Diet and nutrition guidelines.",
      "Mental health and wellness support.",
    ],
    bgColor: "#E6F3FF",
  },
  {
    icon: User,
    title: "Expert Webinars & Seminars",
    color: "#7ED321", // Light Green
    points: [
      "Monthly webinars with top oncologists, specialists, and patient advocates across India.",
      "Topic deep-dives into treatment advancements, side effect management, and recovery.",
      "Interactive Q&A sessions.",
      "Guest speaker series.",
      "Collaborative research workshops.",
    ],
    bgColor: "#E6FFE6",
  },
  {
    icon: MessageSquare,
    title: "Community Support Forums",
    color: "#F5A623", // Yellow/Orange
    points: [
      "Connect with patients, caregivers, survivors, doctors, and specialists who can answer questions or provide emotional support.",
      "Cancer type specific support groups.",
      "Regional and language based groups.",
      "Caregiver support exchange.",
      "Support groups for emotional and practical challenges.",
    ],
    bgColor: "#FFF3E6",
  },
  {
    icon: Zap,
    title: "Research Insights & Updates",
    color: "#D0021B", // Red
    points: [
      "Updates on clinical trials, new therapies, and advisory board mandates.",
      "Monthly research news briefs.",
      "Global oncology research summaries.",
      "Clinical trial access help.",
      "Genetic and hereditary risk factor reports.",
    ],
    bgColor: "#FFEBE6",
  },
];

// Prevention Guidelines Data
const preventionData = [
  {
    section: "Diet & Nutrition",
    percent: "30%",
    color: "#4A67FF",
    items: [
      "Consume 5-7 servings of fresh fruits and vegetables daily.",
      "Limit red meat intake to 350-500g per week.",
      "Choose whole grains over refined carbohydrates.",
      "Avoid processed meats and high-sugar drinks.",
    ],
  },
  {
    section: "Lifestyle Habits",
    percent: "20%",
    color: "#50E3C2",
    items: [
      "Maintain active lifestyle/moderate intensity physical activity.",
      "Avoid excessive alcohol consumption/smoking.",
      "Protect skin from UV radiation and pollution.",
      "Practice mindfulness and stress reduction.",
    ],
  },
  {
    section: "Regular Screenings",
    percent: "15%",
    color: "#F8E71C",
    items: [
      "Attend recommended age-based screening (e.g., Mammogram, Colonoscopy, Pap Smear).",
      "Self-examine breasts/testicles regularly.",
      "Consult doctor immediately for unusual changes.",
    ],
  },
  {
    section: "Environmental Factors",
    percent: "10%",
    color: "#BD10E0",
    items: [
      "Avoid smoke exposure and air pollutants.",
      "Maintain safe work practices (e.g., chemical handling).",
      "Avoid unnecessary radiation exposure.",
      "Adopt water purification practices.",
    ],
  },
];

// Educational Impact Data
const impactData = [
  { number: "150+", label: "Educational Content Pieces" },
  { number: "12", label: "Expert Specialists on Board" },
  { number: "100+", label: "Support Group Members" },
];

// --- 2. Styles (Inline CSS Objects) ---

const styles = {
  pageContainer: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#FFFFFF",
    minHeight: "100vh",
    padding: "20px 0",
    color: "#333",
  },
  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    textAlign: "center",
  },
  // --- Header ---
  headerTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: "10px",
    marginTop: "30px",
  },
  headerSubtitle: {
    fontSize: "1rem",
    color: "#7F8C8D",
    maxWidth: "700px",
    margin: "0 auto 30px auto",
    lineHeight: "1.5",
  },
  // --- Knowledge Saves Lives Banner ---
  knowledgeBanner: {
    background: "linear-gradient(135deg, #4A67FF, #3648B5)",
    color: "white",
    padding: "40px 20px",
    borderRadius: "10px",
    maxWidth: "900px",
    margin: "30px auto",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  knowledgeText: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "10px",
  },
  knowledgeSubtext: {
    fontSize: "0.9rem",
  },
  // --- Critical Facts ---
  factTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#2C3E50",
    margin: "50px 0 20px 0",
  },
  factCardContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px 0",
  },
  factCard: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    maxWidth: "300px",
    borderTop: "5px solid #FF5733",
    textAlign: "left",
  },
  factNumber: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#4A67FF",
    marginBottom: "5px",
  },
  factDescription: {
    fontSize: "0.9rem",
    color: "#7F8C8D",
  },
  // --- Programs Section ---
  programTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2C3E50",
    margin: "50px 0 30px 0",
  },
  programGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "20px",
    textAlign: "left",
    padding: "0 15px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  programCard: (bgColor) => ({
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: bgColor,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  }),
  programHeader: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "15px",
  },
  programIcon: (color) => ({
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: color,
    color: "white",
    marginRight: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  }),
  programCardTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#2C3E50",
    margin: 0,
    lineHeight: "1.3",
  },
  programList: {
    listStyle: "none",
    padding: "0",
    margin: "0 0 15px 0",
    fontSize: "0.8rem",
    color: "#555",
    flexGrow: 1,
  },
  programListItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "6px",
    lineHeight: "1.4",
  },
  programCheck: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#4A67FF",
    marginRight: "8px",
    marginTop: "6px",
    flexShrink: 0,
  },
  programButton: (color) => ({
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: color,
    color: "white",
    fontWeight: "600",
    fontSize: "0.8rem",
    cursor: "pointer",
    alignSelf: "flex-start",
  }),
  // --- Prevention Guidelines ---
  preventionSectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2C3E50",
    margin: "60px 0 10px 0",
  },
  preventionSectionSubtitle: {
    fontSize: "0.9rem",
    color: "#7F8C8D",
    marginBottom: "40px",
  },
  guidelinesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    padding: "0 15px",
    textAlign: "left",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  guidelineCard: {
    padding: "15px",
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  guidelineHeader: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  guidelineList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    fontSize: "0.75rem",
    color: "#555",
    flexGrow: 1,
  },
  guidelineListItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "4px",
    lineHeight: "1.3",
  },
  guidelineCheck: (color) => ({
    color: color,
    marginRight: "8px",
    marginTop: "2px",
    flexShrink: 0,
  }),
  guidelinePercent: (color) => ({
    color: color,
    fontWeight: "600",
    fontSize: "0.8rem",
  }),
  // --- Stay Informed CTA ---
  ctaBanner: {
    backgroundColor: "#4A67FF",
    color: "white",
    padding: "40px 20px",
    borderRadius: "10px",
    margin: "60px 0",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  ctaTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "10px",
  },
  ctaSubtitle: {
    fontSize: "1rem",
    marginBottom: "20px",
    maxWidth: "800px",
    margin: "0 auto 20px auto",
  },
  ctaButtonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  ctaButton: {
    padding: "10px 20px",
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: "transparent",
    color: "white",
    fontWeight: "600",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  // --- Impact Section ---
  impactTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#2C3E50",
    margin: "40px 0 30px 0",
  },
  impactGrid: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "30px",
    padding: "20px 0",
    borderTop: "1px solid #E0E0E0",
    borderBottom: "1px solid #E0E0E0",
  },
  impactItem: {
    textAlign: "center",
    padding: "10px 0",
  },
  impactNumber: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#4A67FF",
    marginBottom: "5px",
  },
  impactLabel: {
    fontSize: "0.9rem",
    color: "#7F8C8D",
  },
  // --- Community Section ---
  communityTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2C3E50",
    margin: "40px 0 10px 0",
  },
  communitySubtitle: {
    fontSize: "0.9rem",
    color: "#7F8C8D",
    marginBottom: "20px",
  },
  communityButton: {
    padding: "12px 25px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4A67FF",
    color: "white",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    margin: "0 10px",
  },
  communitySecondaryButton: {
    padding: "12px 25px",
    border: "1px solid #4A67FF",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "#4A67FF",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    margin: "0 10px",
  },
};

// --- 3. Main Component ---

const Awareness = () => {
  // Reusable Program Card Component
  const ProgramCard = ({ program }) => (
    <div style={styles.programCard(program.bgColor)}>
      <div style={styles.programHeader}>
        <div style={styles.programIcon(program.color)}>
          {React.createElement(program.icon, { size: 24 })}
        </div>
        <h3 style={styles.programCardTitle}>{program.title}</h3>
      </div>
      <ul style={styles.programList}>
        {program.points.map((point, i) => (
          <li key={i} style={styles.programListItem}>
            <div style={styles.programCheck}></div>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <button style={styles.programButton(program.color)}>
        Explore this Program &gt;
      </button>
    </div>
  );

  // Reusable Prevention Guideline Card Component
  const GuidelineCard = ({ data }) => (
    <div style={styles.guidelineCard}>
      <div style={styles.guidelineHeader}>
        {data.section}
        <span style={styles.guidelinePercent(data.color)}>
          {data.percent} Impact
        </span>
      </div>
      <ul style={styles.guidelineList}>
        {data.items.map((item, i) => (
          <li key={i} style={styles.guidelineListItem}>
            <Heart size={14} style={styles.guidelineCheck(data.color)} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div style={styles.pageContainer}>
      <div style={styles.section}>
        {/* Header Section */}
        <h1 style={styles.headerTitle}>
          Cancer Awareness & Education: Building a More Informed India
        </h1>
        <p style={styles.headerSubtitle}>
          Carcinome is more than a service platform. We're a comprehensive
          cancer awareness and education resource for patients and families. Our
          mission is to provide knowledge, reduce fear, and empower every user
          to take proactive steps towards health and effective care.
        </p>

        {/* Knowledge Saves Lives Banner */}
        <div style={styles.knowledgeBanner}>
          <p style={styles.knowledgeText}>Knowledge Saves Lives</p>
          <p style={styles.knowledgeSubtext}>
            Empowering India Through Education
          </p>
        </div>

        {/* The Reality of Cancer in India */}
        <h2 style={styles.factTitle}>
          The Reality of Cancer in India: Critical Facts You Need to Know
        </h2>
        {/* FIX: Merged duplicate style props */}
        <p style={{ ...styles.headerSubtitle, marginBottom: "30px" }}>
          Understanding these facts is key to prepare, prevent, and seek
          treatment early.
        </p>

        <div style={styles.factCardContainer}>
          <div style={{ ...styles.factCard, borderTopColor: "#4A67FF" }}>
            <div style={styles.factNumber}>1 in 9</div>
            <div
              style={{ fontSize: "0.9rem", fontWeight: "600", color: "#333" }}
            >
              Indians will face Cancer in their Lifetime
            </div>
            <p style={styles.factDescription}>
              WHO reports, putting pressure on healthcare systems and families
              nationwide.
            </p>
          </div>
          <div style={{ ...styles.factCard, borderTopColor: "#7ED321" }}>
            <div style={styles.factNumber}>60%+</div>
            <div
              style={{ fontSize: "0.9rem", fontWeight: "600", color: "#333" }}
            >
              Improvement in Outcomes with Early Detection
            </div>
            <p style={styles.factDescription}>
              Early diagnosis significantly boosts recovery rates for most
              common cancers globally.
            </p>
          </div>
          <div style={{ ...styles.factCard, borderTopColor: "#D0021B" }}>
            <div style={styles.factNumber}>#1</div>
            <div
              style={{ fontSize: "0.9rem", fontWeight: "600", color: "#333" }}
            >
              Reason families stop treatment is financial burden
            </div>
            <p style={styles.factDescription}>
              Managing cost and resource challenges is crucial for treatment
              continuity.
            </p>
          </div>
        </div>

        {/* Our Comprehensive Cancer Education Programs */}
        <h2 style={styles.programTitle}>
          Our Comprehensive Cancer Education Programs
        </h2>
        <p style={styles.headerSubtitle}>
          We offer programs built to empower patients, caregivers, and doctors
          with reliable information, support forums, and expert reports.
        </p>

        <div style={styles.programGrid}>
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>

        {/* Cancer Prevention Guidelines */}
        <h2 style={styles.preventionSectionTitle}>
          Cancer Prevention Guidelines: Your Action Plan for Health
        </h2>
        <p style={styles.preventionSectionSubtitle}>
          Research shows that up to half of cancers can be prevented by simple
          lifestyle modifications, yearly screenings, and a comprehensive
          understanding of environmental risks.
        </p>

        <div style={styles.guidelinesGrid}>
          {preventionData.map((data, index) => (
            <GuidelineCard key={index} data={data} />
          ))}
        </div>

        {/* Stay Informed, Stay Protected CTA */}
        <div style={styles.ctaBanner}>
          <h2 style={styles.ctaTitle}>Stay Informed, Stay Protected</h2>
          <p style={styles.ctaSubtitle}>
            Knowledge is your first line of defense against cancer. Applied
            consistently and early, preventive measures significantly lower your
            lifetime risk.
          </p>
          <div style={styles.ctaButtonContainer}>
            <button style={styles.ctaButton}>
              <Plus
                size={16}
                style={{ marginRight: "5px", verticalAlign: "middle" }}
              />{" "}
              Take Our Free Risk Assessment
            </button>
            <button style={styles.ctaButton}>
              <Zap
                size={16}
                style={{ marginRight: "5px", verticalAlign: "middle" }}
              />{" "}
              Download Prevention Checklist
            </button>
          </div>
        </div>

        {/* Our Educational Impact Across India */}
        <h2 style={styles.impactTitle}>Our Educational Impact Across India</h2>
        {/* FIX: Merged duplicate style props */}
        <p style={{ ...styles.headerSubtitle, marginBottom: "40px" }}>
          Find India's Largest Cancer Awareness Community.
        </p>

        <div style={styles.impactGrid}>
          {impactData.map((item, index) => (
            <div key={index} style={styles.impactItem}>
              <div style={styles.impactNumber}>{item.number}</div>
              <p style={styles.impactLabel}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Join India's Largest Cancer Awareness Community */}
        <h2 style={styles.communityTitle}>
          Join India's Largest Cancer Awareness Community
        </h2>
        <p style={styles.communitySubtitle}>
          Be part of a network that cares, shares knowledge, and empowers each
          other with proactive measures, aid, and emotional support.
        </p>
        <div style={{ marginBottom: "40px" }}>
          <button style={styles.communityButton}>Register for Free Now</button>
          <button style={styles.communitySecondaryButton}>
            Understand our policies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
