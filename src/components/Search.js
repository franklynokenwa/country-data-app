import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../css/Search.css';


function Search(props) {
    const {displaySearchedItem, newStyles, toggleSearchIconDisplay} = props;    

  return(
    <div className="search-container" >
      <FontAwesomeIcon 
        icon={faSearch} 
        className="search" 
        style={newStyles.searchIconStyle}
      />
      <input 
        type="text" 
        name="searchBar" 
        className="searchInput" 
        onClick={toggleSearchIconDisplay} 
        onChange={displaySearchedItem} 
        placeholder="Search for a country"
        // eslint-disable-next-line no-sequences
        style={{...newStyles.searchColor}}
        
      />        
    </div>
  )
}
export default Search;
