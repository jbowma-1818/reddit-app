import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PostRating = ({ likeCount }) => {
    const dispatch = useDispatch();
    let likeCountString = '';

    // Handles if likeCount is greater than 999
    if(likeCount >= 1000 && likeCount < 100000000){
        likeCountString = (likeCount/1000).toFixed(1) + 'k';
    }else if(likeCount >= 100000000){
        likeCountString = (likeCount/100000000).toFixed(1) + 'mil';
    }else{
        likeCountString = toString(likeCount);
    }

    return (
        <>
            <button className='arrow'>&#8679;</button>
            <p className='like-rating'>{likeCountString}</p>
            <button className='arrow' style={{transform: 'rotate(180deg)'}}>&#8679;</button>
        </>
    );
}

export default PostRating;