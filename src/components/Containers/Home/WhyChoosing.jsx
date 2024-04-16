import React from "react";
import ArrowRightIcon from "assets/images/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const WhyChoosing = () => {
  const items = [
    {
      id: 1,
      title: "Catchy Title",
      description:
        "Lorem ipsum dolor sit amet sectetur adipiscing elit, sew por incididunt",
      path: "/",
    },
    {
      id: 2,
      title: "Catchy Title",
      description:
        "Lorem ipsum dolor sit amet sectetur adipiscing elit, sew por incididunt",
      path: "/",
    },
    {
      id: 3,
      title: "Catchy Title",
      description:
        "Lorem ipsum dolor sit amet sectetur adipiscing elit, sew por incididunt",
      path: "/",
    },
  ];
  return (
    <div>
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center gap-[30px] lg:gap-[122px]">
        <p className="w-full lg:max-w-[177px] font-bold text-[25px] lg:text-4xl">
          Why Choosing Medbed
        </p>
        <div className="grid lg:grid-cols-3 gap-7 lg:gap-14">
          {items.map((item) => (
            <div key={item.id} className="grid gap-2.5 lg:gap-[18px]">
              <p className="font-semibold text-[17px] lg:text-xl">{item.title}</p>
              <p className="font-light text-[13px] lg:text-[15px]">{item.description}</p>
              <Link className="flex gap-2" to={item.path}>
                <span className="font-medium text-[13px]">More Info</span>
                <img src={ArrowRightIcon} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoosing;
