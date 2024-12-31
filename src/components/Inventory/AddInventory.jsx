import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AddInventory = () => {
  const [items, setItems] = useState([
    { name: "Washing Machine", count: 0 },
    { name: "Sofa Chair", count: 0 },
    { name: "Refrigerator", count: 0 },
    { name: "Bed", count: 0 },
    { name: "Smart TV", count: 0 },
    { name: "Sofa Set", count: 0 },
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
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 flex flex-col items-center"
          >
            {/* Placeholder Image */}
            <div className="w-full h-32 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-gray-700 font-medium mb-2">{item.name}</h3>
            {item.count > 0 ? (
              <div className="flex items-center gap-2">
                {/* Remove Button */}
                <button
                  className="w-8 h-8 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full"
                  onClick={() => handleRemove(index)}
                >
                  <RemoveIcon fontSize="small" />
                </button>
                <span className="text-blue-500 font-bold text-center min-w-[24px]">
                  {item.count}
                </span>
                {/* Add Button */}
                <button
                  className="w-8 h-8 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full"
                  onClick={() => handleAdd(index)}
                >
                  <AddIcon fontSize="small" />
                </button>
              </div>
            ) : (
              <button
                className="text-blue-500 font-medium"
                onClick={() => handleAdd(index)}
              >
                Add
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddInventory;
