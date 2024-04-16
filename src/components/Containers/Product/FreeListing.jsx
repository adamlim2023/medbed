import React from "react";
import BgImage from "assets/images/bg.png";
import CommunityIcon from "assets/images/icons/community.svg";
import LayerIcon from "assets/images/icons/layer.svg";
import RankingIcon from "assets/images/icons/ranking.svg";

const FreeListing = () => {
  const data = [
    {
      title: "Lorem Ipsum Dolor Manga",
      description:
        "We're audiologists, not lead generators. We believe in building a community where expertise is shared, not sold",
      icon: CommunityIcon,
    },
    {
      title: "Lorem Ipsum Dolor Manga",
      description:
        "We're audiologists, not lead generators. We believe in building a community where expertise is shared, not sold",
      icon: LayerIcon,
    },
    {
      title: "Lorem Ipsum Dolor Manga",
      description:
        "We're audiologists, not lead generators. We believe in building a community where expertise is shared, not sold",
      icon: RankingIcon,
    },
  ];
  return (
    <div className="p-16 pt-11 rounded-[27px] relative overflow-hidden text-white">
      <span className="font-title font-bold text-[133px] opacity-70 absolute top-8 right-10">
        *
      </span>
      <span className="font-title font-bold text-[464px] leading-none absolute -bottom-[370px] -right-6">*</span>
      <img
        src={BgImage}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <p className="w-full max-w-[414px] font-bold text-[39px] mb-8">Why Are Our Listings Free?</p>
      <div className="grid grid-cols-3 gap-[60px] mb-16">
        {data.map((item, i) => (
          <div key={i}>
            <img src={item.icon} className="mb-5" />
            <p className="font-medium text-[15px] mb-2.5">{item.title}</p>
            <p className="font-light text-sm text-[#E5E5E5]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <button className="h-11 px-6 font-medium text-sm text-white rounded-[11px] bg-[#FDD61A]">
        Request a Quotation
      </button>
    </div>
  );
};

export default FreeListing;
