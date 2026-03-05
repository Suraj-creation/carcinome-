// Oursupport.jsx
import React from "react";

// --- Self-Contained SVG Icons (No external libraries needed) ---
const CheckIcon = () => (
  <svg
    className="check-icon"
    xmlns="http://www.w.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const createGenericIcon = (color) => (
  <svg
    className="card-icon"
    style={{ color }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10" opacity="0.1" />
    <circle cx="12" cy="12" r="7" />
  </svg>
);

// --- Professional Icons for "Additional Support Services" ---
const EHRSystemIcon = () => (
  <svg
    className="additional-service-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const NutritionalMgmtIcon = () => (
  <svg
    className="additional-service-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 21a9 9 0 01-9-9 10.5 10.5 0 012.3-6.5A2.3 2.3 0 017.6 3h8.8a2.3 2.3 0 012.3 2.5A10.5 10.5 0 0121 12a9 9 0 01-9 9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 5.5V3"
    />
  </svg>
);

const CaregiverSupportIcon = () => (
  <svg
    className="additional-service-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.134-1.276-.388-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.134-1.276.388-1.857m0 0a5.002 5.002 0 019.224 0M12 14a4 4 0 100-8 4 4 0 000 8z"
    />
  </svg>
);

const VerifiedSupportIcon = () => (
  <svg
    className="additional-service-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 11.857l2.5 2.5L15.857 9M12 20a8 8 0 100-16 8 8 0 000 16z"
    />
  </svg>
);

// --- Component Data with EXACT text from the image ---
const serviceCardsData = [
  {
    icon: createGenericIcon("#4A6CF7"),
    title: "Hospital Tie-Ups & Network",
    features: [
      "Access to 250+ hospitals across India",
      "Cashless claims at network hospitals",
      "Support in non-network hospitals",
      "End-to-end admission and discharge support",
    ],
    benefits: [
      "Access to top cancer hospitals and oncologists",
      "Reduced waiting time for appointments and treatments",
      "Significant savings with negotiated corporate tariffs",
    ],
  },
  {
    icon: createGenericIcon("#22c55e"),
    title: "Home & Palliative Care",
    features: [
      "Doctor consultations at home",
      "Nursing and attendant care",
      "Chemotherapy at home",
      "Medical equipment rentals",
      "Palliative and end-of-life care",
    ],
    benefits: [
      "Comfort of receiving care at home",
      "Reduced risk of hospital-acquired infections",
      "Improved quality of life for patients and family members",
    ],
  },
  {
    icon: createGenericIcon("#ef4444"),
    title: "Ambulance Support Network",
    features: [
      "Network of 2,000+ ambulances across India",
      "Emergency and non-emergency transport",
      "Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS) ambulances",
      "Air ambulance support",
    ],
    benefits: [
      "Timely and safe transport for patients",
      "Access to specialized ambulances for critical care",
      "Peace of mind for family members during emergencies",
    ],
  },
  {
    icon: createGenericIcon("#8b5cf6"),
    title: "Affordable Stay Solutions",
    features: [
      "Budget-friendly accommodation near hospitals",
      "Clean, hygienic, and safe environments",
      "Negotiated rates with partner hotels and guesthouses",
      "Long-term stay options available",
    ],
    benefits: [
      "Reduced financial burden of accommodation",
      "Convenient access to hospitals for treatment",
      "Comfortable and stress-free stay for patients and caregivers",
    ],
  },
  {
    icon: createGenericIcon("#f97316"),
    title: "Financial Aid & Crowdfunding",
    features: [
      "Guidance on government schemes and financial aid",
      "Assistance with crowdfunding campaigns",
      "Support for documentation and application process",
      "Collaboration with NGOs and trusts",
    ],
    benefits: [
      "Access to funds for expensive cancer treatments",
      "Reduced financial stress on the family",
      "Support from a community of donors and well-wishers",
    ],
  },
  {
    icon: createGenericIcon("#06b6d4"),
    title: "Clinical Trials Access",
    features: [
      "Information on ongoing clinical trials",
      "Guidance on eligibility criteria and enrollment",
      "Support throughout the clinical trial process",
      "Access to cutting-edge treatments",
    ],
    benefits: [
      "Opportunity to receive innovative cancer treatments",
      "Contribution to medical research and future cancer care",
      "Access to expert medical supervision during trials",
    ],
  },
  {
    icon: createGenericIcon("#4f46e5"),
    title: "Government Scheme Support",
    features: [
      "Comprehensive information on central and state government schemes",
      "Assistance with application and documentation",
      "Support in navigating bureaucratic processes",
      "End-to-end guidance for scheme approval",
    ],
    benefits: [
      "Avail financial benefits from government initiatives",
      "Reduced out-of-pocket expenditure on treatment",
      "Leverage government aid for cancer care",
    ],
  },
  {
    icon: createGenericIcon("#ec4899"),
    title: "Digital Opinion Concierge",
    features: [
      "Second opinion from leading national and international oncologists",
      "Comprehensive review of medical records",
      "Personalized treatment recommendations",
      "Coordination for tele/video consultations",
    ],
    benefits: [
      "Clarity and confidence in treatment decisions",
      "Access to global oncology expertise",
      "Informed decision-making for better health outcomes",
    ],
  },
];

const additionalSupportServices = [
  // { icon: <EHRSystemIcon />, title: "EHR System / Case File Mgmt" },
  // { icon: <NutritionalMgmtIcon />, title: "Nutritional Management" },
  // { icon: <CaregiverSupportIcon />, title: "Caregiver Support Groups" },
  { icon: <VerifiedSupportIcon />, title: "24/7 Cancer Care Helpline" },
  { icon: <VerifiedSupportIcon />, title: "Medical Records Management" },
  { icon: <VerifiedSupportIcon />, title: "Caregiver Support Programs" },
  { icon: <VerifiedSupportIcon />, title: "Survivor Support Network" },
];

const howItWorksSteps = [
  {
    number: 1,
    title: "Connect",
    description:
      "Book consultation online or upload your medical reports through our secure platform",
    colorClass: "step-circle-blue",
  },
  {
    number: 2,
    title: "Navigate",
    description:
      "Get personalized doctor and hospital guidance based on your specific cancer type and needs",
    colorClass: "step-circle-green",
  },
  {
    number: 3,
    title: "Support",
    description:
      "Access financial aid, accommodation, and comprehensive support services",
    colorClass: "step-circle-purple",
  },
  {
    number: 4,
    title: "Beyond Treatment",
    description:
      "Receive ongoing emotional support, palliative care, and survivorship programs",
    colorClass: "step-circle-orange",
  },
];

const StyleTag = () => (
  <style>{`
    .support-container { background-color: #F5F7FF; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 4rem 1rem; color: #1f2937; line-height: 1.5; }
    .support-content-wrapper { max-width: 1280px; margin: 0 auto; }
    .header-section { text-align: center; }
    .main-title { font-size: 1.875rem; font-weight: 700; color: #111827; letter-spacing: -0.025em; line-height: 1.25; }
    .main-subtitle { margin-top: 1rem; max-width: 56rem; margin-left: auto; margin-right: auto; font-size: 1.125rem; color: #4b5563; line-height: 1.75; }
    .main-buttons-container { margin-top: 3rem; display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
    .main-button { color: white; font-size: 1.125rem; font-weight: 700; padding: 1.5rem 2rem; border-radius: 18px; border: none; cursor: pointer; box-shadow: 6px 6px 12px rgba(0,0,0,0.06), -3px -3px 8px rgba(255,255,255,0.8), inset 1px 1px 2px rgba(255,255,255,0.3); transition: all 0.3s ease-in-out; text-decoration: none; display: flex; justify-content: center; align-items: center;}
    .main-button:hover { box-shadow: 8px 8px 20px rgba(74,108,247,0.15), -4px -4px 12px rgba(255,255,255,0.9); transform: translateY(-4px); }
    .button-blue { background-image: linear-gradient(to right, #4A6CF7, #6366F1); }
    .button-green { background-image: linear-gradient(to right, #2DD4A0, #34D399); }
    .button-purple { background-image: linear-gradient(to right, #8B5CF6, #A78BFA); }
    .service-grid { margin-top: 4rem; display: grid; grid-template-columns: 1fr; gap: 2rem; }
    .service-card { border: 1px solid rgba(255,255,255,0.6); border-radius: 20px; padding: 1.5rem; display: flex; flex-direction: column; transition: box-shadow 0.3s ease, transform 0.3s ease; box-shadow: 6px 6px 12px rgba(0,0,0,0.06), -3px -3px 8px rgba(255,255,255,0.8), inset 1px 1px 2px rgba(255,255,255,0.6), inset -1px -1px 2px rgba(0,0,0,0.04); background: white; }
    .service-card:hover { box-shadow: 8px 8px 20px rgba(74,108,247,0.12), -4px -4px 12px rgba(255,255,255,0.9), inset 1px 1px 3px rgba(255,255,255,0.7), inset -1px -1px 3px rgba(0,0,0,0.05); transform: translateY(-4px); }
    .card-header { display: flex; align-items: center; gap: 1rem; }
    .card-icon { width: 2.25rem; height: 2.25rem; }
    .card-icon svg { width: 100%; height: 100%; }
    .card-title { font-size: 1.125rem; font-weight: 600; color: #1f2937; }
    .card-body { margin-top: 1.5rem; }
    .card-section-title { font-weight: 600; color: #374151; font-size: 0.9375rem; }
    .card-list { list-style: none; padding: 0; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
    .card-list-item { display: flex; align-items: flex-start; gap: 0.5rem; color: #4b5563; line-height: 1.5; font-size: 0.9375rem; }
    .check-icon { color: #34D399; margin-top: 4px; flex-shrink: 0; width: 1.25em; height: 1.25em; }
    .card-footer { margin-top: auto; padding-top: 1.5rem; }
    .card-link { font-weight: 600; color: #4A6CF7; text-decoration: none; transition: color 0.2s ease; font-size: 0.9375rem; }
    .card-link:hover { color: #3451B2; }
    .section-title { font-size: 1.5rem; font-weight: 700; color: #111827; text-align: center; }
    .additional-services-section { margin-top: 5rem; }
    .additional-services-grid { margin-top: 2rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .additional-service-item { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0.5rem; }
    .additional-service-icon { width: 2.5rem; height: 2.5rem; color: #4A6CF7; margin-bottom: 0.75rem; }
    .additional-service-icon svg { width: 100%; height: 100%; }
    .additional-service-title { font-weight: 600; color: #374151; font-size: 0.9375rem; line-height: 1.4; }
    .how-it-works-section { margin-top: 5rem; }
    .how-it-works-grid { margin-top: 2.5rem; display: grid; grid-template-columns: 1fr; gap: 2rem; text-align: center; }
    .how-it-works-step { display: flex; flex-direction: column; align-items: center; }
    .step-circle { width: 4rem; height: 4rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.5rem; margin-bottom: 1rem; }
    .step-circle-blue { background-color: #4A6CF7; }
    .step-circle-green { background-color: #34D399; }
    .step-circle-purple { background-color: #A78BFA; }
    .step-circle-orange { background-color: #FBBF24; }
    .step-title { font-weight: 700; font-size: 1.125rem; color: #1f2937; }
    .step-description { margin-top: 0.25rem; color: #4b5563; font-size: 0.9375rem; }
    .final-cta-section { margin-top: 5rem; text-align: center; }
    .final-cta-button { background-color: #4A6CF7; color: white; font-weight: 600; padding: 0.75rem 2rem; font-size: 1rem; border-radius: 50px; border: none; cursor: pointer; transition: background-color 0.3s ease, transform 0.3s ease; box-shadow: 0 4px 12px rgba(74,108,247,0.25); }
    .final-cta-button:hover { background-color: #3451B2; transform: translateY(-2px); }

    @media (min-width: 640px) { .main-buttons-container { grid-template-columns: repeat(3, 1fr); } }
    @media (min-width: 768px) {
        .main-title { font-size: 2.25rem; }
        .service-grid { grid-template-columns: repeat(2, 1fr); }
        .additional-services-grid { grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .how-it-works-grid { grid-template-columns: repeat(4, 1fr); }
    }
    @media (min-width: 1024px) { .support-container { padding: 4rem 2rem; } }
  `}</style>
);

const OurSupport = () => {
  return (
    <>
      <StyleTag />
      <div className="support-container">
        <div className="support-content-wrapper">
          <div className="header-section">
            <h1 className="main-title">
              Our Core Cancer Care Services: Complete Support Ecosystem
            </h1>
            <p className="main-subtitle">
              We provide end-to-end support for cancer patients. Our services
              are designed to fill gaps in the cancer care continuum, improve
              outcomes, and decentralize the care journey.
            </p>
          </div>

          <div className="main-buttons-container">
            <button className="main-button button-blue">Home Care</button>
            <button className="main-button button-green">
              Global Care Access
            </button>
            <button className="main-button button-purple">
              Digital Care Access
            </button>
          </div>

          <div className="service-grid">
            {serviceCardsData.map((card, index) => (
              <div key={index} className="service-card">
                <div className="card-header">
                  {card.icon}
                  <h3 className="card-title">{card.title}</h3>
                </div>
                <div className="card-body">
                  <p className="card-section-title">Key Features:</p>
                  <ul className="card-list">
                    {card.features.map((feature, i) => (
                      <li key={i} className="card-list-item">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-body">
                  <p className="card-section-title">Key Benefits:</p>
                  <ul className="card-list">
                    {card.benefits.map((benefit, i) => (
                      <li key={i} className="card-list-item">
                        <CheckIcon />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="#" className="card-link">
                    View Service in Detail →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="additional-services-section">
            <h2 className="section-title">Additional Support Services</h2>
            <div className="additional-services-grid">
              {additionalSupportServices.map((service, index) => (
                <div key={index} className="additional-service-item">
                  {service.icon}
                  <p className="additional-service-title">{service.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="how-it-works-section">
            <h2 className="section-title">How Carcinome Cancer Care Works</h2>
            <div className="how-it-works-grid">
              {howItWorksSteps.map((step) => (
                <div key={step.number} className="how-it-works-step">
                  <div className={`step-circle ${step.colorClass}`}>
                    {step.number}
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="final-cta-section">
            <button className="final-cta-button">
              Explore All Services in Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSupport;
