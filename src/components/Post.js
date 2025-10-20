import React from 'react';
import PostRating from '../features/postRating/PostRating';

export default function Post({ likeCount = 0, title = 'Untitled', author = 'Unknown Author', timeframe = 0.0, commentCount = 0, url = null }){
    return (
        <div className='post'>
            <div className='post-container'>
                <div className='post-like-count-container'>               
                    <PostRating likeCount={likeCount} />
                </div> 
                <div className='post-info-container'>
                    <div className='post-body-container'>
                        <h2 className='post-title'>{title}</h2>
                        <div className='image-container' >
                            <div className='background-blur' style={{backgroundImage: `url(${url})` }} ></div>
                            <img src={url} alt='' className='post-image cover' />
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