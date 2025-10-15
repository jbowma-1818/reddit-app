import React from 'react';

export default function Post({ likeCount = 0, title = 'Untitled', author = 'Unknown Author', timeframe = 0.0, commentCount = 0 }){
    return (
        <div className='post'>
            <div className='post-container'>
                <span className='post-like-count'>{likeCount}</span>
                <div className='post-info-container'>
                    <h2 className='post-title'>{title}</h2>
                    <div className='image-container'>
                        <img alt='' className='post-image' />
                    </div>
                </div>
                <div className='post-footer-container'>
                    <span className='post-author'>Posted by {author}</span>
                    <span className='post-timeframe'>{timeframe}</span>
                    <span className='post-comments-count'>{commentCount}</span>
                </div>
            </div>    
        </div>
    );
}