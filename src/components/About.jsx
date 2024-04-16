import React from "react";
import VideoImage from "assets/images/video.png";
import PlayIcon from "assets/images/play.svg";

const About = () => {
  return (
    <div className="flex items-center gap-14">
      <div className="w-full max-w-[407px] h-[380px] flex-shrink-0 relative rounded-[40px] overflow-hidden">
        <img src={VideoImage} className="w-full h-full object-cover" />
        <img
          src={PlayIcon}
          className="absolute top-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer"
        />
      </div>
      <div>
        <p className="font-bold text-4xl mb-6">About Medbed</p>
        <p className="font-light text-sm mb-9 leading-6">
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
        <button className="h-11 px-11 rounded-[11px] font-medium text-sm bg-gradient-to-br from-[#F7DEE8] via-[#E7E6FC] via-30% via-[#E4F1FE] via-70% to-[#E8EEF3]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default About;
