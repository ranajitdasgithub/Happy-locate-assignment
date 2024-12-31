import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SelectInventory = () => {
  const [items, setItems] = useState([
    { name: "Rooms", count: 0 },
    { name: "Kitchen", count: 0 },
    { name: "Drawing Hall", count: 0 },
    { name: "Dining Hall", count: 0 },
  ]);

  const handleAdd = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleRemove = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, count: Math.max(0, item.count - 1) } : item
      )
    );
  };

  return (
    <div className="p-4">
      <ul className="bg-white rounded-md shadow-md divide-y">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-4 px-4"
          >
            <span className="text-gray-700 font-medium">{item.name}</span>
            <div className="flex items-center gap-4">
              {/* Remove Button */}
              <button
                className="w-6 h-6 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full"
                onClick={() => handleRemove(index)}
              >
                <RemoveIcon fontSize="inherit" style={{ fontSize: "16px" }} />
              </button>

              {/* Count with fixed width */}
              <span
                className="text-blue-500 font-bold text-center"
                style={{ minWidth: "24px" }}
              >
                {item.count}
              </span>

              {/* Add Button */}
              <button
                className="w-6 h-6 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full"
                onClick={() => handleAdd(index)}
              >
                <AddIcon fontSize="inherit" style={{ fontSize: "16px" }} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectInventory;
