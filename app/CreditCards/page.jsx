"use client";

import { assets } from "@/assets";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    id: 1,
    balance: "$5,756",
    holder: "Eddy Cusauma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    logo: assets.white,
    chip: assets.ChipCard,
    backgroundColour: "bg-gradient-to-r from-[#1f1c49] to-black text-white ",
    colour:
      " border-t border-[rgba(255,255,255,0.15)] bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0)] flex justify-between items-center",
  },
  {
    id: 2,
    balance: "$5,756",
    holder: "Eddy Cusauma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    logo: assets.dark,
    chip: assets.ChipCardDark,
    backgroundColour: "bg-white text-black ",
    balanceColor: "text-[#718EBF]",
    colour: "  border-t flex justify-between items-center",
  },
  {
    id: 3,
    balance: "$8,940",
    holder: "Jane Smith",
    validThru: "05/26",
    cardNumber: "9876 **** **** 5432",
    logo: assets.white,
    chip: assets.ChipCard,
    backgroundColour: "bg-gradient-to-r from-[#1f1c49] to-black text-white ",
    colour:
      " border-t border-[rgba(255,255,255,0.15)] bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0)] flex justify-between items-center",
  },
  {
    id: 4,
    balance: "$1,120",
    holder: "Mike Ross",
    validThru: "11/23",
    cardNumber: "1111 **** **** 9999",
    logo: assets.dark,
    chip: assets.ChipCardDark,
    backgroundColour: "bg-white text-black ",
    balanceColor: "text-[#718EBF]",
    colour: "  border-t flex justify-between items-center",
  },
];

const CreditCards = () => {
  const [showAll, setShowAll] = useState(false);
  const [triger, setTriger] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between font-bold items-center ">
        <h2 className="text-lg ">MyCredit Cards</h2>
        <button
          className=" cursor-pointer border-none"
          onClick={() => setShowAll(!showAll)}
        >
          See All
        </button>
      </div>
      <div
        className={`flex justify-between gap-2 ${
          triger ? "scrollbar-hide" : "overflow-x-auto"
        } md:scrollbar-hide overflow-x-hidden `}
      >
        {cards.slice(0, showAll ? 4 : 2).map((card) => (
          <div
            key={card.id}
            className={`${card.backgroundColour} rounded-3xl border-none h-60 `}
          >
            <div className=" p-4  w-[280px] flex flex-col shadow-sm">
              <div className="flex p-2 justify-between items-center">
                <div className="grid">
                  <span className={` ${card.balanceColor} text-xs `}>
                    Balance
                  </span>
                  <span className="text-lg font-bold">{card.balance}</span>
                </div>
                <div>
                  <Image
                    width={40}
                    height={40}
                    src={card.chip}
                    alt="chipCard"
                  />
                </div>
              </div>

              <div className="flex p-2 justify-between items-center text-sm">
                <div>
                  <p className={` ${card.balanceColor}  text-xs`}>
                    CARD HOLDER
                  </p>
                  <p className="text-base">{card.holder}</p>
                </div>
                <div className="text-right">
                  <p className={` ${card.balanceColor}  text-xs`}>VALID THRU</p>
                  <p className="text-base">{card.validThru}</p>
                </div>
                <div></div>
              </div>
            </div>
            <div className={`${card.colour} p-6 h-16`}>
              <span className="tracking-widest">{card.cardNumber}</span>
              <Image src={card.logo} alt="Card Logo" className="w-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCards;
