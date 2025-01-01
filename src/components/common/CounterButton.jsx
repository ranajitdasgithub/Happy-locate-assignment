import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CounterButton = ({ count, item, updateItemCount }) => {
  return (
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
        {count}
      </span>
      <button
        className="w-6 h-6 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full"
        onClick={() => updateItemCount(item.id, 1)}
      >
        <AddIcon fontSize="inherit" style={{ fontSize: "16px" }} />
      </button>
    </div>
  );
};

export default CounterButton;
