import React from "react";
import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import SelectInventory from "../components/Inventory/SelectInventory";

const SelectInventoryPage = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* Wrapper for the mobile-sized view */}
      <div className="w-full max-w-md bg-white flex flex-col min-h-screen">
        <Header title="Select Inventory" />
        <TabsNavigation />
        <div className="flex-grow">
          <SelectInventory />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SelectInventoryPage;
