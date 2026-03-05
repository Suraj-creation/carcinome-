import React, { useState, useEffect, useRef } from "react";
import {
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
  MessageCircle,
} from "lucide-react";
import "./ClinicalTrials.css";

// --- Pipeline Steps Data ---
const pipelineSteps = [
  {
    number: "Step 1",
    icon: ClipboardList,
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
        className={`ct-step-card${isHighlighted ? " ct-highlighted" : ""}`}
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
        <span className="ct-step-number">{step.number}</span>
        <div className="ct-step-header">
          <div className="ct-step-icon">
            {React.createElement(step.icon, { size: 20 })}
          </div>
          <div>
            <h4 className="ct-step-title">{step.title}</h4>
            <p className="ct-step-subtitle">{step.subtitle}</p>
          </div>
        </div>
        <ul className="ct-feature-list">
          {step.features.map((f, i) => (
            <li key={i} className="ct-feature-item">
              <CheckCircle className="ct-feature-icon" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="ct-page">
      {/* Hero Banner */}
      <div className="ct-hero-container">
        <div className="ct-hero-tag">
          <FlaskConical size={14} />
          AI-Powered Clinical Trials
        </div>
        <h1 className="ct-hero-title">
          AI Clinical Trial
          <br />
          Recommendation Chatbot
        </h1>
        <p className="ct-hero-subtitle">
          An AI-powered assistant that simplifies access to cancer clinical
          trials by collecting structured patient data — including diagnosis,
          treatment history, biomarkers, and personal constraints — and matching
          patients with suitable national and international trials.
        </p>
        <p className="ct-hero-tagline">Your Journey, Our Support.</p>
      </div>

      <div className="ct-intro-section">
        <h2 className="ct-intro-title">
          Accessibility for Clinical Trials
        </h2>
        <p className="ct-intro-text">
          Patients and families often struggle to identify suitable clinical
          trials, understand eligibility criteria, timelines, and manage
          participation logistics. Our platform simplifies trial discovery and
          coordination while ensuring that treating oncologists retain full
          medical decision-making authority.
        </p>
      </div>

      {/* Pipeline Flow */}
      <div className="ct-pipeline-wrapper" ref={sectionRef}>
        <h3 className="ct-pipeline-title">
          How Our AI Trial Matching Works
        </h3>
        <p className="ct-pipeline-subtitle">
          From patient data intake to trial enrollment — a seamless, AI-driven pipeline
        </p>

        <div className="ct-flow-col">
          {/* Row 1: Steps 1, 2, 3 */}
          <div className="ct-row-label">
            Inputs Phase <div className="ct-label-line" />
          </div>
          <div className="ct-flow-row">
            {renderStep(1)}
            <div className="ct-flow-arrow-h">
              <ArrowRight size={24} />
            </div>
            <div className="ct-flow-arrow-v">
              <ArrowDown size={20} />
            </div>

            {renderStep(2)}
            <div className="ct-flow-arrow-h">
              <ArrowRight size={24} />
            </div>
            <div className="ct-flow-arrow-v">
              <ArrowDown size={20} />
            </div>

            {renderStep(3)}
          </div>

          {/* Row Connector (Desktop Only) */}
          <div className="ct-flow-arrow-down ct-flow-row">
            <div /><div /><div /><div />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ArrowDown size={32} strokeWidth={1.5} />
            </div>
          </div>

          {/* Row 2: Steps 6, 5, 4 (Visual Order) */}
          <div className="ct-row-label">
            Intelligence & Execution <div className="ct-label-line" />
          </div>
          <div className="ct-flow-row">
            {isMobile ? renderStep(4) : renderStep(6)}

            {isMobile ? (
              <div className="ct-flow-arrow-v">
                <ArrowDown size={20} />
              </div>
            ) : (
              <div className="ct-flow-arrow-h">
                <ArrowLeft size={24} />
              </div>
            )}

            {renderStep(5)}

            {isMobile ? (
              <div className="ct-flow-arrow-v">
                <ArrowDown size={20} />
              </div>
            ) : (
              <div className="ct-flow-arrow-h">
                <ArrowLeft size={24} />
              </div>
            )}

            {isMobile ? renderStep(6) : renderStep(4)}
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Section */}
      <div className="ct-chat-section">
        <div className="ct-chat-card">
          <div className="ct-chat-icon-wrap">
            <MessageCircle size={32} />
          </div>
          <h3 className="ct-chat-title">Talk to Our AI Navigator</h3>
          <p className="ct-chat-subtitle">
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
            <button className="ct-chat-button">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </button>
          </a>

          <div className="ct-chat-steps">
            <p className="ct-chat-steps-title">How to Start</p>

            <div className="ct-chat-step">
              <div className="ct-chat-step-num">1</div>
              <span>Click the <strong>Chat on WhatsApp</strong> button above</span>
            </div>
            <div className="ct-chat-step-arrow"><ArrowDown size={14} /></div>

            <div className="ct-chat-step">
              <div className="ct-chat-step-num">2</div>
              <span>You'll be redirected to WhatsApp (Twilio-powered)</span>
            </div>
            <div className="ct-chat-step-arrow"><ArrowDown size={14} /></div>

            <div className="ct-chat-step">
              <div className="ct-chat-step-num">3</div>
              <span>Type <span className="ct-chat-code">join tie-ride</span> and send</span>
            </div>
            <div className="ct-chat-step-arrow"><ArrowDown size={14} /></div>

            <div className="ct-chat-step">
              <div className="ct-chat-step-num">4</div>
              <span>Send <span className="ct-chat-code">Hi</span> to start the conversation</span>
            </div>
            <div className="ct-chat-step-arrow"><ArrowDown size={14} /></div>

            <div className="ct-chat-step">
              <div className="ct-chat-step-num">5</div>
              <span>Begin receiving personalised trial guidance instantly</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="ct-cta-banner">
        <h2 className="ct-cta-title">
          Discover Clinical Trials That Fit Your Journey
        </h2>
        <p className="ct-cta-subtitle">
          Our AI chatbot and care navigators help you find the right trial,
          handle documentation, and coordinate with trial sites — while your
          oncologist leads every decision.
        </p>
        <button
          className="ct-cta-button"
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
