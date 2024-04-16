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
    <div className="flex gap-14">
      <div className="grid gap-8">
        <p className="w-full max-w-[333px] font-bold text-[45px] leading-[50px]">
          Here Goes a Big Title About Our Medbed
        </p>
        <p className="font-light text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed cididunt
          ut labore et dolore magna aliquaenim ad miniaqu is nostruex ercitation
          ullamco laboris nisi ut aliquip ex ea co mo do consequat loremono
          italianost dolore magna aliqor cididunt ut labore et dolore magna
          aliquaenim ad miniaqu is nostruex ercitation ullamco laboris nisi ut
          aliquip ex ea co mo do consequat loremono italianost dolore magna
          aliqor cididunt ut labore et dolore magna aliquaenim ad miniaqu is
          nisi ut aliq cididunt ut labore et dolore magna
        </p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <img src={item.icon} />
              <span className="font-medium text-[17px]">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <div className="flex">
            <img
              src={UserImage1}
              className="w-[60px] h-[60px] border-4 border-white rounded-full z-20"
            />
            <img
              src={UserImage2}
              className="w-[60px] h-[60px] border-4 border-white rounded-full z-10 -ml-5"
            />
            <img
              src={UserImage3}
              className="w-[60px] h-[60px] border-4 border-white rounded-full -ml-5"
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
      <div className="w-full max-w-[494px] flex flex-shrink-0 gap-5">
        <div className="w-[88px] flex-shrink-0 flex flex-col gap-3.5">
          <img
            src={VideoImage}
            className="h-[108px] rounded-[14px] opacity-20 hover:opacity-100 transition object-cover cursor-pointer"
          />
          <img
            src={VideoImage}
            className="h-[108px] rounded-[14px] opacity-20 hover:opacity-100 transition object-cover cursor-pointer"
          />
          <img
            src={VideoImage}
            className="h-[108px] rounded-[14px] opacity-20 hover:opacity-100 transition object-cover cursor-pointer"
          />
          <div className="w-full h-[61px] flex justify-center items-center rounded-[14px] bg-[#666666] font-medium text-[21px] text-white">
            +5
          </div>
        </div>
        <img src={VideoImage} className="w-20 grow object-cover rounded-[27px]" />
      </div>
    </div>
  );
};

export default Hero;