import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon
import './SearchBar.css'

const SearchBar = (props) => {
  return (
        <div className="search-bar" id={props.id}>
            <input
            type="text"
            placeholder="Search for a product..."
            className="search-input"
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
  )
}

export default SearchBar