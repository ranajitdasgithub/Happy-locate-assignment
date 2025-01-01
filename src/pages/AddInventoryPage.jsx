import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import AddInventory from "../components/Inventory/AddInventory";
import { useNavigate } from "react-router-dom";
import AccordionWithTabs from "../components/RoomDetails/AccordionWithTabs";

const AddInventoryPage = () => {
  const navigate = useNavigate();

  function handleBack() {
    console.log("header back click");
    navigate("/");
  }
  //Tab features
  const [selectedTab, setSelectedTab] = useState("room");

  const tabs = ["room", "category"];

  // Handle tab selection
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    console.log("Selected Tab: ", tab);
  };
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white flex flex-col min-h-screen">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10">
          <Header handleBack={handleBack} title="Add Inventory" />
          <TabsNavigation
            activeTab={selectedTab}
            onTabChange={handleTabChange}
            tabs={tabs}
          />
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow">
          {selectedTab === "room" ? (
            <AccordionWithTabs />
          ) : (
            <div className="p-4">
              <AddInventory />
            </div>
          )}
        </div>

        {/* Sticky Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AddInventoryPage;
