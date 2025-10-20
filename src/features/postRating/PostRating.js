import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PostRating = ({ likeCount }) => {
    const dispatch = useDispatch();

    // Handles if likeCount is greater than 999
    if(likeCount >= 1000 && likeCount < 100000000){
        likeCount = (likeCount/1000).toPrecision(3) + 'k';
    }else if(likeCount >= 100000000){
        likeCount = (likeCount/100000000).toPrecision(3) + 'mil';
    }

    return (
        <>
            <button className='arrow'>&#8679;</button>
            <p className='like-rating'>{likeCount}</p>
            <button className='arrow' style={{transform: 'rotate(180deg)'}}>&#8679;</button>
        </>
    );
}

export default PostRating;