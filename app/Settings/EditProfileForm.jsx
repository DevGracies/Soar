"use client";

import { assets } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { FaEdit, FaPencilAlt } from "react-icons/fa";

const EditProfileForm = () => {
  const [imagee, setImage] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative flex flex-col items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border overflow-hidden relative">
            <Image
              src={imagee || assets.lady}
              alt="Profile"
              className="w-full h-full object-cover"
            />

            <label className="absolute bottom-1 right-5 bg-black text-white border-none rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
              <FaPencilAlt size={12} />
            </label>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { label: "Your Name", type: "text" },
            { label: "Email", type: "email" },
            { label: "Date of Birth", type: "date" },
            { label: "Permanent Address", type: "text" },
            { label: "Postal Code", type: "text" },
          ].map(({ label, type }) => (
            <div key={label}>
              <p className="text-sm font-medium">{label}</p>
              <input
                type={type}
                placeholder={label}
                className="w-full p-2 border rounded-md"
              />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">User Name</p>
            <input
              type="text"
              placeholder="User Name"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <p className="text-sm font-medium">Password</p>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="*******"
                className="w-full p-2 border rounded-md"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {["Present Address", "City", "Country"].map((label) => (
            <div key={label}>
              <p className="text-sm font-medium">{label}</p>
              <input
                type="text"
                placeholder={label}
                className="w-full p-2 border rounded-md"
              />
            </div>
          ))}
          <div className="flex justify-center md:justify-end w-full">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-blue-700 w-full md:w-auto"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProfileForm;
