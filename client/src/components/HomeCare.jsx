import React, { useEffect } from "react";
import "./HomeCare.css";
import {
  CheckCircle,
  Home,
  Syringe,
  ThermometerSun,
  Pill,
  Dumbbell,
  Users,
  ArrowRight,
} from "lucide-react";

import IMG_SECTION_1 from "../assets/8.png";
import IMG_SECTION_2 from "../assets/9.png";
import IMG_SECTION_3 from "../assets/10.jpeg";
import IMG_SECTION_4 from "../assets/11.png";
import IMG_SECTION_5 from "../assets/12.png";

// --- Data ---
const serviceSections = [
  {
    number: "01",
    icon: Syringe,
    title: "Infusions, Medical & Nursing Care",
    subtitle: "Nurse-led, protocol-driven infusion care at home",
    image: IMG_SECTION_1,
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
    title: "Monitoring & Symptom Management",
    subtitle: "Early detection, timely escalation",
    image: IMG_SECTION_2,
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
    title: "Supportive Therapies",
    subtitle: "Comfort-focused symptom relief at home",
    image: IMG_SECTION_3,
    features: [
      "Oxygen concentrator setup, nebulization, tracheostomy care",
      "Nutrition & feeding: NG/PEG feeds, oncology diet consults, TPN if indicated",
      "Pain & symptom relief (oral/IV/patch), antiemetics, bowel care",
    ],
  },
  {
    number: "04",
    icon: Dumbbell,
    title: "Rehabilitation & Allied Care",
    subtitle: "Recovery support beyond medical treatment",
    image: IMG_SECTION_4,
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
    title: "General Support Services",
    subtitle: "Day-to-day care and logistics handled",
    image: IMG_SECTION_5,
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hc-page">
      {/* Hero Banner */}
      <div className="hc-hero-container">
        <div className="hc-hero-tag anim-fade-up delay-0">
          <Home size={14} />
          Cancer Care at Home
        </div>
        <h1 className="hc-hero-title anim-fade-up delay-1">
          Cancer Care at Home:
          <br />
          Beyond the Hospital Journey
        </h1>
        <p className="hc-hero-subtitle anim-fade-up delay-2">
          Carcinome delivers protocol-driven, nurse-led oncology care at home,
          aligned with the treating oncologist to reduce avoidable emergencies
          and improve patient comfort.
        </p>
        <p className="hc-hero-tagline anim-fade-up delay-3">Your Journey, Our Support.</p>
      </div>

      {/* Problem Background */}
      <div className="hc-problem-section reveal delay-0">
        <div className="hc-problem-eyebrow">Why Home Care?</div>
        <h2 className="hc-problem-title">Why Home Care Matters</h2>
        <p className="hc-problem-text">
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
      <div className="hc-services-wrapper">
        {serviceSections.map((section, index) => (
          <div
            key={section.number}
            className={`hc-service-card reveal card-tilt ${index % 2 !== 0 ? "hc-card-reverse" : ""}`}
            style={{ "--reveal-delay": `${(index % 3) * 0.15}s` }}
          >
            {/* Image */}
            <div className="hc-card-image-wrapper">
              <img
                src={section.image}
                alt={section.title}
                className="hc-card-image"
              />
            </div>

            {/* Content */}
            <div className="hc-card-content">
              <span className="hc-card-number">Service {section.number}</span>

              <div className="hc-card-icon-header">
                <div className="hc-card-icon-circle">
                  {React.createElement(section.icon, { size: 22 })}
                </div>
                <div>
                  <h3 className="hc-card-title">{section.title}</h3>
                  <p className="hc-card-subtitle">{section.subtitle}</p>
                </div>
              </div>

              <ul className="hc-feature-list">
                {section.features.map((feature, i) => (
                  <li key={i} className="hc-feature-item">
                    <CheckCircle className="hc-feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="hc-cta-banner">
        <h2 className="hc-cta-title">
          Safe, Comfortable Cancer Care at Home
        </h2>
        <p className="hc-cta-subtitle">
          Nurse-led infusions and monitoring reduce repeated hospital visits.
          Families receive continuity of care with improved outcomes.
        </p>
        <a
          className="hc-cta-button"
          href="https://wa.me/918191054955"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect With Us <ArrowRight size={16} />
        </a>
        <div className="hc-cta-trust">
          <span className="hc-cta-trust-item">✓ 24/7 Support</span>
          <span className="hc-cta-trust-item">✓ Nurse-Led Care</span>
          <span className="hc-cta-trust-item">✓ Pan-India Network</span>
        </div>
      </div>
    </div>
  );
};

export default HomeCare;
