import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import commentIcon from '../assets/comment-icon.png';


const CommentButton = ({ commentCount, postId }) => {
    const navigate = useNavigate();
    return (
        <button 
            className='comment-count'
            onClick={() => navigate(`/comments/${postId}`)}
            type='button'
        >
            <img src={commentIcon} className='comment-icon'></img>
            <span>{commentCount}</span>
        </button> 
    );
};

export default CommentButton;