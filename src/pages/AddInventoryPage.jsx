import React from "react";
import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import AddInventory from "../components/RoomDetails/AddInventory";
import { useNavigate } from "react-router-dom";
import RoomAccordionManager from "../components/RoomDetails/RoomAccordionManager";
import { AddedModal } from "../components/Modals/AddedItemsModal/AddedModal";
import useAddInventory from "../hooks/InventoryManagementHook/useAddInventoryPage";

const AddInventoryPage = () => {
  const {
    totalItemsCount,
    roomCounts,
    selectedTab,
    openModal,
    loading,
    handleTotalItemsCount,
    handleTotalCountChange,
    handleTabChange,
    handleOpenModal,
    handleCloseModal,
    setLoading,
  } = useAddInventory();

  const tabs = ["room", "categories"];
  const navigate = useNavigate();

  const handleBack = () => {
    console.log("Header back clicked");
    navigate("/");
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
          onClick={handleOpenModal}
          value={
            selectedTab === "room" ? totalItemsCount : roomCounts?.categoryTab
          }
          loading={loading}
        />
      </div>
      <AddedModal open={openModal} setOpen={handleCloseModal} />
    </div>
  );
};

export default AddInventoryPage;
