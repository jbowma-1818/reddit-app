import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBarTerm, clearSearchBarTerm, selectSearchBarTerm } from './searchBarSlice';
import { loadPosts } from '../allPosts/allPostsSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchBarTerm);

    // Update search field as the user types
    const handleChange = (e) => {
        console.log('Typed:', e.target.value);
        dispatch(setSearchBarTerm(e.target.value));
    };

    // Clears input when pressed
    const handleClear = () => {
        dispatch(clearSearchBarTerm());
    };

    // Handle search submit
    const handleSubmit = (e) => {
        console.log(searchTerm);
        e.preventDefault();
        // Will go to popular page if search is empty
        if(searchTerm.trim() === '') {
            dispatch(loadPosts());
        } else {
            console.log(e);
            const searchUrl = `https://www.reddit.com/search.json?q=${encodeURIComponent(searchTerm)}`;
            dispatch(loadPosts(searchUrl));
            //e.target.reset();
            dispatch(clearSearchBarTerm());
        }            
    }

    return (
        <form className='search-bar' onSubmit={handleSubmit}>
            <div className='search-bar-container'>
                <div className='search-bar-input'>
                    <input 
                        type='text'
                        name='searchBar'
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder='Search Reddit'
                    />
                    <button type='button' onClick={handleClear}><span>&#x24E7;</span></button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;