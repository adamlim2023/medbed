import React, { useRef, useState } from "react";
import Video from "assets/videos/index.mp4";
import PlayIcon from "assets/images/icons/play.svg";

const Hero = () => {
  const videoRef = useRef();
  const [opened, setOpened] = useState(false);

  const handlePlay = () => {
    handleToggleOpen();
    setTimeout(() => {
      videoRef.current.play();
    }, 100);
  };

  const handleToggleOpen = () => setOpened(!opened);

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-[60px]">
        <div className="w-full max-w-full md:max-w-[470px]">
          <p className="w-full max-w-[333px] font-bold text-[35px] lg:text-[45px] leading-[45px] lg:leading-[50px] mb-5 lg:mb-6">
            Here Goes a Big Title About Our Medbed
          </p>
          <p className="font-light text-[15px] lg:text-base mb-5 lg:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            cididunt ut labore et dolore magna aliquaenim ad miniaqu is nostruex
            ercitation ullamco laboris nisi ut aliquip ex ea co cididunt ut
            labore et dolore magna aliquaenim ad miniaqu is nisi ut aliq
            cididunt ut labore et dolore magna
          </p>
          <div className="grid gap-2.5 mb-7 lg:mb-8">
            <div className="flex items-center gap-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
              <span className="font-light text-base">
                Disease Type and Name
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
              <span className="font-light text-base">
                Disease Type and Name
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
              <span className="font-light text-base">
                Disease Type and Name
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
              <span className="font-light text-base">
                Disease Type and Name
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
              <span className="font-light text-base">
                Disease Type and Name
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDD61A]" />
              <span className="font-light text-base">
                Disease Type and Name
              </span>
            </div>
          </div>
          <button className="w-full lg:w-auto h-11 px-11 rounded-[11px] font-medium text-sm bg-gradient-to-br from-[#F7DEE8] via-[#E7E6FC] via-30% via-[#E4F1FE] via-70% to-[#E8EEF3] hover:opacity-50 transition">
            Request a Quotation
          </button>
        </div>
        <div className="w-full md:max-w-[494px] max-w-full h-full object-cover rounded-[27px] overflow-hidden relative">
          <video className="w-full h-full object-cover">
            <source src={Video} type="video/mp4" />
          </video>
          <button
            className="w-[86px] h-[86px] flex items-center justify-center rounded-full border border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-[5px] backdrop-brightness-[1.15] transition hover:opacity-80"
            onClick={handlePlay}
          >
            <div className="w-14 h-14 rounded-full bg-white bg-white/45 flex items-center justify-center">
              <img src={PlayIcon} />
            </div>
          </button>
        </div>
      </div>
      {opened && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-40"
            onClick={handleToggleOpen}
          />
          <video
            className="w-full max-w-5xl object-cover relative z-10"
            play={true}
            ref={videoRef}
            controls
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
};

export default Hero;
