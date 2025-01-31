import React, { useState } from 'react';

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Căutare imagini..."
      />
      <button onClick={handleSearch}>Căutare</button>
    </div>
  );
}

export default Searchbar;
