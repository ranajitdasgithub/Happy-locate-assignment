import React, { useState } from "react";
import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import AddInventory from "../components/RoomDetails/AddInventory";
import { useNavigate } from "react-router-dom";
import RoomAccordionManager from "../components/RoomDetails/RoomAccordionManager";
import { AddedModal } from "../components/Modals/AddedItemsModal/AddedModal";

const AddInventoryPage = () => {
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [roomCounts, setRoomCounts] = useState(() => {
    const savedCounts = sessionStorage.getItem("roomCounts");
    return savedCounts ? JSON.parse(savedCounts) : {};
  });
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("room");
  const [openModal, setOpenModal] = useState(false); // State for modal

  const tabs = ["room", "categories"];
  const navigate = useNavigate();

  const handleTotalItemsCount = (totalObj) => {
    if (typeof totalObj !== "object" || totalObj === null) {
      return;
    }
    let totalCount = 0;

    if (selectedTab === "room") {
      totalCount = Object.entries(totalObj)
        .filter(([key]) => key !== "selectedTab")
        .reduce((sum, [, count]) => sum + count, 0);
    } else if (selectedTab === "categories") {
      totalCount = totalObj.selectedTab || 0;
    }

    setTotalItemsCount(totalCount || 0);
  };

  const handleTotalCountChange = (newTotal, roomName) => {
    setRoomCounts((prevCounts) => {
      const updatedCounts = {
        ...prevCounts,
        [roomName]: newTotal,
      };
      sessionStorage.setItem("roomCounts", JSON.stringify(updatedCounts));
      return updatedCounts;
    });
  };

  const handleContinueBtn = () => {
    setOpenModal(true);
    console.log("Continue button clicked from Add Inventory Page");
  };

  const handleBack = () => {
    console.log("Header back clicked");
    navigate("/");
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleAddedModal = () => {
    setOpenModal(false);
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
            <RoomAccordionManager onRoomCountsUpdate={handleTotalItemsCount} />
          ) : (
            <div className="p-4">
              <AddInventory
                roomName={"categoryTab"}
                onTotalCountChange={(newTotal) =>
                  handleTotalCountChange(newTotal, "categoryTab")
                }
              />
            </div>
          )}
        </div>

        {/* Sticky Footer */}
        <Footer
          onClick={handleContinueBtn}
          value={
            selectedTab === "room" ? totalItemsCount : roomCounts?.categoryTab
          }
          loading={loading}
        />
      </div>
      <AddedModal open={openModal} setOpen={handleAddedModal} />
    </div>
  );
};

export default AddInventoryPage;
