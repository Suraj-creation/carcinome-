import React from "react";
import {
  Bot,
  FlaskConical,
  ClipboardList,
  Dna,
  MapPin,
  BrainCircuit,
  Navigation,
  ShieldCheck,
  CheckCircle,
  ArrowDown,
  ArrowRight,
  Lock,
  UserRoundCog,
  Microscope,
  MessageCircle,
  Send,
} from "lucide-react";

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
    maxWidth: "850px",
    margin: "0 auto 20px auto",
  },
  heroSubtitle: {
    fontSize: "1rem",
    maxWidth: "800px",
    margin: "0 auto 10px auto",
    lineHeight: "1.6",
    opacity: 0.92,
  },
  heroTagline: {
    fontSize: "0.95rem",
    fontWeight: "500",
    opacity: 0.8,
    fontStyle: "italic",
    marginTop: "10px",
  },

  // Intro
  introSection: {
    maxWidth: "950px",
    margin: "0 auto",
    padding: "60px 20px 40px 20px",
    textAlign: "center",
  },
  introTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#101726",
    marginBottom: "15px",
    lineHeight: "1.3",
  },
  introText: {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.7",
    maxWidth: "850px",
    margin: "0 auto",
  },

  // Pipeline / Flow — Horizontal
  pipelineWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px 60px 20px",
  },
  pipelineTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#101726",
    textAlign: "center",
    marginBottom: "12px",
  },
  pipelineSubtitle: {
    fontSize: "0.9rem",
    color: "#99A3BA",
    textAlign: "center",
    marginBottom: "40px",
  },
  // Column labels
  columnLabel: {
    fontSize: "0.7rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#99A3BA",
    textAlign: "center",
    marginBottom: "16px",
  },
  stepCard: {
    backgroundColor: "white",
    border: "1px solid #E0E0E0",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    padding: "28px 30px",
    marginBottom: "0",
    position: "relative",
  },
  stepHeader: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "14px",
  },
  stepIcon: (color) => ({
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
  stepNumber: {
    display: "inline-block",
    fontSize: "0.65rem",
    backgroundColor: "#F8F9FA",
    color: "#99A3BA",
    padding: "2px 8px",
    borderRadius: "4px",
    fontWeight: "600",
    border: "1px solid #E0E0E0",
    marginBottom: "4px",
  },
  stepTitle: {
    fontSize: "1.15rem",
    fontWeight: "700",
    color: "#101726",
    lineHeight: "1.3",
    margin: 0,
  },
  stepSubtitle: {
    fontSize: "0.85rem",
    fontWeight: "500",
    color: "#32CD32",
    margin: "2px 0 0 0",
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
    marginBottom: "8px",
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
  connector: {
    display: "flex",
    justifyContent: "center",
    padding: "8px 0",
  },
  connectorLine: {
    width: "2px",
    height: "30px",
    backgroundColor: "#0047b3",
    position: "relative",
  },
  connectorArrow: {
    color: "#0047b3",
  },
  // Horizontal arrow between columns
  horizontalArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 8px",
  },

  // Chat Section
  chatSection: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px 60px 20px",
  },
  chatCard: {
    backgroundColor: "white",
    border: "none",
    borderRadius: "16px",
    padding: "40px 35px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0, 71, 179, 0.1)",
  },
  chatIconWrap: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: "#0047b3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px auto",
    color: "white",
  },
  chatTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#101726",
    marginBottom: "8px",
  },
  chatSubtitle: {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "24px",
    lineHeight: "1.5",
  },
  chatButton: {
    padding: "14px 36px",
    borderRadius: "50px",
    border: "none",
    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    color: "white",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "1.05rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s",
    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
  },
  chatSteps: {
    marginTop: "30px",
    textAlign: "left",
    maxWidth: "400px",
    margin: "30px auto 0 auto",
  },
  chatStepsTitle: {
    fontSize: "0.95rem",
    fontWeight: "700",
    color: "#101726",
    marginBottom: "16px",
    textAlign: "center",
  },
  chatStep: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "12px",
    fontSize: "0.9rem",
    color: "#333",
    lineHeight: "1.5",
  },
  chatStepNum: {
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    backgroundColor: "#0047b3",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.75rem",
    fontWeight: "700",
    flexShrink: 0,
  },
  chatStepArrow: {
    display: "flex",
    justifyContent: "center",
    padding: "2px 0 2px 11px",
    color: "#0047b3",
  },
  chatCode: {
    backgroundColor: "#F0F4FF",
    border: "1px solid #D0D8F0",
    borderRadius: "6px",
    padding: "2px 8px",
    fontFamily: "monospace",
    fontWeight: "600",
    color: "#0047b3",
    fontSize: "0.85rem",
  },

  // Chatbot Intro Card
  chatbotSection: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px 60px 20px",
  },
  chatbotCard: {
    background: "linear-gradient(135deg, #0047b3 0%, #003d99 100%)",
    borderRadius: "16px",
    padding: "40px 35px",
    color: "white",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0, 71, 179, 0.2)",
  },
  chatbotIconWrap: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px auto",
  },
  chatbotTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    marginBottom: "12px",
  },
  chatbotText: {
    fontSize: "0.95rem",
    lineHeight: "1.7",
    opacity: 0.93,
    maxWidth: "700px",
    margin: "0 auto 25px auto",
  },
  chatbotButton: {
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

  // CTA Banner
  ctaBanner: {
    backgroundColor: "#0047b3",
    color: "white",
    textAlign: "center",
    padding: "50px 20px",
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

// Desktop styles
const desktopStyles = `
  @media (min-width: 768px) {
    .ct-hero-container { padding: 80px 20px 100px 20px; }
    .ct-hero-title { font-size: 2.5rem !important; }
    .ct-flow-grid {
      display: grid !important;
      grid-template-columns: 1fr auto 1fr auto 1fr !important;
      gap: 0 !important;
      align-items: stretch !important;
    }
    .ct-flow-col {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .ct-flow-arrow-v { display: none !important; }
    .ct-flow-arrow-h {
      display: flex !important;
      align-items: center;
      justify-content: center;
      padding: 0 6px;
    }
  }
`;

// --- Pipeline Steps Data ---
const pipelineSteps = [
  {
    number: "Step 1",
    icon: ClipboardList,
    iconColor: "#0047b3",
    title: "Patient Intake",
    subtitle: "Structured data collection",
    features: [
      "Cancer type & stage",
      "Prior treatment lines",
      "Comorbidities",
    ],
  },
  {
    number: "Step 2",
    icon: Dna,
    iconColor: "#7d4cff",
    title: "Biomarkers & Genetics",
    subtitle: "Molecular profiling",
    features: [
      "EGFR, ALK, ROS1, BRCA, HER2, KRAS, BRAF",
      "MSI/MMR, PD-L1",
      "Available NGS panel data",
    ],
  },
  {
    number: "Step 3",
    icon: MapPin,
    iconColor: "#e63946",
    title: "Patient Constraints",
    subtitle: "Logistics & feasibility mapping",
    features: [
      "Geography & travel feasibility",
      "Physical fitness & ability",
      "Affordability window",
      "Language & caregiver availability",
    ],
  },
  {
    number: "Step 4",
    icon: BrainCircuit,
    iconColor: "#f59e0b",
    title: "AI Trial Mapping Engine",
    subtitle: "Intelligent match & rank",
    features: [
      "Inclusion / Exclusion criteria matching",
      "Clinical fitness assessment",
      "Distance & timeline analysis",
      "Sponsor support evaluation",
    ],
  },
  {
    number: "Step 5",
    icon: Navigation,
    iconColor: "#00a86b",
    title: "Care Navigator",
    subtitle: "End-to-end coordination",
    features: [
      "Physician validation",
      "Trial site connection",
      "Document preparation",
      "Scheduling & continuous status tracking",
    ],
  },
  {
    number: "Step 6",
    icon: ShieldCheck,
    iconColor: "#101726",
    title: "Ethics & Privacy",
    subtitle: "Patient safety first",
    features: [
      "Explicit informed consent",
      "Encrypted patient data",
      "No outcome guarantees",
      "Treating oncologist leads all decisions",
    ],
  },
];

// --- Component ---
const ClinicalTrials = () => {
  return (
    <div style={styles.pageContainer}>
      <style>{desktopStyles}</style>

      {/* Hero Banner */}
      <div style={styles.heroContainer} className="ct-hero-container">
        <div style={styles.heroTag}>
          <FlaskConical size={14} />
          AI-Powered Clinical Trials
        </div>
        <h1 style={styles.heroTitle} className="ct-hero-title">
          AI Clinical Trial
          <br />
          Recommendation Chatbot
        </h1>
        <p style={styles.heroSubtitle}>
          An AI-powered assistant that simplifies access to cancer clinical
          trials by collecting structured patient data — including diagnosis,
          treatment history, biomarkers, and personal constraints — and matching
          patients with suitable national and international trials.
        </p>
        <p style={styles.heroTagline}>Your Journey, Our Support.</p>
      </div>

      {/* Intro Section */}
      <div style={styles.introSection}>
        <h2 style={styles.introTitle}>
          Accessibility for Clinical Trials
        </h2>
        <p style={styles.introText}>
          Patients and families often struggle to identify suitable clinical
          trials, understand eligibility criteria, timelines, and manage
          participation logistics. Our platform simplifies trial discovery and
          coordination while ensuring that treating oncologists retain full
          medical decision-making authority.
        </p>
      </div>

      {/* Pipeline Flow — Horizontal 3–Column */}
      <div style={styles.pipelineWrapper}>
        <h3 style={styles.pipelineTitle}>
          How Our AI Trial Matching Works
        </h3>
        <p style={styles.pipelineSubtitle}>
          From patient data intake to trial enrollment — a seamless, AI-driven pipeline
        </p>

        <div className="ct-flow-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* LEFT COLUMN — Inputs */}
          <div className="ct-flow-col">
            <div style={styles.columnLabel}>Inputs</div>
            {pipelineSteps.slice(0, 3).map((step, idx) => (
              <React.Fragment key={step.number}>
                <div style={styles.stepCard}>
                  <span style={styles.stepNumber}>{step.number}</span>
                  <div style={styles.stepHeader}>
                    <div style={styles.stepIcon(step.iconColor)}>
                      {React.createElement(step.icon, { size: 22 })}
                    </div>
                    <div>
                      <h4 style={styles.stepTitle}>{step.title}</h4>
                      <p style={styles.stepSubtitle}>{step.subtitle}</p>
                    </div>
                  </div>
                  <ul style={styles.featureList}>
                    {step.features.map((f, i) => (
                      <li key={i} style={styles.featureItem}>
                        <CheckCircle style={styles.featureIcon} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {idx < 2 && (
                  <div className="ct-flow-arrow-v" style={styles.connector}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ ...styles.connectorLine, margin: "0 auto" }} />
                      <ArrowDown size={20} style={styles.connectorArrow} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* HORIZONTAL ARROW → */}
          <div className="ct-flow-arrow-h" style={{ display: "none" }}>
            <ArrowRight size={32} color="#0047b3" strokeWidth={2.5} />
          </div>

          {/* MIDDLE COLUMN — AI Intelligence */}
          <div className="ct-flow-col" style={{ justifyContent: "center" }}>
            <div style={styles.columnLabel}>AI Intelligence</div>
            {(() => {
              const step = pipelineSteps[3];
              return (
                <div style={{ ...styles.stepCard, border: "2px solid #0047b3" }}>
                  <span style={styles.stepNumber}>{step.number}</span>
                  <div style={styles.stepHeader}>
                    <div style={styles.stepIcon(step.iconColor)}>
                      {React.createElement(step.icon, { size: 22 })}
                    </div>
                    <div>
                      <h4 style={styles.stepTitle}>{step.title}</h4>
                      <p style={styles.stepSubtitle}>{step.subtitle}</p>
                    </div>
                  </div>
                  <ul style={styles.featureList}>
                    {step.features.map((f, i) => (
                      <li key={i} style={styles.featureItem}>
                        <CheckCircle style={styles.featureIcon} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
          </div>

          {/* HORIZONTAL ARROW → */}
          <div className="ct-flow-arrow-h" style={{ display: "none" }}>
            <ArrowRight size={32} color="#0047b3" strokeWidth={2.5} />
          </div>

          {/* RIGHT COLUMN — Execution & Governance */}
          <div className="ct-flow-col">
            <div style={styles.columnLabel}>Execution & Governance</div>
            {pipelineSteps.slice(4).map((step, idx) => (
              <React.Fragment key={step.number}>
                <div style={styles.stepCard}>
                  <span style={styles.stepNumber}>{step.number}</span>
                  <div style={styles.stepHeader}>
                    <div style={styles.stepIcon(step.iconColor)}>
                      {React.createElement(step.icon, { size: 22 })}
                    </div>
                    <div>
                      <h4 style={styles.stepTitle}>{step.title}</h4>
                      <p style={styles.stepSubtitle}>{step.subtitle}</p>
                    </div>
                  </div>
                  <ul style={styles.featureList}>
                    {step.features.map((f, i) => (
                      <li key={i} style={styles.featureItem}>
                        <CheckCircle style={styles.featureIcon} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {idx < 1 && (
                  <div className="ct-flow-arrow-v" style={styles.connector}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ ...styles.connectorLine, margin: "0 auto" }} />
                      <ArrowDown size={20} style={styles.connectorArrow} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Section */}
      <div style={styles.chatSection}>
        <div style={styles.chatCard}>
          <div style={styles.chatIconWrap}>
            <MessageCircle size={32} />
          </div>
          <h3 style={styles.chatTitle}>Talk to Our AI Navigator</h3>
          <p style={styles.chatSubtitle}>
            Connect with our AI-powered clinical trial assistant on WhatsApp.
            Get personalised trial recommendations, eligibility checks, and
            step-by-step coordination — all in a simple chat.
          </p>
          <a
            href="https://wa.me/14155238886"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button style={styles.chatButton}>
              <MessageCircle size={20} />
              💬 Chat on WhatsApp
            </button>
          </a>

          <div style={styles.chatSteps}>
            <p style={styles.chatStepsTitle}>How to Start</p>

            <div style={styles.chatStep}>
              <div style={styles.chatStepNum}>1</div>
              <span>Click the <strong>Chat on WhatsApp</strong> button above</span>
            </div>
            <div style={styles.chatStepArrow}><ArrowDown size={14} /></div>

            <div style={styles.chatStep}>
              <div style={styles.chatStepNum}>2</div>
              <span>You'll be redirected to WhatsApp (Twilio-powered)</span>
            </div>
            <div style={styles.chatStepArrow}><ArrowDown size={14} /></div>

            <div style={styles.chatStep}>
              <div style={styles.chatStepNum}>3</div>
              <span>Type <span style={styles.chatCode}>join tie-ride</span> and send</span>
            </div>
            <div style={styles.chatStepArrow}><ArrowDown size={14} /></div>

            <div style={styles.chatStep}>
              <div style={styles.chatStepNum}>4</div>
              <span>Send <span style={styles.chatCode}>Hi</span> to start the conversation</span>
            </div>
            <div style={styles.chatStepArrow}><ArrowDown size={14} /></div>

            <div style={styles.chatStep}>
              <div style={styles.chatStepNum}>5</div>
              <span>Begin receiving personalised trial guidance instantly</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={styles.ctaBanner}>
        <h2 style={styles.ctaTitle}>
          Discover Clinical Trials That Fit Your Journey
        </h2>
        <p style={styles.ctaSubtitle}>
          Our AI chatbot and care navigators help you find the right trial,
          handle documentation, and coordinate with trial sites — while your
          oncologist leads every decision.
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

export default ClinicalTrials;
