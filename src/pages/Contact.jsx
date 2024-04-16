import React from "react";
import MapImage from "assets/images/map.png";
import PhoneIcon from "assets/images/icons/phone.svg";
import PaperPlaneIcon from "assets/images/icons/paper-plane.svg";

const Contact = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[34px]">
        <div className="w-full lg:max-w-[625px] flex-shrink-0 rounded-[19px] overflow-hidden relative border border-[#E5E5E5] py-6 p-7 lg:py-7">
          <p className="font-bold text-[25px] mb-1">Get in Touch</p>
          <p className="font-light text-base opacity-50 mb-7">
            We're glad to help anytime
          </p>
          <div className="w-full lg:max-w-[618px] grid lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-8">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-[50px] bg-[#F8F7F6] outline-none px-6 rounded-xl font-medium text-[15px] placeholder:text-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-[50px] bg-[#F8F7F6] outline-none px-6 rounded-xl font-medium text-[15px] placeholder:text-black"
            />
            <textarea
              placeholder="Sed ut perspiciatis unde omn explicabo. Nemo enim ipsam ed quia consequuntur ma gn porro quisquam est, qui doloi d quia noni Sed ut perspiciae Sed ut perspiciatis unde omn porro quisquam est, qui dom Sed ut perspiciatis unde omn d quia noni."
              className="w-full lg:col-span-2 h-[260px] bg-[#F8F7F6] outline-none px-6 py-3 rounded-xl text-[15px] leading-[25px] resize-none"
            />
          </div>
          <button className="w-full h-11 rounded-[11px] bg-gradient-to-br from-[#F7DEE8] via-[#E7E6FC] via-30% via-[#E4F1FE] via-70% to-[#E8EEF3] font-medium text-sm">
            Send Request
          </button>
        </div>
        <div className="w-full grid gap-[22px] lg:gap-[30px]">
          <div className="grid gap-3.5 px-8 py-6 rounded-[19px] border border-[#E5E5E5]">
            <div className="flex items-center gap-6">
              <img src={PhoneIcon} />
              <span className="font-regular text-sm">+61 413 352 526</span>
            </div>
            <div className="flex items-center gap-6">
              <img src={PhoneIcon} />
              <span className="font-regular text-sm">+61 413 352 526</span>
            </div>
            <div className="flex items-center gap-6">
              <img src={PaperPlaneIcon} />
              <span className="font-regular text-sm">info@medbed.com.au</span>
            </div>
          </div>
          <img src={MapImage} className="w-full rounded-[19px]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
