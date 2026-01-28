import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commentIcon from '../assets/comment-icon.png';

const CommentCount = ({ commentCount }) => {
    return (
        <div className='comment-count'>
            <img src={commentIcon} className='comment-icon'></img>
            <span>{commentCount}</span>
        </div> 
    );
};

export default CommentCount;