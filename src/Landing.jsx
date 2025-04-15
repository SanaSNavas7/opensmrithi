import React from "react";
import Hero from "./pages/shared/Hero";
import Features from "./pages/shared/Features";
import Blog from "./pages/shared/TechnologyOverview";
import Testimonial from "./pages/shared/Testimonial";
import CallToAction from "./pages/shared/CallToAction";
import Header from "./pages/shared/Headerc";
import Footer from "./pages/shared/Footerc";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Blog />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Landing;
