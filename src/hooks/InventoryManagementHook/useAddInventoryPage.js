import { useState, useEffect } from "react";

const useAddInventory = () => {
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [roomCounts, setRoomCounts] = useState(() => {
    const savedCounts = sessionStorage.getItem("ItemCounts");
    return savedCounts ? JSON.parse(savedCounts) : {};
  });
  const [loading, setLoading] = useState(false);

  const [selectedTab, setSelectedTab] = useState(() => {
    return sessionStorage.getItem("AddInventoryActiveTab") || "room";
  });

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("AddInventoryActiveTab", selectedTab);
  }, [selectedTab]);

  const handleTotalItemsCount = (totalObj) => {
    if (typeof totalObj !== "object" || totalObj === null) return;

    let totalCount = 0;
    if (selectedTab === "room") {
      totalCount = Object.entries(totalObj)
        .filter(([key]) => key !== "categoryTab")
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
      sessionStorage.setItem("ItemCounts", JSON.stringify(updatedCounts));
      return updatedCounts;
    });
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return {
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
  };
};

export default useAddInventory;
