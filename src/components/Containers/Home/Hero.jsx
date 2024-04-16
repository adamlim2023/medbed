import React from "react";
import { motion } from "framer-motion";
import UserImage1 from "assets/images/users/1.png";
import UserImage2 from "assets/images/users/2.png";
import UserImage3 from "assets/images/users/3.png";
import StarIcon from "assets/images/icons/star.svg";
import BedImage from "assets/images/bed.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-[#F7DEE8] via-[#E7E6FC] via-30% via-[#E4F1FE] via-70% to-[#E8EEF3] -mt-[124px] rounded-b-[33px] lg:rounded-b-[48px] pt-36 lg:pt-44 pb-[75px] lg:pb-[88px]">
      <div className="w-full max-w-5xl mx-auto relative px-6">
        <motion.div
          initial={{ x: -350, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="w-full max-w-[460px] grid gap-9 lg:gap-8"
        >
          <p className="font-mellon font-bold text-[150px] leading-[120px] lg:text-[198px] text-white lg:leading-[170px] mb-10 lg:mb-0">
            MEDICAL SMART BED
          </p>
          <div className="flex items-center gap-5">
            <div className="flex">
              <img
                src={UserImage1}
                className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] border-4 border-white rounded-full z-20"
              />
              <img
                src={UserImage2}
                className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] border-4 border-white rounded-full z-10 -ml-5"
              />
              <img
                src={UserImage3}
                className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] border-4 border-white rounded-full -ml-5"
              />
            </div>
            <div className="grid gap-1">
              <div className="flex gap-4">
                <div className="flex gap-3.5">
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                  <img src={StarIcon} />
                </div>
                <span className="font-semibold text-[15px]">5.0</span>
              </div>
              <span className="text-sm">10K+ Satisfied Users</span>
            </div>
          </div>
          <p className="font-light text-[15px] lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
            eiusmod tempor incididunt ut labore edo lore magna aliqua. Ut enim
            ad minim veniam, quisn ostrud exercitation
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut", delay: 0.5 }}
          className="absolute hidden lg:inline -right-24 top-28"
        >
          <img
            src={BedImage}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
