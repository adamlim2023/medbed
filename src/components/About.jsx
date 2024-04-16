import React from "react";
import { motion } from "framer-motion";
import VideoImage from "assets/images/video.png";
import PlayIcon from "assets/images/play.svg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-14">
      <motion.div
        initial={{ x: -350, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "backOut" }}
        className="w-full max-w-[407px] h-[380px] flex-shrink-0 relative rounded-[29px] lg:rounded-[40px] overflow-hidden"
      >
        <img src={VideoImage} className="w-full h-full object-cover" />
        <img
          src={PlayIcon}
          className="absolute top-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer"
        />
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "backOut", delay: 0.5 }}
      >
        <p className="font-bold text-[25px] lg:text-4xl mb-3.5 lg:mb-6">
          About Medbed
        </p>
        <p className="font-light text-[15px] lg:text-sm mb-9 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doiusmodt
          emporw cididunt ut labore et dolore magna aliquaenim ad minim veniam,
          quis nostruex ercitation ullamco laboris nisi ut aliquip ex ea como do
          consequat loremono ita lianost dolore magna aliqu oris nisi ut aliq
          cididunt ut labore et dolore magna a liquaenim ad minim veniam, quis
          nostruex <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doiusmodt
          emporw cididunt ut labore et dolore magna aliquaenim ad minim veniam,
          quis nostruex ercitation ullamco laboris nisi ut aliquip ex ea como do
          consequat loremono ita lianost dolore magna aliqu oris nisi ut aliq
        </p>
        <button className="w-full lg:w-auto h-11 px-11 rounded-[11px] font-medium text-sm bg-gradient-to-br from-[#F7DEE8] via-[#E7E6FC] via-30% via-[#E4F1FE] via-70% to-[#E8EEF3]">
          View Details
        </button>
      </motion.div>
    </div>
  );
};

export default About;
