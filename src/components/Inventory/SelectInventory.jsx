import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../redux/features/app-slice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SelectInventory = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.inventoryDetails.room);
  console.log("items", items);

  const updateItemCount = (id, increment) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? { ...item, value: Math.max(0, item.value + increment) }
        : item
    );
    dispatch(appActions.updateInventoryDetails({ room: updatedItems }));
  };

  return (
    <div className="p-4">
      <ul className="bg-white rounded-md shadow-md divide-y">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between py-4 px-4"
          >
            <span className="text-gray-700 font-medium">{item.name}</span>
            <div className="flex items-center gap-4">
              <button
                className="w-6 h-6 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full"
                onClick={() => updateItemCount(item.id, -1)}
              >
                <RemoveIcon fontSize="inherit" style={{ fontSize: "16px" }} />
              </button>
              <span
                className="text-blue-500 font-bold text-center"
                style={{ minWidth: "24px" }}
              >
                {item.value}
              </span>
              <button
                className="w-6 h-6 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full"
                onClick={() => updateItemCount(item.id, 1)}
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
