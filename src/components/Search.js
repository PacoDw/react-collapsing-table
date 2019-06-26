//React
import React from 'react';
import { SearchPropType } from '../utils/propTypes'
//Components
import { getIcon } from '../assets/icons/Icon';

const Search = ({ searchString, searchRows, clearSearch, showSearchIcon, showClearIcon }) => {
    const searchIcon = getIcon({ name: "search", size: 22 });
    const clearIcon = getIcon({ name: "clear", size: 22 });
    return (
        <div className="react-collapsible-search">
            <div className="search-input">
              <input onChange={ searchRows } value={ searchString } placeholder="search"/>
              { showSearchIcon && searchIcon }
              { showClearIcon && <button className="react-collapsible-clear" onClick={ clearSearch }>{ clearIcon }</button> }
            </div>
        </div>
    );
};

Search.propTypes = SearchPropType;

export default Search
