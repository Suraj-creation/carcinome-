import React from "react";
import {
  Stethoscope,
  Home,
  Heart,
  Users,
  Landmark,
  GraduationCap,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Stethoscope size={28} color="#4A6CF7" />,
      title: "Seamless Hospital Access & Second Opinions",
      description:
        "Connect with India's top cancer hospitals and get expert second opinions within 48–72 hours through our extensive network of oncologists and cancer specialists.",
    },
    {
      icon: <Landmark size={28} color="#34D399" />,
      title: "Affordable Treatment Guidance & Accommodations",
      description:
        "Find verified, budget-friendly accommodation near treatment centers, with transparent pricing and quality assurance for patients and caregivers.",
    },
    {
      icon: <GraduationCap size={28} color="#A78BFA" />,
      title: "Financial Aid & Government Schemes",
      description:
        "Access comprehensive support for crowdfunding, NGO partnerships, and assistance with Ayushman Bharat and PM/CM Relief Fund applications.",
    },
    {
      icon: <Heart size={28} color="#F87171" />,
      title: "Clinical Trials Access in India & Abroad",
      description:
        "Get connected to advanced therapy clinical trials through partnerships with leading research institutions and pharmaceutical companies.",
    },
    {
      icon: <Home size={28} color="#FB7185" />,
      title: "Home-based Palliative Care & Emotional Support",
      description:
        "Comprehensive at-home care services including pain management, emotional counseling, and family support through trained healthcare professionals.",
    },
    {
      icon: <Users size={28} color="#4A6CF7" />,
      title: "Community Support & Educational Resources",
      description:
        "Join a supportive community of patients, caregivers, and survivors with access to educational webinars, support groups, and awareness programs.",
    },
  ];

  return (
    <section
      style={{
        padding: "3rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "700",
          color: "#111",
          marginBottom: "2rem",
          margin: "0 0 2rem 0",
          lineHeight: "1.3",
        }}
      >
        Comprehensive Cancer Care Services We Provide
      </h2>

      {/* Services Grid - All 6 Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2.5rem",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "1.5rem",
              textAlign: "left",
              boxShadow: "6px 6px 12px rgba(0,0,0,0.06), -3px -3px 8px rgba(255,255,255,0.8), inset 1px 1px 2px rgba(255,255,255,0.6), inset -1px -1px 2px rgba(0,0,0,0.04)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.6)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "8px 8px 20px rgba(74,108,247,0.12), -4px -4px 12px rgba(255,255,255,0.9), inset 1px 1px 3px rgba(255,255,255,0.7), inset -1px -1px 3px rgba(0,0,0,0.05)";
              e.currentTarget.style.borderColor = "rgba(74,108,247,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "6px 6px 12px rgba(0,0,0,0.06), -3px -3px 8px rgba(255,255,255,0.8), inset 1px 1px 2px rgba(255,255,255,0.6), inset -1px -1px 2px rgba(0,0,0,0.04)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
            }}
          >
            <div
              style={{
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              {service.icon}
            </div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "0.6rem",
                color: "#222",
                margin: "0 0 0.6rem 0",
                lineHeight: "1.3",
                flex: "0 0 auto",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#555",
                lineHeight: "1.5",
                margin: 0,
                flex: "1",
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;
