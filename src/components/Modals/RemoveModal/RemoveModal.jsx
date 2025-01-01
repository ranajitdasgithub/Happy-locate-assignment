import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

export const RemoveModal = ({ open, setOpen, onRemove }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        {/* Top section with Icon and Text */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-[21px] h-[21px] rounded-full bg-custom-blue flex justify-center mt-[-16px]">
            <CheckCircleIcon className="bg-white text-custom-blue text-[12px]" />
          </div>
          <span className="text-sm font-bold">
            Are you sure you want to remove this item from inventory?
          </span>
        </div>

        {/* Bottom buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="text-blue-500 font-bold px-4 py-2 rounded-md"
            onClick={onRemove}
          >
            Remove
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setOpen(false)} // Ensure closing modal on Cancel
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
