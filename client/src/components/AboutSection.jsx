import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";
import { Stethoscope, Building2, Heart, Clock } from "lucide-react";

// ─── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(target);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}

// ─── Individual stat card ─────────────────────────────────────────────────────
const StatCard = ({ target, prefix = "", suffix = "", label, Icon }) => {
  const { ref, value } = useCountUp(target);

  return (
    <div className="stat-card" ref={ref}>
      {Icon && (
        <div className="stat-icon">
          <Icon size={26} strokeWidth={1.8} />
        </div>
      )}
      <h3>{prefix}{value}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-eyebrow"><span>Our Impact So Far</span></div>
      <div className="stats-grid">
        <StatCard target={50} suffix="+" label="Cancer Specialists" Icon={Stethoscope} />
        <StatCard target={10} suffix="+" label="Partner Hospitals" Icon={Building2} />
        <StatCard target={100} suffix="+" label="Families Supported" Icon={Heart} />
        <StatCard target={24} suffix="/7" label="Expert Support" Icon={Clock} />
      </div>
    </section>
  );
};

export default AboutSection;
