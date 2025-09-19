import { useState } from 'react';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    return (
        <div id='searcBar'>
            <form>
            <input id='search' type='text' value={(e) => setSearchInput(e.target.value)}></input>
            <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;