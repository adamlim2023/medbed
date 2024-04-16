import React from "react";
import FeatureImage1 from "assets/images/features/1.png";
import FeatureImage2 from "assets/images/features/2.png";
import FeatureImage3 from "assets/images/features/3.png";
import FeatureImage4 from "assets/images/features/4.png";

const Features = () => {
  const data = [
    {
      title: "Lorem Ipsum Dolor Nemurona Felizo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddiw od tempor incididunt ut labore et dolore magna aliqua. Ut enie im veniam, quis nostrud exercitation ullamco.",
      image: FeatureImage1,
    },
    {
      title: "Lorem Ipsum Dolor Nemurona Felizo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddiw od tempor incididunt ut labore et dolore magna aliqua. Ut enie im veniam, quis nostrud exercitation ullamco.",
      image: FeatureImage2,
    },
    {
      title: "Lorem Ipsum Dolor Nemurona Felizo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddiw od tempor incididunt ut labore et dolore magna aliqua. Ut enie im veniam, quis nostrud exercitation ullamco.",
      image: FeatureImage3,
    },
    {
      title: "Lorem Ipsum Dolor Nemurona Felizo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddiw od tempor incididunt ut labore et dolore magna aliqua. Ut enie im veniam, quis nostrud exercitation ullamco.",
      image: FeatureImage4,
    },
  ];

  return (
    <div className="grid gap-8">
      <p className="font-bold text-[25px] lg:text-4xl">Features Overview</p>
      <div className="grid lg:grid-cols-2 gap-[30px] lg:gap-7">
        {data.map((feature, i) => (
          <div key={i} className="grid gap-5 rounded-[19px]">
            <img src={feature.image} className="rounded-[19px]" />
            <div className="grid gap-2 lg:gap-3">
              <p className="font-semibold text-xl lg:text-2xl">
                {feature.title}
              </p>
              <p className="font-light text-[15px] lg:text-base">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
