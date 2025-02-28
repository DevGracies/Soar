"use client";

import { assets } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { FaGreaterThan, FaPaperPlane } from "react-icons/fa";

const teamMembers = [
  { image: assets.person1, name: "Livia Bator", position: "CEO" },
  { image: assets.person2, name: "Randy Press", position: "Director" },
  { image: assets.person3, name: "Workman", position: "Designer" },
  { image: assets.person1, name: "Mary Grace", position: "Developer" },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="p-4 w-full md:h-72 flex flex-col justify-center items-center bg-white rounded shadow">
      <div className="flex gap-4 items-center">
        {teamMembers.slice(0, showAll ? 4 : 3).map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:font-bold hover:cursor-pointer transition"
          >
            <Image
              src={member.image}
              alt="image"
              className="w-16 h-16 bg-gray-300 rounded-full"
            />
            <p className="mt-2">{member.name}</p>
            <p className="text-[#718EBF] text-sm">{member.position}</p>
          </div>
        ))}
        {!showAll && (
          <button
            className="w-10 h-10 flex items-center justify-center border-2 border-[#718EBF] bg-[#FFFFFF] rounded-full"
            onClick={() => setShowAll(true)}
          >
            <FaGreaterThan color="#718EBF" />
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-5 mt-4">
        <p className=" text-xs font-light ">Write Amount </p>

        <div className=" border rounded-full bg-[#EDF1F7] flex justify-between items-center ">
          <input
            type="text"
            placeholder="525.50"
            className="px-3 outline-none bg-transparent w-32"
          />
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center">
            {" "}
            Send <FaPaperPlane className="mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
