import React from 'react';

export default function Post({ likeCount = 0, title = 'Untitled', author = 'Unknown Author', timeframe = 0.0, commentCount = 0, url = null }){
    return (
        <div className='post'>
            <div className='post-container'>
                <div className='post-like-count-container'>               
                    <span className='post-like-count'>{likeCount}</span>
                </div> 
                <div className='post-info-container'>
                    <div className='post-body-container'>
                        <h2 className='post-title'>{title}</h2>
                        <div className='image-container'>
                            <img src={url} alt='' className='post-image cover'/>
                        </div>
                    </div>
                    <div className='post-footer-container'>
                        <span className='post-author'>Posted by {author}</span>
                        <span className='post-timeframe'>{timeframe}</span>
                        <span className='post-comments-count'>{commentCount}</span>
                    </div>
                </div>

            </div>    
        </div>
    );
}