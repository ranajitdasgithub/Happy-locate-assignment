import React, { useState } from "react";

const TabsNavigation = () => {
  const [activeTab, setActiveTab] = useState("room");

  return (
    <div className="sticky top-[60px] w-full bg-white z-20 p-4">
      <div className="flex justify-between bg-gray-100 p-2 rounded-md gap-1.5">
        <button
          className={`w-1/2 text-center py-2 rounded-lg transition-colors ${
            activeTab === "room"
              ? "text-white bg-[#2B80FF]"
              : "text-gray-500 bg-transparent"
          }`}
          onClick={() => setActiveTab("room")}
        >
          Room Wise
        </button>
        <button
          className={`w-1/2 text-center py-2 rounded-lg transition-colors ${
            activeTab === "category"
              ? "text-white bg-[#2B80FF]"
              : "text-gray-500 bg-transparent"
          }`}
          onClick={() => setActiveTab("category")}
        >
          Categories Wise
        </button>
      </div>
    </div>
  );
};

export default TabsNavigation;
