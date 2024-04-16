import React from "react";
import BgImage from "assets/images/disease.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flew-row gap-5 lg:gap-[60px]">
      <div>
        <p className="w-full max-w-[333px] font-bold text-[35px] lg:text-[45px] leading-[45px] lg:leading-[50px] mb-5 lg:mb-6">
          Here Goes a Big Title About Our Medbed
        </p>
        <p className="font-light text-[15px] lg:text-base mb-5 lg:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed cididunt
          ut labore et dolore magna aliquaenim ad miniaqu is nostruex ercitation
          ullamco laboris nisi ut aliquip ex ea co cididunt ut labore et dolore
          magna aliquaenim ad miniaqu is nisi ut aliq cididunt ut labore et
          dolore magna
        </p>
        <div className="grid gap-2.5 mb-7 lg:mb-8">
          <div className="flex items-center gap-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
            <span className="font-light text-base">Disease Type and Name</span>
          </div>
          <div className="flex items-center gap-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
            <span className="font-light text-base">Disease Type and Name</span>
          </div>
          <div className="flex items-center gap-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
            <span className="font-light text-base">Disease Type and Name</span>
          </div>
          <div className="flex items-center gap-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
            <span className="font-light text-base">Disease Type and Name</span>
          </div>
          <div className="flex items-center gap-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
            <span className="font-light text-base">Disease Type and Name</span>
          </div>
          <div className="flex items-center gap-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
            <span className="font-light text-base">Disease Type and Name</span>
          </div>
        </div>
        <button className="w-full lg:w-auto h-11 px-11 rounded-[11px] font-medium text-sm bg-gradient-to-br from-[#F7DEE8] via-[#E7E6FC] via-30% via-[#E4F1FE] via-70% to-[#E8EEF3]">
          Request a Quotation
        </button>
      </div>
      <img src={BgImage} className="w-full max-w-[494pxs]" />
    </div>
  );
};

export default Hero;
