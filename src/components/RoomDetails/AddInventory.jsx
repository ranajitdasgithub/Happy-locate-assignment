import React, { useState, useEffect, memo } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchBar from "../shared/SearchBar";
import useInventoryManagement from "../../hooks/InventoryManagementHook/useInventoryManagement";
import { RemoveModal } from "../Modals/RemoveModal/RemoveModal";
import LazyImage from "../shared/LazyImage";

const AddInventory = ({ onTotalCountChange, roomName }) => {
  const {
    filteredItems,
    categories,
    search,
    activeCategory,
    handleAdd,
    handleRemove,
    getCategoryCount,
    handleSearchChange,
    handleCategoryChange,
    getTotalCounts,
    handleRoomChange,
  } = useInventoryManagement();
  const [openModal, setOpenModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  useEffect(() => {
    if (handleRoomChange) {
      handleRoomChange(roomName);
    }
  }, [handleRoomChange]);

  useEffect(() => {
    if (onTotalCountChange) {
      onTotalCountChange(getTotalCounts);
    }
  }, [getTotalCounts]);

  const handleItemRemoveClick = (item) => {
    if (item.count === 1) {
      setItemToRemove(item);
      setOpenModal(true);
    } else {
      handleRemove(item.name);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setItemToRemove(null);
  };

  const handleRemoveFromModal = () => {
    handleRemove(itemToRemove.name);
    handleCloseModal();
  };

  return (
    <div className="w-full">
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
            onClick={() => handleCategoryChange(category)}
          >
            {category} {getCategoryCount(category)}
          </button>
        ))}
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-md shadow-md p-0 flex flex-col"
          >
            <div className="w-full h-24 bg-gray-200 rounded-t-md">
              <LazyImage
                src={`/images/${item.image}`}
                alt={item.name}
                className="w-full h-full object-cover rounded-t-md"
                placeholderSrc="/images/place-holder.jpg"
              />
            </div>

            {/* Inventory Name and Buttons */}
            <div className="flex items-center justify-between p-2 whitespace-nowrap">
              <h3 className="text-gray-700 font-bold text-xs truncate">
                {item.name}
              </h3>
              {item.count > 0 ? (
                <div className="flex items-center gap-[2px]">
                  {/* Remove Button */}
                  <button
                    className="w-5 h-5 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full"
                    onClick={() => handleItemRemoveClick(item)}
                  >
                    <RemoveIcon style={{ fontSize: "12px" }} />
                  </button>
                  <span className="text-blue-500 font-bold text-[10px] text-center min-w-[16px]">
                    {item.count}
                  </span>
                  {/* Add Button */}
                  <button
                    className="w-5 h-5 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full"
                    onClick={() => handleAdd(item.name)}
                  >
                    <AddIcon style={{ fontSize: "12px" }} />
                  </button>
                </div>
              ) : (
                <button
                  className="text-blue-500 font-bold text-[10px]"
                  onClick={() => handleAdd(item.name)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Remove Modal */}
      {openModal && (
        <RemoveModal
          open={openModal}
          setOpen={handleCloseModal}
          onRemove={handleRemoveFromModal}
          itemName={itemToRemove.name}
        />
      )}
    </div>
  );
};

export default memo(AddInventory, (prevProps, nextProps) => {
  return (
    prevProps.filteredItems === nextProps.filteredItems &&
    prevProps.onTotalCountChange === nextProps.onTotalCountChange
  );
});
