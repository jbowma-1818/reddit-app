import React, { useState } from 'react';

const PostRating = ({ likeCount }) => {
    const [rating, setRating] = useState(likeCount);

    // Formats count to be converted to a string string
    const formatLikes = (count) => {
        if(count >= 1_000_000) return (count / 1_000_000).toFixed(1) + 'M';
        if(count >= 1_000) return (count / 1_000).toFixed(1) + 'k';
        return count.toString();
    };

    return (
        <>
            <button className='arrow'>&#8679;</button>
            <p className='like-rating'>{likeCountString}</p>
            <button className='arrow' style={{transform: 'rotate(180deg)'}}>&#8679;</button>
        </>
    );
}

export default PostRating;