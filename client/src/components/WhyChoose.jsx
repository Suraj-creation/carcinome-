import React from "react";
import {
  Zap,
  Heart,
  Users,
  DollarSign,
  Compass,
  CheckCircle,
  Star,
  Shield,
  Clock,
} from "lucide-react";

// --- Data & Helpers ---
const PanCancerFocusIcon = () => (
  <div
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      backgroundColor: "#3b82f6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    }}
  >
    <Zap size={24} />
  </div>
);

const features = [
  {
    icon: PanCancerFocusIcon,
    title: "Pan-Cancer Focus",
    subtitle: "End-to-end expertise with deep specialization",
    theme: "blue",
    points: [
      "Unlike platforms focused on single cancer types, we provide comprehensive support for all cancers",
      "Dedicated teams handling complex or multiple carcinomas",
      "Coverage for 50+ cancer types and subtypes",
    ],
  },
  {
    icon: Zap,
    title: "Tech-Enabled Support",
    subtitle: "Making treatment simpler and easier",
    theme: "purple",
    points: [
      "Our technology platform provides secure digital navigation, real-time treatment updates",
      "Secure channel for constant patient-doctor communication",
      "Customized treatment tracking/monitoring",
    ],
  },
  {
    icon: Heart,
    title: "Neutral & Patient-Centric",
    subtitle: "Always putting the patient first",
    theme: "pink",
    points: [
      "Zero partner bias ensures our doctor and hospital recommendations are based solely on patient needs",
      "No commercial influence on treatment/support decisions",
      "Patient outcome-driven partnerships",
    ],
  },
  {
    icon: Users,
    title: "Strong Partnership Network",
    subtitle: "Access the best care providers",
    theme: "red",
    points: [
      "Formal MOUs with top hospitals, palliative care centers, leading nursing bypasses",
      "50+ partner hospitals across India",
      "400+ leading oncology specialists",
    ],
  },
  {
    icon: DollarSign,
    title: "Affordable & Accessible",
    subtitle: "High-quality care for every income class",
    theme: "orange",
    points: [
      "Transparent pricing structures, negotiated ambulance rates, verified low-cost accommodation",
      "Up to 40% savings on treatment costs",
      "Access to comprehensive financial aid",
    ],
  },
  {
    icon: Compass,
    title: "Compassion First",
    subtitle: "Designed by Families, for Caregivers",
    theme: "green",
    points: [
      "Our platform is built by people who have personally navigated cancer journeys",
      "Dedicated patient and caregiver support",
      "Emotional support and counseling services",
    ],
  },
];

const trustStats = [
  { number: "1000+", label: "Families Supported", icon: Users },
  { number: "400+", label: "Cancer Specialists", icon: Shield },
  { number: "50+", label: "Partner Hospitals", icon: Heart },
  { number: "4.9/5", label: "Patient Rating", icon: Star },
  { number: "24/7", label: "Dedicated Support", icon: Clock },
];

// Reusable Feature Card Component
const FeatureCard = ({ feature, index }) => {
  const themeColors = {
    blue: "#3b82f6",
    purple: "#8b5cf6",
    pink: "#ec4899",
    red: "#ef4444",
    orange: "#f59e0b",
    green: "#10b981",
  };

  const color = themeColors[feature.theme];

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        borderTop: `4px solid ${color}`,
        transition: "all 0.3s ease",
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color,
            color: "white",
            flexShrink: 0,
            transition: "all 0.3s ease",
          }}
        >
          {React.createElement(feature.icon, { size: 24 })}
        </div>
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "4px",
              margin: 0,
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#64748b",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            {feature.subtitle}
          </p>
        </div>
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {feature.points.map((point, pointIndex) => (
          <li
            key={pointIndex}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "8px 0",
              color: "#475569",
              lineHeight: "1.5",
              borderBottom:
                pointIndex < feature.points.length - 1
                  ? "1px solid #e2e8f0"
                  : "none",
            }}
          >
            <CheckCircle
              size={16}
              style={{ color: "#10b981", marginTop: "2px", flexShrink: 0 }}
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Trust Indicator Component
const TrustIndicator = ({ item, index }) => (
  <div
    style={{
      textAlign: "center",
      padding: "20px",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
    }}
  >
    <div style={{ color: "#2563eb", marginBottom: "12px", opacity: 0.8 }}>
      {React.createElement(item.icon, { size: 32 })}
    </div>
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "800",
        color: "#2563eb",
        lineHeight: "1",
        marginBottom: "8px",
      }}
    >
      {item.number}
    </div>
    <p
      style={{
        fontSize: "0.9rem",
        fontWeight: "600",
        color: "#1e293b",
        margin: 0,
      }}
    >
      {item.label}
    </p>
  </div>
);

