import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const { searchTerm, filteredResults } = location.state || {}; // Access passed state

  return (
    <div>
      <h1>Search Results for "{searchTerm}"</h1>

      {filteredResults && filteredResults.length > 0 ? (
        <ul>
          {filteredResults.map((result) => (
            <li key={result.id}>
              <img src={result.image} alt={result.country} width="100" />
              <h3>{result.name}</h3>
              <p>{result.country}</p>
              <p>{result.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Results;
