import React from "react";
import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import SelectInventory from "../components/Inventory/SelectInventory";
import useSelectInventory from "../hooks/SelectInventoryHook/useSelectInventory";

const SelectInventoryPage = () => {
  const { loading, selectedTab, handleContinueBtn, handleTabChange } =
    useSelectInventory();

  const tabs = ["room", "categories"];

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
          {selectedTab === "room" ? (
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
