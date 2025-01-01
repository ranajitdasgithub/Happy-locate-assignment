import React from "react";

const TabsNavigation = ({ activeTab, onTabChange, tabs }) => {
  return (
    <div className="sticky top-[60px] w-full bg-white z-20 p-4 pb-1">
      <div className="flex justify-between bg-gray-100 p-2 rounded-md gap-1.5">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`w-1/2 text-center py-2 rounded-lg transition-colors ${
              activeTab === tab
                ? "text-white bg-[#2B80FF]"
                : "text-gray-500 bg-transparent"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Wise
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsNavigation;
