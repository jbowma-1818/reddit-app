import { useState } from "react";

function Track() {
    const [id, setId] = useState(0);

    const incrementId = () => setId(id + 1);

    let track = {
        id: 0,
        name: 'unknown',
        artist: 'unknown',
        album: 'unknown',
    };

    return ({track})
}

export default Track;