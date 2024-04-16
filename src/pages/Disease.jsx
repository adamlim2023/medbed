import React from "react";
import ContactForm from "components/ContactForm";
import HowItWorks from "components/HowItWorks";
import Hero from "components/Containers/Disease/Hero";
import Features from "components/Containers/Disease/Features";

const Disease = () => {
  return (
    <div className="w-full max-w-5xl grid gap-[60px] mx-auto grid gap-16">
      <Hero />
      <Features />
      <HowItWorks />
      <ContactForm />
    </div>
  );
};

export default Disease;