// --- Main Component ---
const WhyChoose = () => {
  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        minHeight: "100vh",
        lineHeight: "1.6",
      }}
    >
      {/* 1. Header Banner */}
      <div
        style={{
          padding: "48px 24px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "16px 32px",
            borderRadius: "50px",
            border: "2px solid #3b82f6",
            color: "#3b82f6",
            backgroundColor: "white",
            fontSize: "0.95rem",
            fontWeight: "600",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          }}
        >
          <Shield size={16} />
          India's Most Trusted Cancer Care Platform
        </div>
      </div>

      {/* 2. Hero Section - FIXED SPACING */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "768px",
          margin: "0 auto",
          padding: "16px 24px 32px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "800",
            color: "#1e293b",
            marginBottom: "16px",
            lineHeight: "1.2",
            background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: "0 0 16px 0",
          }}
        >
          Why Choose Carcinome For Your Cancer Care Journey?
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "#475569",
            lineHeight: "1.7",
            margin: 0,
          }}
        >
          Discover what makes Carcinome the most comprehensive and trusted
          cancer care aggregator in India, chosen by thousands of families
          nationwide.
        </p>
      </div>

      {/* 3. Feature Grid */}
      <div
        style={{
          padding: "0 24px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "24px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* 4. Image Callout Sections */}
      <div
        style={{
          padding: "0 24px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              height: "256px",
              borderRadius: "16px",
              backgroundImage: 'url("/images/medical-team.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              color: "white",
              display: "flex",
              alignItems: "flex-end",
              padding: "32px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%)",
                borderRadius: "16px",
                zIndex: 1,
              }}
            ></div>
            <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "8px",
                  margin: 0,
                }}
              >
                Expert Team Network
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  opacity: 0.9,
                  margin: 0,
                }}
              >
                400+ Specialists, 50+ Hospitals
              </p>
            </div>
          </div>

          <div
            style={{
              height: "256px",
              borderRadius: "16px",
              backgroundImage: 'url("/images/family-support.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              color: "white",
              display: "flex",
              alignItems: "flex-end",
              padding: "32px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%)",
                borderRadius: "16px",
                zIndex: 1,
              }}
            ></div>
            <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "8px",
                  margin: 0,
                }}
              >
                Family-Centered Care
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  opacity: 0.9,
                  margin: 0,
                }}
              >
                1000+ Families Supported
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Trust Indicators */}
      <div
        style={{
          padding: "48px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "48px 32px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              color: "#475569",
              marginBottom: "48px",
              fontWeight: "600",
              margin: "0 0 48px 0",
            }}
          >
            Trusted by Thousands Across India
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "24px",
            }}
          >
            {trustStats.map((item, index) => (
              <TrustIndicator key={item.label} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* 6. Call to Action */}
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
          color: "#111", // black text
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "768px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              fontWeight: "700",
              marginBottom: "24px",
              lineHeight: "1.2",
            }}
          >
            Ready to Experience the Carcinome Difference?
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              opacity: 0.9,
              marginBottom: "32px",
              maxWidth: "512px",
              margin: "0 auto 32px auto",
            }}
          >
            Join thousands of families who have found hope and healing with our
            comprehensive cancer care platform.
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Primary Blue Button */}
            <button
              style={{
                padding: "16px 32px",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                backgroundColor: "#2563eb", // blue bg
                color: "white", // white text
                minWidth: "12rem",
                transition: "all 0.3s ease",
              }}
            >
              Start Your Cancer Care Journey
            </button>

            {/* Secondary White Button */}
            <button
              style={{
                padding: "16px 32px",
                border: "2px solid #2563eb",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                backgroundColor: "white", // white bg
                color: "#2563eb", // blue text
                minWidth: "12rem",
                transition: "all 0.3s ease",
              }}
            >
              Speak with Our Experts
            </button>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default WhyChoose;
