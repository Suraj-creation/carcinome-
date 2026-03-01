import React, { useState, useEffect, useRef } from "react";
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
  ArrowLeft,
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
  // Step labels
  rowLabel: {
    fontSize: "0.75rem",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "#0047b3",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  labelLine: {
    flex: 1,
    height: "1px",
    backgroundColor: "rgba(0, 71, 179, 0.15)",
  },
  stepCard: (isHighlighted, isMobile) => ({
    backgroundColor: "white",
    border: isHighlighted ? "2px solid #0047b3" : "1px solid #E5E9F2",
    borderRadius: "16px",
    boxShadow: isHighlighted
      ? "0 15px 40px rgba(0, 71, 179, 0.12)"
      : "0 10px 30px rgba(0, 71, 179, 0.04)",
    padding: "24px",
    position: "relative",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transform: isHighlighted && !isMobile ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
    zIndex: isHighlighted ? 10 : 1,
  }),
  stepHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  stepIcon: (color, isHighlighted) => ({
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: color,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: isHighlighted ? `0 10px 20px ${color}66` : `0 6px 12px ${color}33`,
    transition: "all 0.4s ease",
    transform: isHighlighted ? "rotate(10deg)" : "rotate(0)",
  }),
  stepNumber: {
    display: "inline-block",
    fontSize: "0.65rem",
    backgroundColor: "#F0F4FF",
    color: "#0047b3",
    padding: "3px 8px",
    borderRadius: "4px",
    fontWeight: "700",
    border: "1px solid #D0D8F0",
    marginBottom: "8px",
    alignSelf: "flex-start",
  },
  stepTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#1a1f36",
    lineHeight: "1.2",
    margin: 0,
  },
  stepSubtitle: {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "#10b981",
    marginTop: "2px",
  },
  featureList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    borderTop: "1px solid #f0f2f7",
    paddingTop: "12px",
    flex: 1,
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    fontSize: "0.85rem",
    color: "#4f566b",
    marginBottom: "8px",
    lineHeight: "1.4",
  },
  featureIcon: {
    width: "16px",
    height: "16px",
    marginRight: "10px",
    color: "#10b981",
    flexShrink: 0,
    marginTop: "2px",
  },
  connectorRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0047b3",
    opacity: 0.5,
  },
  connectorDown: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
    color: "#0047b3",
    opacity: 0.5,
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
  @media (min-width: 1024px) {
    .ct-hero-container { padding: 100px 20px 120px 20px; }
    .ct-hero-title { font-size: 3rem !important; }
    .ct-flow-row {
      display: grid !important;
      grid-template-columns: 1fr 40px 1fr 40px 1fr !important;
      align-items: stretch !important;
      margin-bottom: 20px;
    }
    .ct-flow-arrow-h {
      display: flex !important;
      align-items: center;
      justify-content: center;
    }
    .ct-flow-arrow-v {
      display: none !important;
    }
    .ct-flow-arrow-down {
      display: grid !important;
      grid-template-columns: 1fr 40px 1fr 40px 1fr !important;
      margin: 0px 0 20px 0;
    }
    .ct-step-card:hover {
      transform: translateY(-8px) scale(1.03) !important;
      box-shadow: 0 20px 45px rgba(0, 71, 179, 0.15) !important;
      border-color: #0047b3 !important;
      z-index: 20 !important;
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
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const activeStepRef = useRef(0);
  const isPausedRef = useRef(false);

  // Sync refs with state for use in interval
  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Animation logic
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isMobile) {
          setActiveStep(1);
          intervalRef.current = setInterval(() => {
            if (!isPausedRef.current) {
              const next = activeStepRef.current < 6 ? activeStepRef.current + 1 : 1;
              setActiveStep(next);
            }
          }, 1500);
        } else {
          setActiveStep(0);
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (intervalRef.current) clearInterval(intervalRef.current);
      observer.disconnect();
    };
  }, [isMobile]);

  const renderStep = (stepNumber) => {
    const step = pipelineSteps.find(s => s.number === `Step ${stepNumber}`);
    const isHighlighted = activeStep === stepNumber;

    return (
      <div
        className="ct-step-card"
        style={styles.stepCard(isHighlighted, isMobile)}
        onMouseEnter={() => {
          if (!isMobile) {
            setIsPaused(true);
            setActiveStep(stepNumber);
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            setIsPaused(false);
          }
        }}
      >
        <span style={styles.stepNumber}>{step.number}</span>
        <div style={styles.stepHeader}>
          <div style={styles.stepIcon(step.iconColor, isHighlighted)}>
            {React.createElement(step.icon, { size: 20 })}
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
  };

  return (
    <div style={styles.pageContainer}>
      <style>{desktopStyles}</style>

      {/* Hero Banner ... (kept lines 526-558) */}
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

      {/* Pipeline Flow */}
      <div style={styles.pipelineWrapper} ref={sectionRef}>
        <h3 style={styles.pipelineTitle}>
          How Our AI Trial Matching Works
        </h3>
        <p style={styles.pipelineSubtitle}>
          From patient data intake to trial enrollment — a seamless, AI-driven pipeline
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Row 1: Steps 1, 2, 3 */}
          <div style={styles.rowLabel}>
            Inputs Phase <div style={styles.labelLine} />
          </div>
          <div className="ct-flow-row" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {renderStep(1)}
            <div className="ct-flow-arrow-h" style={{ display: "none" }}>
              <ArrowRight size={24} />
            </div>
            <div className="ct-flow-arrow-v" style={{ display: "flex", justifyContent: "center", padding: "10px 0", opacity: 0.3 }}>
              <ArrowDown size={20} />
            </div>

            {renderStep(2)}
            <div className="ct-flow-arrow-h" style={{ display: "none" }}>
              <ArrowRight size={24} />
            </div>
            <div className="ct-flow-arrow-v" style={{ display: "flex", justifyContent: "center", padding: "10px 0", opacity: 0.3 }}>
              <ArrowDown size={20} />
            </div>

            {renderStep(3)}
          </div>

          {/* Row Connector (Desktop Only) - points down from 3 to 4 */}
          <div className="ct-flow-arrow-down ct-flow-row" style={{ display: "none" }}>
            <div /><div /><div /><div />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ArrowDown size={32} color="#0047b3" strokeWidth={1.5} />
            </div>
          </div>

          {/* Row 2: Steps 6, 5, 4 (Visual Order) */}
          <div style={styles.rowLabel}>
            Intelligence & Execution <div style={styles.labelLine} />
          </div>
          <div className="ct-flow-row" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Visual Column 1: Step 6 (Mobile/Stack logic) if mobile, otherwise 6 */}
            {isMobile ? renderStep(4) : renderStep(6)}

            {/* Arrow between Col 1 and 2 */}
            {isMobile ? (
              <div className="ct-flow-arrow-v" style={{ display: "flex", justifyContent: "center", padding: "10px 0", opacity: 0.3 }}>
                <ArrowDown size={20} />
              </div>
            ) : (
              <div className="ct-flow-arrow-h" style={{ display: "none" }}>
                <ArrowLeft size={24} />
              </div>
            )}

            {/* Visual Column 2: Step 5 */}
            {renderStep(5)}

            {/* Arrow between Col 2 and 3 */}
            {isMobile ? (
              <div className="ct-flow-arrow-v" style={{ display: "flex", justifyContent: "center", padding: "10px 0", opacity: 0.3 }}>
                <ArrowDown size={20} />
              </div>
            ) : (
              <div className="ct-flow-arrow-h" style={{ display: "none" }}>
                <ArrowLeft size={24} />
              </div>
            )}

            {/* Visual Column 3: Step 4 (Desktop only, mobile renders it first in Row 2) */}
            {isMobile ? (
              <>
                {renderStep(6)}
              </>
            ) : (
              renderStep(4)
            )}
          </div>

          {/* Mobile cleanup: ensures 1-6 order */}
          {isMobile && (
            <div style={{ display: "none" }}>{/* placeholder */}</div>
          )}
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
