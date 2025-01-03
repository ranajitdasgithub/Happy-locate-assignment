import React from "react";
import { Modal, Box } from "@mui/material";

const AddedItemsModal = ({ open, onClose, items = [] }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="added-items-modal"
      aria-describedby="list-of-added-items"
    >
      <Box className="fixed inset-x-0 bottom-0 bg-white rounded-t-lg shadow-lg p-4 max-h-[70vh] w-full max-w-md m-auto">
        {/* Drag Indicator */}
        <div className="flex justify-center items-center mb-4">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Items List */}
        <div className="space-y-4 overflow-y-auto">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                className="flex items-center py-1 justify-between"
              >
                <img
                  src={`/images/${item.image}`}
                  alt={item.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="flex-grow mx-4 text-sm font-semibold">
                  {item.name}
                </span>
                <span className="text-sm font-bold">{item.count}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No items added yet.</p>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default AddedItemsModal;
