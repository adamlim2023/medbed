import React from "react";

import UserImage1 from "assets/images/users/1.png";
import UserImage2 from "assets/images/users/2.png";
import UserImage3 from "assets/images/users/3.png";
import StarIcon from "assets/images/icons/star.svg";
import QualityIcon from "assets/images/icons/quality.svg";
import VerifiedIcon from "assets/images/icons/verified.svg";
import DollarIcon from "assets/images/icons/dollar.svg";
import TruckIcon from "assets/images/icons/truck.svg";
import VideoImage from "assets/images/video.png";

const Hero = () => {
  const data = [
    { label: "Safety & Quality", icon: QualityIcon },
    { label: "Verified Healthcare", icon: VerifiedIcon },
    { label: "Competitive Price", icon: DollarIcon },
    { label: "Reliable Delivery", icon: TruckIcon },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-14">
      <div className="grid gap-5 lg:gap-8">
        <p className="w-full max-w-[333px] font-bold text-[35px] lg:text-[45px] leading-[45px] lg:leading-[50px]">
          Here Goes a Big Title About Our Medbed
        </p>
        <p className="font-light text-[15px] lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed cididunt
          ut labore et dolore magna aliquaenim ad miniaqu is nostruex ercitation
          ullamco laboris nisi ut aliquip ex ea co mo do consequat loremono
          italianost dolore magna aliqor cididunt ut labore et dolore magna
          aliquaenim ad miniaqu is nostruex ercitation ullamco laboris nisi ut
          aliquip ex ea co mo do consequat loremono italianost dolore magna
          aliqor cididunt ut labore et dolore magna aliquaenim ad miniaqu is
          nisi ut aliq cididunt ut labore et dolore magna
        </p>
        <div className="grid grid-cols-2 gap-x-4 lg:gap-x-10 gap-y-4 lg:gap-y-6">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-3 lg:gap-4">
              <img src={item.icon} className="w-6 max-h-8 lg:w-auto" />
              <span className="font-medium text-xs lg:text-[17px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
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
      </div>
      <div className="w-full max-w-[494px] flex flex-col-reverse lg:flex-row flex-shrink-0 gap-5">
        <div className="w-full lg:w-[88px] flex-shrink-0 grid lg:flex lg:flex-col grid-cols-4 lg:grid-cols-1 gap-3.5">
          <img
            src={VideoImage}
            className="h-[87px] lg:h-[108px] rounded-[14px] opacity-20 hover:opacity-100 transition object-cover cursor-pointer"
          />
          <img
            src={VideoImage}
            className="h-[87px] lg:h-[108px] rounded-[14px] opacity-20 hover:opacity-100 transition object-cover cursor-pointer"
          />
          <img
            src={VideoImage}
            className="h-[87px] lg:h-[108px] rounded-[14px] opacity-20 hover:opacity-100 transition object-cover cursor-pointer"
          />
          <div className="w-full h-full lg:h-[61px] flex justify-center items-center rounded-[14px] bg-[#666666] font-medium text-[17px] lg:text-[21px] text-white">
            +5
          </div>
        </div>
        <img
          src={VideoImage}
          className="w-full h-[336px] lg:h-auto lg:w-20 grow object-cover rounded-[20px] lg:rounded-[27px]"
        />
      </div>
    </div>
  );
};

export default Hero;
