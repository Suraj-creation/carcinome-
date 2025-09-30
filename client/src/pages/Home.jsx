import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChoose from "../components/WhyChoose";
import Oursupport from "../components/Oursupport";
import Awareness from "../components/Awereness";
import AboveFooter from "../components/Abovefooter";
import Footer from "../components/Footer";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      const element = document.getElementById(location.state.section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ServicesSection id="services" />
      <WhyChoose id="why-choose" />
      <Oursupport id="support" />
      <Awareness id="awareness" />
      <AboveFooter id="consultation" />
      <Footer id="contact" />
    </>
  );
}

export default Home;
