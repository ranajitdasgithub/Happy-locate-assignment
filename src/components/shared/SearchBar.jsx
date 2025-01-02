import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ search, onChange }) => {
  return (
    <div className="flex items-center bg-white p-3 rounded-xl mb-4 border border-gray-300">
      <input
        type="text"
        placeholder="Search for items"
        className="flex-grow bg-white outline-none"
        value={search}
        onChange={onChange}
      />
      <SearchIcon className="text-gray-400 mr-2" />
    </div>
  );
};

export default SearchBar;
