import React from "react";
import { motion } from "framer-motion";
import ContactImage from "assets/images/contact.png";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ x: -350, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "backOut" }}
      className="rounded-[27px] overflow-hidden relative"
    >
      <img
        src={ContactImage}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col items-center pt-[50px] pb-[68px] lg:py-[70px] px-8">
        <p className="font-bold text-2xl lg:text-[30px] text-white text-center mb-4 lg:mb-1.5">
          Get in Touch
        </p>
        <p className="font-regular text-sm lg:text-lg text-white text-center mb-10 lg:mb-[52px]">
          Fill the form below and we will reply as soon as possible!
        </p>
        <div className="w-full max-w-[618px] grid lg:grid-cols-2 gap-4 lg:gap-6 mb-8">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-[46px] bg-white outline-none px-6 rounded-xl text-sm"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-[46px] bg-white outline-none px-6 rounded-xl text-sm"
          />
          <textarea
            placeholder="Let us know your message .."
            className="w-full lg:col-span-2 h-40 bg-white outline-none px-6 py-3 rounded-xl text-sm resize-none"
          />
        </div>
        <button className="w-full lg:w-auto h-11 rounded-[11px] bg-[#FDD61A] px-9 font-medium text-sm text-white">
          Send Message
        </button>
      </div>
    </motion.div>
  );
};

export default ContactForm;
