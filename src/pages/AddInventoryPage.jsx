import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import AddInventory from "../components/RoomDetails/AddInventory";
import RoomAccordionManager from "../components/RoomDetails/RoomAccordionManager";

import AddedItemsModal from "../components/Modals/AddedItemsModal/AddedItemsModal";
import { AddInventorySuccessModal } from "../components/Modals/AddedItemsModal/AddInventorySuccess";

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
  } = useAddInventory();

  const [filteredItems, setFilteredItems] = useState([]);
  const [showAddedItemsModal, setShowAddedItemsModal] = useState(false);

  const tabs = ["room", "categories"];
  const navigate = useNavigate();

  const handleBack = () => navigate("/");

  const handleOpenAddedItemsModal = () => setShowAddedItemsModal(true);
  const handleCloseAddedItemsModal = () => setShowAddedItemsModal(false);

  useEffect(() => {
    const getAllItemsData = () => {
      const saveItems = sessionStorage.getItem("AddInventoryAllItems");
      return saveItems ? JSON.parse(saveItems) : {};
    };

    const data = getAllItemsData();
    if (selectedTab === "room") {
      const aggregatedData = {};

      Object.keys(data).forEach((key) => {
        if (key === "categoryTab") return;

        data[key].items.forEach((item) => {
          if (item.count === 0) return;

          if (aggregatedData[item.name]) {
            aggregatedData[item.name].count += item.count;
          } else {
            aggregatedData[item.name] = { ...item };
          }
        });
      });

      setFilteredItems(Object.values(aggregatedData));
    } else {
      const filteredData = data?.categoryTab?.items?.filter(
        (item) => item.count !== 0
      );
      setFilteredItems(filteredData);
    }
  }, [selectedTab, roomCounts, totalItemsCount]);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white flex flex-col min-h-screen">
        <div className="sticky top-0 z-10">
          <Header handleBack={handleBack} title="Add Inventory" />
          <TabsNavigation
            activeTab={selectedTab}
            onTabChange={handleTabChange}
            tabs={tabs}
          />
        </div>
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
        <Footer
          onClick={handleOpenModal}
          setOpen={handleOpenAddedItemsModal}
          value={
            selectedTab === "room" ? totalItemsCount : roomCounts?.categoryTab
          }
          loading={loading}
        />
      </div>
      <AddInventorySuccessModal open={openModal} setOpen={handleCloseModal} />
      <AddedItemsModal
        open={showAddedItemsModal}
        onClose={handleCloseAddedItemsModal}
        items={filteredItems}
      />
    </div>
  );
};

export default AddInventoryPage;
