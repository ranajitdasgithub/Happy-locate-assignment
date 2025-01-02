import React, { Suspense } from "react";
import useSelectInventory from "../hooks/SelectInventoryHook/useSelectInventory";

const Header = React.lazy(() => import("../components/Layout/Header"));
const TabsNavigation = React.lazy(() =>
  import("../components/Layout/TabsNavigation")
);
const Footer = React.lazy(() => import("../components/Layout/Footer"));
const SelectInventory = React.lazy(() =>
  import("../components/Inventory/SelectInventory")
);

const SelectInventoryPage = () => {
  const { loading, selectedTab, handleContinueBtn, handleTabChange } =
    useSelectInventory();

  const tabs = ["room", "categories"];

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white flex flex-col min-h-screen">
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header title="Select Inventory" />
        </Suspense>

        <Suspense fallback={<div>Loading Tabs...</div>}>
          <TabsNavigation
            activeTab={selectedTab}
            onTabChange={handleTabChange}
            tabs={tabs}
          />
        </Suspense>

        <div className="flex-grow">
          <Suspense fallback={<div>Loading Inventory...</div>}>
            {selectedTab === "room" ? (
              <SelectInventory />
            ) : (
              <h3 className="text-center mt-8">No Category Available</h3>
            )}
          </Suspense>
        </div>

        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer onClick={handleContinueBtn} value={0} loading={loading} />
        </Suspense>
      </div>
    </div>
  );
};

export default SelectInventoryPage;
