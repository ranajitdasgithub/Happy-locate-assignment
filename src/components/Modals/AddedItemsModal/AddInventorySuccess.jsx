import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

export const AddInventorySuccessModal = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-[21px] h-[21px] rounded-full bg-custom-blue flex justify-center mt-[-16px]">
            <CheckCircleIcon className="bg-white text-custom-blue text-[12px]" />
          </div>
          <span className="text-sm font-bold">
            Success! All inventory items have been added. You can now proceed
            with your next steps.
          </span>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
