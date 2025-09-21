import { useState } from 'react';

function SearchBar(props) {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleInputChange = (e) => {
        setSearchInput(() => e.target.value);
    };

    return (
        <div id='searcBar'>
            <form>
                <input id='search' type='text' onChange={handleInputChange}></input>
                <button onSubmit={handleSubmit}>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;