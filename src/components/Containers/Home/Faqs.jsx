import React, { useState } from "react";
import { motion } from "framer-motion";

const Collapse = ({ question, answer }) => {
  const [opened, setOpened] = useState(true);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "backOut" }}
    >
      <div className="flex items-center gap-4 bg-[#F2F2F2] px-[18px] lg:px-[30px] py-3 lg:py-3.5 rounded-[11px]">
        <p className="w-full font-regular text-base lg:text-[17px]">
          {question}
        </p>
        <button
          className="w-9 h-9 flex-shrink-0 rounded-[11px] bg-[#303230] text-white text-2xl"
          onClick={() => setOpened(!opened)}
        >
          {opened ? `-` : `+`}
        </button>
      </div>
      {opened && (
        <div className="font-light text-[13px] lg:text-[17px] opacity-50 py-4">
          {answer}
        </div>
      )}
    </motion.div>
  );
};

const Faqs = ({ title, items }) => {
  return (
    <div className="flex flex-col items-center gap-[42px]">
      <motion.p
        initial={{ x: -350, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "backOut" }}
        className="font-bold text-[25px] lg:text-4xl lg:text-center"
      >
        {title}
      </motion.p>
      <div className="w-full grid gap-1.5 lg:gap-3">
        {items?.map((faq) => (
          <div key={faq.id}>
            <Collapse {...faq} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
