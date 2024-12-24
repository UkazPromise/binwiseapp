import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
    // Add your search functionality here
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="flex items-center hover:bg-blue-600 text-white px-4 py-2"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
