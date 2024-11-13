import React from 'react';

function Search({ searchQuery, handleSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
