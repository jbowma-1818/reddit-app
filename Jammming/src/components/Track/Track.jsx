import { useState } from "react";

function Track() {
    const [id, setId] = useState(0);

    const incrementId = () => setId(id + 1);

    let track = {
        id: {incrementId},
        name: 'unknown',
        artist: 'unknown',
        album: 'unknown',
    };

    return (
        <>
            <div>
                <p>Name: {track}</p>
                <p>Artist: {artist}</p>
                <p>Album: {album}</p>
            </div>
        </>
    );
}

export default Track;