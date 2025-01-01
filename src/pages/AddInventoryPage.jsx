import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import AddInventory from "../components/RoomDetails/AddInventory";
import { useNavigate } from "react-router-dom";
import RoomAccordionManager from "../components/RoomDetails/RoomAccordionManager";

const AddInventoryPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleContinueBtn() {
    console.log("continue button click from add inventory page");
  }
  function handleBack() {
    console.log("header back click");
    navigate("/");
  }
  //Tab features
  const [selectedTab, setSelectedTab] = useState("room");

  const tabs = ["room", "categories"];

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
            <RoomAccordionManager />
          ) : (
            <div className="p-4">
              <AddInventory />
            </div>
          )}
        </div>

        {/* Sticky Footer */}
        <Footer onClick={handleContinueBtn} value={13} loading={loading} />
      </div>
    </div>
  );
};

export default AddInventoryPage;
