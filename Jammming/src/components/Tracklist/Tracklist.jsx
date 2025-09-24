import Track from '../Track/Track';

function Tracklist({ tracks = [] }) {
    if(!tracks.length){
        return null;
    }

    return (
        <div className='tracklist'>
            {tracks.map(track => <Track key={track.id} track={track} />)}
        </div>
    );
}

export default Tracklist;