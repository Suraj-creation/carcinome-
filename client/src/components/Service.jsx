import React from "react";
import "./Service.css";
import {
  Briefcase,
  Home,
  Clock,
  CheckCircle,
  Mail,
  DollarSign,
  Ambulance,
  Building,
  Heart,
  FlaskRoundIcon as Flask,
  FileText,
  Users,
  ArrowRight,
} from "lucide-react";

import IMG_HOSPITAL_TIEUPS from "../assets/6.png";
import IMG_HOME_CARE from "../assets/4.png";
import IMG_AMBULANCE from "../assets/6.png";
import IMG_ACCOMMODATION from "../assets/6.png";
import IMG_FINANCIAL from "../assets/6.png";
import IMG_CLINICAL_TRIALS from "../assets/6.png";
import IMG_GOVERNMENT from "../assets/6.png";
import IMG_SECOND_OPINION from "../assets/6.png";

// ─── Reusable Service Card ───
const ServiceCard = ({ number, image, imageAlt, title, subtitle, description, features, actionLabel, ActionIcon, reverse }) => (
  <div className={`svc-card ${reverse ? "svc-card-reverse" : ""}`}>
    <div className="svc-card-image-wrapper">
      <img src={image} alt={imageAlt} className="svc-card-image" />
    </div>
    <div className="svc-card-content">
      <div className="svc-card-tag">{number}</div>
      <h3 className="svc-card-title">{title}</h3>
      <p className="svc-card-subtitle">{subtitle}</p>
      <p className="svc-card-description">{description}</p>
      <div className="svc-features-box">
        <p className="svc-features-title">Key Benefits</p>
        <ul className="svc-benefit-list">
          {features.map((f, i) => (
            <li key={i} className="svc-benefit-item">
              <CheckCircle className="svc-benefit-icon" />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <a href="#connect" className="svc-action-btn">
        {actionLabel} {ActionIcon && <ActionIcon size={15} />}
      </a>
    </div>
  </div>
);

const Service = () => {
  return (
    <div className="svc-page">
      {/* ─── Hero ─── */}
      <div className="svc-hero">
        <div className="svc-hero-tag">
          <Briefcase size={13} />
          Trusted by 50K+ Cancer Patients
        </div>
        <h1 className="svc-hero-title">
          Comprehensive Cancer Care<br />
          at Every Point in Your Journey
        </h1>
        <p className="svc-hero-subtitle">
          From diagnosis to recovery, Carcinome ensures seamless, affordable,
          and compassionate support for patients and families. Your healing
          journey deserves nothing less than excellence.
        </p>
        <div className="svc-hero-buttons">
          <a href="#start" className="svc-hero-btn svc-hero-btn-primary">
            <Clock size={15} /> Start Your Journey Today
          </a>
          <a href="#support" className="svc-hero-btn svc-hero-btn-secondary">
            <Mail size={15} /> 24/7 Emergency Support
          </a>
        </div>
      </div>

      {/* ─── Pillars Intro ─── */}
      <div className="svc-pillars-intro">
        <div className="svc-pillars-eyebrow">Eight Core Services</div>
        <h2 className="svc-pillars-title">Eight Pillars of Comprehensive Cancer Care</h2>
        <p className="svc-pillars-subtitle">
          Every service is designed with one goal: ensuring no cancer patient
          fights alone. From world-class medical access to emotional support,
          we're with you every step of the way.
        </p>
      </div>

      {/* ─── Service Pillars ─── */}
      <div className="svc-section">
        <ServiceCard
          number="1"
          image={IMG_HOSPITAL_TIEUPS}
          imageAlt="Hospital staff moving a patient in a hallway"
          title="Premium Hospital Tie-Ups & Priority Access"
          subtitle="Skip the waiting lists. Get priority access to India's top cancer hospitals through our strategic partnerships."
          description="Your battle against cancer deserves the finest weapons. Carcinome has forged strategic MOUs with India's most prestigious cancer hospitals, including Tata Memorial, AIMS, Apollo Cancer Centers, and 200+ leading oncology facilities nationwide. Our integrated referral dashboard eliminates the agony of endless waiting lists, ensuring you get the life-saving treatment you need when every moment counts."
          features={[
            "Minimal waiting time for diagnostic consultations across 200+ partner hospitals",
            "Priority admission for surgery, chemotherapy, and radiation therapy",
            "Real-time treatment updates sent directly to family members",
            "End-to-end care coordinator and transparent billing with no hidden charges",
          ]}
          actionLabel="Find Partner Hospitals Near You"
          ActionIcon={ArrowRight}
          reverse={false}
        />

        <ServiceCard
          number="2"
          image={IMG_HOME_CARE}
          imageAlt="Nurse smiling at the camera in a home setting"
          title="Compassionate Home & Palliative Care"
          subtitle="Bring hospital-grade care to the comfort of your home with certified nursing and palliative specialists."
          description="Home is where healing happens best. Through our partnership with Pallium India and certified nursing bureaus, we bring world-class cancer care directly to your doorstep. Our compassionate care team understands that recovery isn't just about medicine – it's about dignity, comfort, and keeping families together during the most challenging times."
          features={[
            "Board-certified oncology nurses available 24/7",
            "Advanced pain management for maximum comfort",
            "At-home chemotherapy & infusion with monitoring",
            "Emotional support and caregiver training",
          ]}
          actionLabel="Request Home Care Support"
          ActionIcon={Home}
          reverse={true}
        />

        <ServiceCard
          number="3"
          image={IMG_AMBULANCE}
          imageAlt="Ambulance with medical staff"
          title="24/7 Emergency & Medical Transport"
          subtitle="Where every second matters, our 24/7 ambulance network ensures rapid, safe transport with ICU-equipped vehicles."
          description="In cancer emergencies, every second can be the difference between life and hope. Our centralized ambulance network spans across India, featuring road, rail, and air ambulances equipped with life-saving ICU facilities. Our partnerships with trusted providers ensure that distance never becomes a barrier to receiving critical care."
          features={[
            "ICU equipment: ventilators, monitors, emergency meds",
            "Air ambulance for critical inter-city transfers",
            "Wheelchair-friendly vehicles for routine visits",
            "Direct insurance billing to avoid upfront payment",
          ]}
          actionLabel="Book Emergency Ambulance"
          ActionIcon={Ambulance}
          reverse={false}
        />

        <ServiceCard
          number="4"
          image={IMG_ACCOMMODATION}
          imageAlt="Comfortable accommodation room"
          title="Budget-Friendly Accommodation Near Hospitals"
          subtitle="Quality accommodation shouldn't drain your treatment budget. Find verified, affordable stays near top hospitals."
          description="Cancer treatment often means long stays away from home, and accommodation costs can quickly overwhelm families already facing financial strain. Carcinome has curated a network of budget-friendly, hygiene-certified stays within walking distance of major cancer hospitals."
          features={[
            "Caregiver-friendly facilities & background screening",
            "24/7 power backup & Wi-Fi hospital shuttle services",
            "Smooth discharge coordination with hospital teams",
            "Wheelchair-accessible rooms and bathrooms",
          ]}
          actionLabel="Find Affordable Stays"
          ActionIcon={Building}
          reverse={true}
        />

        <ServiceCard
          number="5"
          image={IMG_FINANCIAL}
          imageAlt="Financial assistance and crowdfunding"
          title="Comprehensive Financial Assistance & Crowdfunding"
          subtitle="Don't let financial barriers stop your fight. Access multiple funding sources and create compelling campaigns."
          description="No family should have to choose between life-saving treatment and financial security. Carcinome's financial assistance program connects you with multiple funding sources including crowdfunding campaigns and government initiatives."
          features={[
            "Campaigns across various crowdfunding & social platforms",
            "80G tax certificates and real-time donation tracking",
            "Post-treatment financial counseling",
          ]}
          actionLabel="Apply for Financial Aid"
          ActionIcon={DollarSign}
          reverse={false}
        />

        <ServiceCard
          number="6"
          image={IMG_CLINICAL_TRIALS}
          imageAlt="Clinical trials and research"
          title="Access to Cutting-Edge Clinical Trials"
          subtitle="When standard treatments aren't enough, clinical trials offer hope. Get access to tomorrow's cures today."
          description="Hope doesn't end when conventional treatments reach their limits. Carcinome opens doors to groundbreaking clinical trials across India and internationally, connecting you with experimental therapies that could be the key to your recovery."
          features={[
            "Immunotherapy, targeted therapy, CAR-T options",
            "International PI second opinions before enrollment",
            "Travel & accommodation support if out-of-city",
            "Regular safety assessments and monitoring",
          ]}
          actionLabel="Check Trial Eligibility"
          ActionIcon={Flask}
          reverse={true}
        />

        <ServiceCard
          number="7"
          image={IMG_GOVERNMENT}
          imageAlt="Government scheme support"
          title="Government Scheme Navigation & Support"
          subtitle="Navigate complex government healthcare schemes effortlessly. Get maximum benefits with our expert guidance."
          description="Government healthcare schemes can be lifesavers, but navigating the bureaucratic maze often feels impossible when you're fighting cancer. Carcinome's dedicated government scheme specialists transform this complexity into simplicity."
          features={[
            "Application completion within 7 days",
            "High approval rates with expert guidance",
            "State-wise scheme mapping across 28 states",
            "Retroactive claim filing for past treatments",
          ]}
          actionLabel="Explore Government Schemes"
          ActionIcon={FileText}
          reverse={false}
        />

        <ServiceCard
          number="8"
          image={IMG_SECOND_OPINION}
          imageAlt="Digital second opinion service"
          title="Digital Second Opinion Concierge"
          subtitle="Get world-class oncology expertise from the comfort of your home with our digital second opinion service."
          description="Distance and logistics should never be barriers to accessing the best medical minds. Our Digital Second Opinion Concierge connects you with leading oncologists from premier institutions worldwide, ensuring you have all the information needed to make confident treatment decisions."
          features={[
            "Oncologists from MD Anderson, Mayo Clinic & more",
            "Complete medical record digitization and submission",
            "Detailed written report with treatment recommendations",
            "Follow-up consultation included in the service",
          ]}
          actionLabel="Request Second Opinion"
          ActionIcon={Users}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Service;
