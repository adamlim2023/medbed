import React from "react";
import QuestionIcon from "assets/images/icons/question.svg";
import DoseIcon from "assets/images/icons/dose.svg";
import CardIcon from "assets/images/icons/card.svg";
import CartIcon from "assets/images/icons/cart.svg";

const HowItWorks = () => {
  const items = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore mar isi ut aliquip ex ea commodo consequat.",
      icon: QuestionIcon,
    },
    {
      id: 2,
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore mar isi ut aliquip ex ea commodo consequat.",
      icon: DoseIcon,
    },
    {
      id: 3,
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore mar isi ut aliquip ex ea commodo consequat.",
      icon: CardIcon,
    },
    {
      id: 4,
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore mar isi ut aliquip ex ea commodo consequat.",
      icon: CartIcon,
    },
  ];
  return (
    <div className="grid gap-6">
      <p className="font-bold text-[25px] lg:text-4xl">How it Works</p>
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
        {items.map((item) => (
          <div
            className="flex p-5 border border-[#E5E5E5] rounded-[19px] gap-5 lg:gap-7"
            key={item.id}
          >
            <div className="w-9 lg:w-14 flex-shrink-0 rounded-[10px] lg:rounded-[14px] bg-[#F8F7F6] flex items-center justify-center">
              <img src={item.icon} className="w-[18px] lg:w-auto" />
            </div>
            <div className="grid gap-2 lg:gap-2.5">
              <p className="font-semibold text-[15px] lg:text-base">
                {item.title}
              </p>
              <p className="font-light text-[13px] lg:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
