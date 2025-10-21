import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBarTerm, clearSearchBarTerm, selectSearchBarTerm } from './searchBarSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchBarTerm);

    // Update search field as the user types
    const handleChange = (e) => {
        dispatch(setSearchBarTerm(e.target.value));
    }

    return (
        <div className='search-bar'>
            <input 
                type='text'
                value={searchTerm}
                onChange={handleChange}
                placeholder='Search Reddit'
            />
        </div>
    );
};

export default SearchBar;