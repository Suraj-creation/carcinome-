import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CarcinomeContent from "../components/CarcinomeContent";
import AboveFooter from "../components/Abovefooter";
import Footer from "../components/Footer";
import LiveAssistBot from "../components/LiveAssistBot";



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
      <CarcinomeContent />
      <AboveFooter id="consultation" />
      <Footer id="contact" />
      <LiveAssistBot />
    </>
  );
}

export default Home;
