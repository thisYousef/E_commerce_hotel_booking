import { useState } from 'react';
import PopularData from './components/HomeSection/popular/PopData';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);  // Start with empty results
  const navigate = useNavigate();

  const handleSearch = () => {
    const filteredResults = PopularData.filter(item =>
      item.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Pass search term and results to the Results page via state
    navigate('/results', { state: { searchTerm, filteredResults } });
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { // Check if Enter key is pressed
      handleSearch(); // Trigger search when Enter is pressed
    }
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <div>
      {/* <input
        type="text"
        value={searchTerm}
        onChange={handleSearch} // Filter results as the user types
        placeholder="Search by country..."
      /> */}
        <Search>
            <SearchIconWrapper>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                onKeyDown={handleKeyDown} // Trigger search on Enter key press
            />
            {/* <button onClick={handleSearch}>Search</button> */}
        </Search>
      {/* Only show results if there is a search term and results are available */}
      {searchTerm && results.length > 0 && (
        <ul className='flex'>
          {results.map((result) => (
            <li key={result.id}>
              <img src={result.image} alt={result.country} width="100" />
              <h3>{result.name}</h3>
              <p>{result.country}</p>
              <p>{result.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
