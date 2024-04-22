import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Video from "assets/videos/index.mp4";
import PlayIcon from "assets/images/icons/play.svg";

const About = () => {
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
      <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-14">
        <motion.div
          initial={{ x: -350, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="w-full max-w-[407px] h-[380px] flex-shrink-0 relative rounded-[29px] lg:rounded-[40px] overflow-hidden"
        >
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doiusmodt emporw cididunt ut labore et dolore magna aliquaenim ad
            minim veniam, quis nostruex ercitation ullamco laboris nisi ut
            aliquip ex ea como do consequat loremono ita lianost dolore magna
            aliqu oris nisi ut aliq cididunt ut labore et dolore magna a
            liquaenim ad minim veniam, quis nostruex <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doiusmodt emporw cididunt ut labore et dolore magna aliquaenim ad
            minim veniam, quis nostruex ercitation ullamco laboris nisi ut
            aliquip ex ea como do consequat loremono ita lianost dolore magna
            aliqu oris nisi ut aliq
          </p>
          <button className="w-full lg:w-auto h-11 px-11 rounded-[11px] font-medium text-sm bg-gradient-to-br from-[#F7DEE8] via-[#E7E6FC] via-30% via-[#E4F1FE] via-70% to-[#E8EEF3] hover:opacity-50 transition">
            View Details
          </button>
        </motion.div>
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
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
};

export default About;
