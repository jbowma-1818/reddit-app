import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBarTerm, clearSearchBarTerm, selectSearchBarTerm } from './searchBarSlice';
import { loadPosts } from '../allPosts/allPostsSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchBarTerm);

    // Update search field as the user types
    const handleChange = (e) => {
        dispatch(setSearchBarTerm(e.target.value));
    };

    // Clears input when pressed
    const handleClear = () => {
        dispatch(clearSearchBarTerm());
    };

    // Handle search submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Will go to popular page if search is empty

        if(searchTerm.trim() === '') {
            dispatch(loadPosts());
        } else {
            const searchUrl = `https://www.reddit.com/search.json?q=${encodeURIComponent(searchTerm)}`;
            dispatch(loadPosts(searchUrl));
        }            
    }

    return (
        <form className='search-bar' onSubmit={handleSubmit}>
            <div className='search-bar-container'>
                <div className='search-bar-input'>
                    <input 
                        type='text'
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder='Search Reddit'
                    />
                </div>
                <button onClick={handleClear}><span>&#x24E7;</span></button>
            </div>
        </form>
    );
};

export default SearchBar;