import React, { useEffect, useRef } from "react";
import { Building2, Target, Link2, Home, Dna, UserCheck } from "lucide-react";

// ─── Scroll Animation Hook ────────────────────────────────────────────────────
function useFadeIn(options = {}) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("cc-visible");
                    observer.unobserve(el);
                }
            },
            { threshold: 0.12, ...options }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

// ─── Pill Badge ───────────────────────────────────────────────────────────────
const Pill = ({ text }) => (
    <span
        style={{
            display: "inline-block",
            padding: "5px 18px",
            borderRadius: "50px",
            background: "rgba(74,108,247,0.08)",
            color: "#4A6CF7",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "1rem",
        }}
    >
        {text}
    </span>
);

// ─── Section 1 : Platform Intro ───────────────────────────────────────────────
const PlatformIntro = () => {
    const headRef = useFadeIn();
    const col1Ref = useFadeIn();
    const col2Ref = useFadeIn();
    const col3Ref = useFadeIn();
    const layerRef = useFadeIn();

    const bulletPoints = [
        "Safe home-based infusions and nursing support",
        "Clinical trial discovery, eligibility assistance, and navigation",
        "Structured secondary opinions from global cancer experts",
    ];

    return (
        <div className="cc-section cc-white">
            <div className="cc-container">
                <div ref={headRef} className="cc-fade cc-text-center" style={{ marginBottom: "2.5rem" }}>
                    <Pill text="About Us" />
                    <h2 className="cc-h2">
                        Cancer care is <span className="cc-blue">complex,</span> overwhelming,
                        and often fragmented.
                    </h2>
                    <p className="cc-lead">
                        Families move from hospitals to labs to trial centers, trying to understand the next
                        step — unsure whether they're eligible for a clinical trial, or whether a global expert
                        could provide clarity. Doctors want their patients to receive continuous support, but
                        hospitals are designed for <em>acute care</em>, not for the day-to-day coordination,
                        guidance, and at-home support many patients require.
                    </p>
                </div>

                {/* Three columns */}
                <div className="cc-grid-3" style={{ marginBottom: "2.5rem" }}>
                    <div ref={col1Ref} className="cc-fade cc-card cc-card-blue" style={{ animationDelay: "0s" }}>
                        <div className="cc-card-icon-wrap">
                            <Building2 size={24} strokeWidth={1.8} />
                        </div>
                        <h3 className="cc-h3">Carcinome was created to close these gaps.</h3>
                        <p className="cc-body">
                            Carcinome is a <strong>specialized oncology-support platform</strong> designed to{" "}
                            <strong>extend cancer care <em>beyond the hospital.</em></strong> We work alongside
                            treating oncologists to deliver:
                        </p>
                        <ul className="cc-list">
                            {bulletPoints.map((pt, i) => (
                                <li key={i} className="cc-list-item">
                                    <span className="cc-dot" />
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div ref={col2Ref} className="cc-fade cc-card cc-card-blue" style={{ animationDelay: "0.15s" }}>
                        <div className="cc-card-icon-wrap">
                            <Target size={24} strokeWidth={1.8} />
                        </div>
                        <h3 className="cc-h3">Our Mission</h3>
                        <p className="cc-body">
                            To ensure that every patient experiences a <strong>smoother, safer,</strong> and
                            better-guided journey. We believe healing is about care, dignity, and support
                            every step of the way.
                        </p>
                        <ul className="cc-list">
                            <li className="cc-list-item"><span className="cc-dot" />Human-centric care that prioritizes dignity and support</li>
                            <li className="cc-list-item"><span className="cc-dot" />Democratizing access to world-class oncology expertise</li>
                            <li className="cc-list-item"><span className="cc-dot" />Building India's largest comprehensive cancer care ecosystem</li>
                        </ul>
                    </div>

                    <div ref={col3Ref} className="cc-fade cc-card cc-card-blue" style={{ animationDelay: "0.3s" }}>
                        <div className="cc-card-icon-wrap">
                            <Link2 size={24} strokeWidth={1.8} />
                        </div>
                        <h3 className="cc-h3">Clinical Coordination Layer</h3>
                        <p className="cc-body">
                            We serve as a <strong>bridging layer</strong> making complex care pathways accessible
                            and ensuring continuity beyond the hospital walls.
                        </p>
                        <ul className="cc-list">
                            <li className="cc-list-item"><span className="cc-dot" />Managing global expert opinions and case summaries</li>
                            <li className="cc-list-item"><span className="cc-dot" />Protocol-driven nursing and infusion coordination</li>
                            <li className="cc-list-item"><span className="cc-dot" />Comprehensive AI-enabled clinical trial eligibility screening</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom callout */}
                <div ref={layerRef} className="cc-fade cc-callout">
                    💡&nbsp;&nbsp;Carcinome operates as a clinical coordination layer, making complex care
                    pathways accessible without disrupting the doctor–patient relationship.
                </div>
            </div>
        </div>
    );
};

// ─── Section 2 : Three Core Pillars ──────────────────────────────────────────
const services = [
    {
        Icon: Home,
        title: "Cancer Care Beyond Hospitals",
        subtitle: "Nurse-led, protocol-driven care at home for patients and caregivers.",
        accentColor: "#4A6CF7",
        items: [
            ["Antibiotic & albumin infusions", "at home"],
            ["Line & port care", "(PICC flush/clean; port-a-cath care)"],
            ["Vitals & symptom checks", "(pain, nausea, fatigue)"],
            ["Post-op dressings, wound care,", "radiation-skin care"],
            ["Monitoring for complications &", "escalation alerts"],
            ["Supportive care", "to reduce avoidable ER visits"],
        ],
    },
    {
        Icon: Dna,
        title: "AI Clinical Trials Guidance",
        subtitle: "Accessible pathways to Indian and international clinical trials.",
        accentColor: "#7d4cff",
        items: [
            ["Repository of trials", "by cancer type, biomarkers & line of therapy"],
            ["Basic eligibility screening", "(stage, prior lines, genetics, comorbidities)"],
            ["Constraints mapping", "(travel, affordability, caregiver availability)"],
            ["Trial shortlisting", "and site coordination"],
            ["Document prep, scheduling", "& status tracking"],
            ["Treating oncologist retains", "full medical decision-making"],
        ],
    },
    {
        Icon: UserCheck,
        title: "Secondary Opinion",
        subtitle: "Secondary opinions from leading international experts.",
        accentColor: "#00a86b",
        items: [
            ["Access to experts", "associated with MSK, MD Anderson & global centers"],
            ["Case summary prep:", "reports, imaging, timelines, prior therapies"],
            ["48–72 hour turnaround", "where applicable"],
            ["Clear recommendations", "shared with the treating oncologist"],
            ["Referral-based pathway", "with structured documentation"],
            ["Enables confidence", "and clarity for complex cases"],
        ],
    },
];

const ThreePillars = () => {
    const headRef = useFadeIn();

    return (
        <div className="cc-section cc-grey">
            <div className="cc-container">
                <div ref={headRef} className="cc-fade cc-text-center" style={{ marginBottom: "2.5rem" }}>
                    <Pill text="Our Services" />
                    <h2 className="cc-h2">Cancer Care Beyond Hospitals</h2>
                    <p className="cc-lead">
                        <strong>One trusted platform.</strong> Three core pillars. Focused support for every
                        oncology need.
                    </p>
                </div>

                <div className="cc-grid-3">
                    {services.map((svc, i) => {
                        const cardRef = useFadeIn();
                        return (
                            <div
                                key={i}
                                ref={cardRef}
                                className="cc-fade cc-pillar-card card-tilt"
                                style={{ animationDelay: `${i * 0.15}s`, borderTop: `4px solid ${svc.accentColor}` }}
                            >
                                <div className="cc-pillar-icon-wrap" style={{ background: `${svc.accentColor}18`, color: svc.accentColor }}>
                                    <svc.Icon size={24} strokeWidth={1.8} />
                                </div>
                                <h3 className="cc-h3">
                                    {svc.title}
                                </h3>
                                <p className="cc-body" style={{ marginBottom: "1rem" }}>
                                    <strong>{svc.subtitle}</strong>
                                </p>
                                <ul className="cc-list">
                                    {svc.items.map(([bold, rest], j) => (
                                        <li key={j} className="cc-list-item">
                                            <span className="cc-dot" style={{ background: svc.accentColor }} />
                                            <span>
                                                <strong>{bold}</strong> {rest}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};



// ─── Root Export ──────────────────────────────────────────────────────────────
const CarcinomeContent = () => (
    <>
        <style>{`
      /* ---- Fade-in animation ---- */
      .cc-fade {
        opacity: 0;
        transform: translateY(28px);
        transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .cc-fade.cc-visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* ---- Layout ---- */
      .cc-section {
        padding: var(--section-padding, 4rem 2rem);
      }
      .cc-white { background: #F5F7FF; }
      .cc-grey  { background: var(--color-bg-grey, #EEF2FF); }

      .cc-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .cc-text-center { text-align: center; }

      /* ---- Typography ---- */
      .cc-h2 {
        font-size: 1.9rem;
        font-weight: 700;
        color: var(--color-text-heading, #1e293b);
        margin: 0 0 1rem 0;
        line-height: 1.15;
        text-wrap: balance;
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
      }
      .cc-h3 {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--color-text-heading, #1e293b);
        margin: 0 0 0.6rem 0;
        text-wrap: balance;
      }
      .cc-h4 {
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-text-heading, #1e293b);
        margin: 0 0 0.75rem 0;
      }
      .cc-lead {
        font-size: 0.98rem;
        color: var(--color-text-body, #475569);
        line-height: 1.7;
        max-width: 820px;
        margin: 0 auto;
      }
      .cc-body {
        font-size: 0.95rem;
        color: var(--color-text-body, #475569);
        line-height: 1.7;
        margin: 0 0 0.5rem 0;
      }
      .cc-blue { color: var(--color-primary, #4A6CF7); }

      /* ---- Grid ---- */
      .cc-grid-3 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      /* ---- Icon circles ---- */
      .cc-card-icon-wrap {
        width: 52px;
        height: 52px;
        border-radius: 16px;
        background: rgba(74, 108, 247, 0.08);
        color: var(--color-primary, #4A6CF7);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        flex-shrink: 0;
        box-shadow: inset 2px 2px 4px rgba(255,255,255,0.7), inset -1px -1px 3px rgba(0,0,0,0.04);
      }
      .cc-pillar-icon-wrap {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        flex-shrink: 0;
      }

      /* ---- Plain card ---- */
      .cc-card {
        background: #fff;
        border: 1px solid rgba(255,255,255,0.6);
        border-radius: 24px;
        padding: 1.5rem;
        box-shadow: var(--shadow-clay, 8px 8px 16px rgba(0,0,0,0.06), -4px -4px 12px rgba(255,255,255,0.8), inset 2px 2px 4px rgba(255,255,255,0.6), inset -1px -1px 3px rgba(0,0,0,0.03));
        transition: transform var(--transition-standard), box-shadow var(--transition-standard);
        transform-style: preserve-3d;
      }
      .cc-card:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-clay-hover, 12px 12px 24px rgba(0,0,0,0.08), -6px -6px 16px rgba(255,255,255,0.9), inset 2px 2px 4px rgba(255,255,255,0.6), inset -1px -1px 3px rgba(0,0,0,0.03));
      }
      .cc-card-blue { border-top: 4px solid var(--color-primary, #4A6CF7); }
      .cc-card-highlight { border-top: 4px solid var(--color-primary, #4A6CF7); background: var(--color-primary-light, #EEF2FF); }

      /* ---- Pillar card ---- */
      .cc-pillar-card {
        background: #fff;
        border: 1px solid rgba(255,255,255,0.6);
        border-radius: 24px;
        padding: 1.5rem;
        box-shadow: var(--shadow-clay, 8px 8px 16px rgba(0,0,0,0.06), -4px -4px 12px rgba(255,255,255,0.8), inset 2px 2px 4px rgba(255,255,255,0.6), inset -1px -1px 3px rgba(0,0,0,0.03));
        transition: transform var(--transition-standard), box-shadow var(--transition-standard);
        transform-style: preserve-3d;
      }
      .cc-pillar-card:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-clay-hover, 12px 12px 24px rgba(0,0,0,0.08), -6px -6px 16px rgba(255,255,255,0.9), inset 2px 2px 4px rgba(255,255,255,0.6), inset -1px -1px 3px rgba(0,0,0,0.03));
      }

      /* ---- List ---- */
      .cc-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .cc-list-item {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        font-size: 0.875rem;
        color: var(--color-text-body, #475569);
        margin-bottom: 0.45rem;
        line-height: 1.6;
      }
      .cc-dot {
        display: inline-block;
        width: 7px;
        height: 7px;
        min-width: 7px;
        border-radius: 50%;
        background: var(--color-primary, #4A6CF7);
        margin-top: 5px;
      }

      /* ---- Callout ---- */
      .cc-callout {
        background: var(--color-primary-light, #EEF2FF);
        border: 1px solid rgba(74,108,247,0.15);
        border-left: 4px solid var(--color-primary, #4A6CF7);
        border-radius: 16px;
        padding: 1.8rem 2.2rem;
        font-size: 1rem;
        color: var(--color-primary, #4A6CF7);
        font-weight: 500;
        line-height: 1.7;
        text-align: center;
        box-shadow: inset 2px 2px 4px rgba(255,255,255,0.7), inset -1px -1px 3px rgba(0,0,0,0.04);
      }

      /* ---- Problem box ---- */
      .cc-problem-box {
        background: #F5F7FF;
        border-radius: 16px;
        padding: 1.8rem;
        margin-bottom: 1.5rem;
        border-left: 4px solid #4A6CF7;
      }

      /* ---- Quote block ---- */
      .cc-quote-block {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        background: #fff;
        border: 1px solid #eaeef7;
        border-radius: 10px;
        padding: 1.5rem 1.8rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
      .cc-quote-bar {
        display: inline-block;
        width: 5px;
        min-width: 5px;
        border-radius: 4px;
        background: #4A6CF7;
        align-self: stretch;
      }

      /* ---- Numbered card ---- */
      .cc-numbered-card {
        display: flex;
        align-items: flex-start;
        gap: 1.2rem;
        background: #fff;
        border: 1px solid rgba(255,255,255,0.6);
        border-radius: 20px;
        padding: 1.8rem;
        box-shadow: var(--shadow-clay, 8px 8px 16px rgba(0,0,0,0.06), -4px -4px 12px rgba(255,255,255,0.8), inset 2px 2px 4px rgba(255,255,255,0.6), inset -1px -1px 3px rgba(0,0,0,0.03));
      }
      .cc-num-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        min-width: 40px;
        border-radius: 50%;
        background: #4A6CF7;
        color: white;
        font-weight: 700;
        font-size: 1.1rem;
      }
      .cc-ol {
        padding-left: 1.2rem;
        margin: 0;
        font-size: 0.9rem;
        color: #444;
        line-height: 1.7;
      }

      /* ---- 2-col grid for home care cards ---- */
      .cc-grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
      .cc-grid-2 .cc-numbered-card {
        margin-bottom: 0;
      }

      /* ---- Responsive ---- */
      @media (max-width: 768px) {
        .cc-h2 { font-size: 1.7rem; }
        .cc-section { padding: 3rem 1.25rem; }
        .cc-grid-3 { grid-template-columns: 1fr; }
        .cc-grid-2 { grid-template-columns: 1fr; }
      }
    `}</style>
        <PlatformIntro />
        <ThreePillars />
    </>
);

export default CarcinomeContent;
