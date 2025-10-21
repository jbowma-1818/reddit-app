import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commentIcon from '../../assets/comment-icon.png';

const Comments = ({ commentCount }) => {
    return (
        <div className='comments'>
            <img src={commentIcon} className='comments-icon'></img>
            <span>{commentCount}</span>
        </div> 
    );
};

export default Comments;