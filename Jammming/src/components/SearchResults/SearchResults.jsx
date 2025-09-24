import TrackList from '../Tracklist/Tracklist';

function SearchResults({ results = [] }) {
    return (
        <div id='searchResults'>
            <h2>Results</h2>
            <TrackList tracks={results} />
        </div>
    );
}

export default SearchResults;