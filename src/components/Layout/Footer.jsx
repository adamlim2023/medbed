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
    <div className="pt-12 pb-8 px-6">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex w-full flex-col lg:flex-row lg:items-center gap-3 lg:gap-8">
          <div className="flex items-center">
            <div className="flex items-center gap-3 lg:gap-5">
              <img src={Logo} className="w-7 lg:w-8" alt="logo" />
              <span className="font-title text-[27px] lg:text-[33px] font-bold leading-none">
                MEDBED
              </span>
            </div>
            <span className="w-[1px] h-[18px] bg-[#8F8E8C] opacity-40 ml-9 mr-[75px]"></span>
            <div className="lg:hidden font-medium text-[13px] text-[#8F8E8C] flex-shrink-0">
              © 2024 · Medbed
            </div>
          </div>
          <div className="w-full lg:w-auto flex justify-between gap-4">
            {items.map((item) => (
              <Link
                to={item.path}
                className="font-regular text-[11px] lg:text-base text-[#8F8E8C]"
                key={item.id}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:inline font-medium text-base text-[#8F8E8C] flex-shrink-0">
          © 2024 · Medbed
        </div>
      </div>
    </div>
  );
};

export default Footer;
