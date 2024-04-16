import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.svg";

const Footer = () => {
  const items = [
    { id: 1, label: "Cookie Policy", path: "/" },
    { id: 2, label: "Privacy", path: "/" },
    { id: 3, label: "Terms of Service", path: "/" },
  ];

  return (
    <div className="pt-12 pb-8">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center gap-5">
            <img src={Logo} className="w-8" alt="logo" />
            <span className="font-title text-[33px] font-bold leading-none">
              MEDBED
            </span>
          </div>
          <span className="w-[1px] h-[18px] bg-[#8F8E8C] ml-9 mr-[75px]"></span>
          <div className="flex gap-4">
            {items.map((item) => (
              <Link
                to={item.path}
                className="font-regular text-base text-[#8F8E8C]"
                key={item.id}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="font-medium text-base text-[#8F8E8C]">
          © 2024 · Medbed
        </div>
      </div>
    </div>
  );
};

export default Footer;
