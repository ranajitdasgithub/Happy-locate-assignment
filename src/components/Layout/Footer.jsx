import React from "react";

const Footer = ({handleContinue}) => {
  return (
    <div className="sticky bottom-0 w-full p-4 bg-white shadow-md">
      <button onClick={handleContinue} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
        Continue
      </button>
    </div>
  );
};

export default Footer;
