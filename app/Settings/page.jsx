"use client";

import { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import UnavailableSetting from "./UnavailableSetting";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("edit");

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      {/* Tab Navigation */}
      <div className="flex justify-between border-b pb-2 mb-4 text-lg font-medium">
        {["edit", "preference", "security"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab ? "border-b-2 border-black text-black" : "text-blue-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "edit" ? "Edit Profile" : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "edit" ? <EditProfileForm /> : <UnavailableSetting />}
    </div>
  );
}
