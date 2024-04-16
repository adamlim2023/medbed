import React from "react";
import ContactImage from "assets/images/contact.png";

const ContactForm = () => {
  return (
    <div className="rounded-[27px] overflow-hidden relative">
      <img
        src={ContactImage}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col items-center py-[70px] px-8">
        <p className="font-bold text-[30px] text-white text-center mb-1.5">
          Get in Touch
        </p>
        <p className="font-regular text-lg text-white text-center mb-[52px]">
          Fill the form below and we will reply as soon as possible!
        </p>
        <div className="w-full max-w-[618px] grid grid-cols-2 gap-6 mb-8">
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
            className="w-full col-span-2 h-40 bg-white outline-none px-6 py-3 rounded-xl text-sm resize-none"
          />
        </div>
        <button className="h-11 rounded-[11px] bg-[#FDD61A] px-9 font-medium text-sm text-white">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
