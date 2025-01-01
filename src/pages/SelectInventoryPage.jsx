import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import SelectInventory from "../components/Inventory/SelectInventory";
import { useNavigate } from "react-router-dom";

const SelectInventoryPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleContinueBtn() {
    setLoading(true);
    console.log("footer continue click");
    navigate("inventory");
    setLoading(true);
  }
  //Tab features
  const [selectedTab, setSelectedTab] = useState("room");

  const tabs = ["room", "categories"];

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
          {selectedTab == "room" ? (
            <SelectInventory />
          ) : (
            <h3 className="text-center mt-8">No Category Available</h3>
          )}
        </div>
        <Footer onClick={handleContinueBtn} value={0} loading={loading} />
      </div>
    </div>
  );
};

export default SelectInventoryPage;
