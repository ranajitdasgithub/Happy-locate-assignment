import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import SelectInventory from "../components/Inventory/SelectInventory";
import { useNavigate } from "react-router-dom";

const SelectInventoryPage = () => {
  const navigate = useNavigate();

  function handleContinue() {
    console.log("footer continue click");
    navigate("inventory");
  }
  //Tab features
  const [selectedTab, setSelectedTab] = useState("room");

  const tabs = ["room", "category"];

  // Handle tab selection
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    console.log("Selected Tab: ", tab); // Do something with the selected tab
  };
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* Wrapper for the mobile-sized view */}
      <div className="w-full max-w-md bg-white flex flex-col min-h-screen">
        <Header title="Select Inventory" />
        <TabsNavigation
          activeTab={selectedTab}
          onTabChange={handleTabChange}
          tabs={tabs}
        />
        <div className="flex-grow">
          <SelectInventory />
        </div>
        <Footer handleContinue={handleContinue} />
      </div>
    </div>
  );
};

export default SelectInventoryPage;
