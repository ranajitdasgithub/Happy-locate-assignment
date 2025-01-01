// src/components/Inventory/AddInventory.jsx
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchBar from "../common/SearchBar";
import useInventoryManagement from "../../hooks/useInventoryManagement";

const AddInventory = () => {
  const {
    items,
    search,
    activeCategory,
    categories,
    handleAdd,
    handleRemove,
    getCategoryCount,
    filteredItems,
    handleSearchChange,
    setActiveCategory,
  } = useInventoryManagement();

  return (
    <div className="w-full">
      {/* Search Bar */}
      <SearchBar search={search} onChange={handleSearchChange} />

      {/* Category Tabs */}
      <div className="flex overflow-x-auto mb-2 scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`py-2 rounded-md whitespace-nowrap ${
              index === 0 ? "pl-0" : "ml-6"
            } ${
              activeCategory === category ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} {getCategoryCount(category)}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-0 flex flex-col"
          >
            {/* Full-width Placeholder Image */}
            <div className="w-full h-24 bg-gray-200 rounded-t-md"></div>

            {/* Item Name and Buttons */}
            <div className="flex items-center justify-between p-2 whitespace-nowrap">
              <h3 className="text-gray-700 font-bold text-xs truncate">
                {item.name}
              </h3>
              {item.count > 0 ? (
                <div className="flex items-center gap-[2px]">
                  {/* Remove Button */}
                  <button
                    className="w-5 h-5 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full"
                    onClick={() => handleRemove(index)}
                  >
                    <RemoveIcon style={{ fontSize: "12px" }} />
                  </button>
                  <span className="text-blue-500 font-bold text-[10px] text-center min-w-[16px]">
                    {item.count}
                  </span>
                  {/* Add Button */}
                  <button
                    className="w-5 h-5 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full"
                    onClick={() => handleAdd(index)}
                  >
                    <AddIcon style={{ fontSize: "12px" }} />
                  </button>
                </div>
              ) : (
                <button
                  className="text-blue-500 font-bold text-[10px]"
                  onClick={() => handleAdd(index)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddInventory;
