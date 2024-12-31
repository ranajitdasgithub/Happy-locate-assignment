import React from "react";
import Header from "../components/Layout/Header";
import TabsNavigation from "../components/Layout/TabsNavigation";
import Footer from "../components/Layout/Footer";
import AddInventory from "../components/Inventory/AddInventory";

const AddInventoryPage = () => {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white flex flex-col min-h-screen relative">
        {/* Sticky Header */}
        <Header title="Add Inventory" />

        {/* Sticky TabsNavigation */}
        <TabsNavigation />

        {/* Scrollable content */}
        <div className="mt-[140px] pt-[140px] pb-[80px] overflow-y-auto flex-grow">
          <AddInventory />
        </div>

        {/* Sticky Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AddInventoryPage;
