import React from "react";
import { Heart } from "lucide-react";

const AboveFooter = () => {
  return (
    <div
      id="contact"
      style={{
        background: "linear-gradient(135deg, #4A6CF7 0%, #6366F1 50%, #7C3AED 100%)",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background blobs */}
      <div style={{
        position: "absolute", top: "-60px", right: "-60px",
        width: "280px", height: "280px", borderRadius: "50%",
        background: "rgba(255,255,255,0.04)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "-40px",
        width: "220px", height: "220px", borderRadius: "50%",
        background: "rgba(255,255,255,0.04)", pointerEvents: "none",
      }} />

      {/* Quote Box */}
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        padding: "36px 32px",
        borderRadius: "20px",
        maxWidth: "840px",
        margin: "0 auto",
        border: "1.5px solid rgba(255, 255, 255, 0.28)",
        backdropFilter: "blur(10px)",
        position: "relative",
      }}>
        {/* Decorative open quote */}
        <div style={{
          position: "absolute", top: "16px", left: "24px",
          fontSize: "5rem", lineHeight: 1, color: "rgba(255,255,255,0.18)",
          fontFamily: "Georgia, serif", fontWeight: 700,
        }}>"</div>

        {/* Heart icon in circle */}
        <div style={{
          width: "64px", height: "64px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.18)",
          border: "1.5px solid rgba(255,255,255,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px auto",
          animation: "heartbeat 2.4s ease-in-out infinite",
        }}>
          <Heart size={28} fill="rgba(255,255,255,0.8)" color="white" />
        </div>

        <style>{`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            14% { transform: scale(1.08); }
            28% { transform: scale(1); }
            42% { transform: scale(1.05); }
            70% { transform: scale(1); }
          }
        `}</style>

        <p style={{
          fontSize: "1.05rem",
          lineHeight: "1.8",
          marginBottom: "18px",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#ffffff",
          position: "relative",
          zIndex: 1,
        }}>
          "Your cancer journey doesn't define you, but how we support you
          through it defines us. At Carcinome, every patient is family, every
          challenge is shared, and every victory is celebrated together."
        </p>
        <p style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "#d6eaff",
          letterSpacing: "0.02em",
        }}>— The Carcinome Team</p>
      </div>
    </div>
  );
};

export default AboveFooter;
