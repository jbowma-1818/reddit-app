import React, { useState } from 'react';

const PostRating = ({ likeCount }) => {
    const [rating, setRating] = useState(likeCount);
    const [voted, setVoted] = useState(0); // Helps to handle how the user has voted 

    // Formats count to be converted to a string string
    const formatLikes = (count) => {
        if(count >= 1_000_000) return (count / 1_000_000).toFixed(1) + 'M';
        if(count >= 1_000) return (count / 1_000).toFixed(1) + 'k';
        return count.toString();
    };

    // Handles upvote
    const handleUpVote = () => {
        // Handles if the user had already selected the upvote button and instead it undoes the vote
        if(voted === 1){ 
            setRating(rating - 1);
            setVoted(0);
        } else {
            // Handles if downvote was selected or if no button was selected
            setRating(voted === -1 ? rating + 2 : rating + 1);
            setVoted(1);
        }
    }

    // Handles downvote
    const handleDownVote = () => {
        // Handles if the user had already selected the downvote button and instead it undoes the vote
        if(voted === -1){ 
            setRating(rating + 1);
            setVoted(0);
        } else {
            // Handles if upvote was selected or if no button was selected
            setRating(voted === 1 ? rating - 2 : rating - 1);
            setVoted(-1);
        }
    }

    return (
        <div className='post-rating'>
            <button 
                className='arrow'
                onClick={handleUpVote}>
                &#8679;
            </button>
            <p className='like-rating'>{formatLikes(rating)}</p>
            <button 
                className='arrow' 
                style={{transform: 'rotate(180deg)'}}
                onClick={handleDownVote}>
            &#8679;
            </button>
        </div>
    );
}

export default PostRating;