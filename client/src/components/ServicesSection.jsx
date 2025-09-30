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
      icon: <Stethoscope size={28} color="#0052cc" />,
      title: "Seamless Hospital Access & Second Opinions",
      description:
        "Connect with India's top cancer hospitals and get expert second opinions within 48–72 hours through our extensive network of oncologists and cancer specialists.",
    },
    {
      icon: <Landmark size={28} color="#00a86b" />,
      title: "Affordable Treatment Guidance & Accommodations",
      description:
        "Find verified, budget-friendly accommodation near treatment centers, with transparent pricing and quality assurance for patients and caregivers.",
    },
    {
      icon: <GraduationCap size={28} color="#7d4cff" />,
      title: "Financial Aid & Government Schemes",
      description:
        "Access comprehensive support for crowdfunding, NGO partnerships, and assistance with Ayushman Bharat and PM/CM Relief Fund applications.",
    },
    {
      icon: <Heart size={28} color="#ff4c4c" />,
      title: "Clinical Trials Access in India & Abroad",
      description:
        "Get connected to advanced therapy clinical trials through partnerships with leading research institutions and pharmaceutical companies.",
    },
    {
      icon: <Home size={28} color="#e63946" />,
      title: "Home-based Palliative Care & Emotional Support",
      description:
        "Comprehensive at-home care services including pain management, emotional counseling, and family support through trained healthcare professionals.",
    },
    {
      icon: <Users size={28} color="#0052cc" />,
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
              borderRadius: "12px",
              padding: "1.5rem",
              textAlign: "left",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid transparent",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(0, 0, 0, 0.15)";
              e.currentTarget.style.borderColor = "#0052cc";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 14px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.borderColor = "transparent";
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

      {/* Mission Section */}
      <div
        style={{
          background: "#0052cc",
          color: "white",
          borderRadius: "12px",
          padding: "2rem",
          marginTop: "2rem",
          textAlign: "center",
          boxShadow: "0 4px 14px rgba(0, 82, 204, 0.15)",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            margin: "0 0 1rem 0",
          }}
        >
          Our Mission
        </h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto",
            opacity: "0.95",
          }}
        >
          Because healing isn't just about treatment it's about care, dignity,
          and support every step of the way. We believe that every cancer
          patient deserves access to world-class care, regardless of their
          financial situation, location, or background. Through technology and
          human compassion, we're building India's most comprehensive cancer
          care ecosystem.
        </p>
      </div>

      {/* Additional Info Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2.5rem",
          textAlign: "left",
        }}
      >
        <div
          style={{
            background: "#f8f9fa",
            borderRadius: "12px",
            padding: "1.5rem",
            borderLeft: "4px solid #0052cc",
          }}
        >
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
              color: "#222",
              margin: "0 0 0.5rem 0",
            }}
          >
            Patient-Centric Approach
          </h4>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#555",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            Every service is designed with the patient's comfort, dignity, and
            well-being as our top priority.
          </p>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            borderRadius: "12px",
            padding: "1.5rem",
            borderLeft: "4px solid #00a86b",
          }}
        >
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
              color: "#222",
              margin: "0 0 0.5rem 0",
            }}
          >
            Nationwide Network
          </h4>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#555",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            Serving patients across India with partnerships in major cities and
            remote areas alike.
          </p>
        </div>

        <div
          style={{
            background: "#f8f9fa",
            borderRadius: "12px",
            padding: "1.5rem",
            borderLeft: "4px solid #7d4cff",
          }}
        >
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
              color: "#222",
              margin: "0 0 0.5rem 0",
            }}
          >
            24/7 Support
          </h4>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#555",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            Round-the-clock assistance for emergencies, queries, and emotional
            support whenever you need it.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div
        style={{
          marginTop: "3rem",
          padding: "2rem",
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#222",
            margin: "0 0 1rem 0",
          }}
        >
          Ready to Get Started?
        </h3>
        <p
          style={{
            fontSize: "1rem",
            color: "#555",
            marginBottom: "1.5rem",
            lineHeight: "1.5",
            margin: "0 0 1.5rem 0",
          }}
        >
          Contact us today to learn more about how we can support your cancer
          care journey.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#0052cc",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0041a8";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#0052cc";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Get Started Today
          </button>
          <button
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "transparent",
              color: "#0052cc",
              border: "2px solid #0052cc",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0052cc";
              e.target.style.color = "white";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#0052cc";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Speak with Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
