function Track({ track }) {
    if(!track){
        return null;
    }

    const { name, artist, album } = track;

    return (
        <div>
            <p>Name: {track}</p>
            <p>Artist: {artist}</p>
            <p>Album: {album}</p>
        </div>
    );
}

export default Track;