import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SelectInventoryPage = React.lazy(() =>import("./pages/SelectInventoryPage"));
const AddInventoryPage = React.lazy(() => import("./pages/AddInventoryPage"));

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Wrap Routes in Suspense to handle loading state */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SelectInventoryPage />} />
          <Route path="/add-inventory" element={<AddInventoryPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
