import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.svg";
import SearchIcon from "assets/images/icons/search.svg";
import GlobeIcon from "assets/images/icons/globe.svg";
import MenuIcon from "assets/images/icons/menu.svg";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const items = [
    { id: 1, label: "Our Product", path: "/product" },
    { id: 2, label: "Get In Touch", path: "/contact" },
    { id: 3, label: "Disease", path: "/disease" },
  ];

  return (
    <div className="py-8 lg:py-10 px-6 z-50 relative">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 lg:gap-4">
          <img src={Logo} className="w-[26px] lg:w-auto" alt="logo" />
          <span className="font-title text-[28px] lg:text-[39px] font-bold leading-none">
            MEDBED
          </span>
        </Link>
        <div
          className={`${
            opened
              ? `flex flex-col absolute bg-white top-[92px] left-0 w-full pb-5`
              : `hidden`
          } lg:flex lg:gap-12`}
        >
          {items.map((item) => (
            <Link
              to={item.path}
              className="py-2 lg:py-0 font-medium text-sm uppercase text-center"
              key={item.id}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <img src={SearchIcon} className="cursor-pointer" />
          <div className="flex items-center h-[42px] bg-white rounded-lg px-4 gap-2">
            <img src={GlobeIcon} />
            <span className="font-medium text-sm uppercase">EN</span>
          </div>
        </div>
      </div>
      <img
        src={MenuIcon}
        alt="hamburger"
        className="absolute top-10 right-6 cursor-pointer inline lg:hidden"
        onClick={() => setOpened(!opened)}
      />
    </div>
  );
};

export default Header;
