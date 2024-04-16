import React from "react";

import Hero from "components/Containers/Product/Hero";
import About from "components/About";
import FreeListing from "components/Containers/Product/FreeListing";
import HowItWorks from "components/HowItWorks";
import ContactForm from "components/ContactForm";

const Product = () => {
  return (
    <div className="w-full max-w-5xl grid gap-[60px] mx-auto grid gap-12 lg:gap-16 px-6">
      <Hero />
      <FreeListing />
      <HowItWorks />
      <About />
      <ContactForm />
    </div>
  );
};

export default Product;
