import React from "react";
import ContactForm from "components/ContactForm";
import HowItWorks from "components/HowItWorks";
import Hero from "components/Containers/Disease/Hero";
import Features from "components/Containers/Disease/Features";

const Disease = () => {
  return (
    <div className="px-6">
      <div className="w-full max-w-5xl mx-auto grid gap-12 lg:gap-16">
        <Hero />
        <Features /> 
        <HowItWorks />
        <ContactForm />
      </div>
    </div>
  );
};

export default Disease;
