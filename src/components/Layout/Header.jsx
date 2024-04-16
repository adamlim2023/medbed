import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.svg";
import SearchIcon from "assets/images/icons/search.svg";
import GlobeIcon from "assets/images/icons/globe.svg";

const Header = () => {
  const items = [
    { id: 1, label: "Our Product", path: "/product" },
    { id: 2, label: "Get In Touch", path: "/contact" },
  ];

  return (
    <div className="py-10 z-50 relative">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={Logo} alt="logo" />
          <span className="font-title text-[39px] font-bold leading-none">
            MEDBED
          </span>
        </Link>
        <div className="flex gap-12">
          {items.map((item) => (
            <Link
              to={item.path}
              className="font-medium text-sm uppercase"
              key={item.id}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <img src={SearchIcon} className="cursor-pointer" />
          <div className="flex items-center h-[42px] bg-white rounded-lg px-4 gap-2">
            <img src={GlobeIcon} />
            <span className="font-medium text-sm uppercase">EN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
