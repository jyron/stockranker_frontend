import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search stocks..."
        value={searchTerm}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default Search;