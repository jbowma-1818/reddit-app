import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PostRating = ({ likeCount }) => {
    const dispatch = useDispatch();

    return (
        <>
            <button className='arrow'>&#8679;</button>
            <p className='like-rating'>{likeCount}</p>
            <button className='arrow' style={{transform: 'rotate(180deg)'}}>&#8679;</button>
        </>
    );
}

export default PostRating;