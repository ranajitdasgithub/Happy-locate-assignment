import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Header = ({ title, handleBack }) => {
  return (
    <div className="sticky top-0 left-0 right-0 z-20 w-full py-4 bg-white shadow-md">
      <div className="flex items-center justify-center relative">
        {/* ArrowBack Button */}
        <button onClick={handleBack} className="absolute left-4 text-gray-700">
          <ArrowBackIosIcon style={{ fontSize: "20px", fontWeight: "bold" }} />
        </button>

        {/* Title */}
        <h1 className="text-lg font-bold text-[#262626]">{title}</h1>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-1">
          <div className="bg-blue-500 h-full w-[45%] inline-block"></div>
          <div className="bg-gray-300 h-full w-[55%] inline-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
