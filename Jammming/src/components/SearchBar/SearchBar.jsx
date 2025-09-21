import { useState } from 'react';

function SearchBar(props) {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(searchInput);
    };

    const handleInputChange = (e) => {
        setSearchInput(() => e.target.value);
    };

    return (
        <div id='searchBar'>
            <form onSubmit={handleSubmit}>
                <input id='search' type='text' onChange={handleInputChange} value={searchInput}></input>
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;