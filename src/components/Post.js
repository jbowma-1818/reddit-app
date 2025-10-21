import React from 'react';
import PostRating from './PostRating';
import Comments from '../features/comments/Comments';

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
                        <div className='post-author'>Posted by {author}</div>
                        <div className='post-timeframe'>{timeframe}</div>
                        <div className='post-comments-container'>
                            <Comments commentCount={commentCount} />
                        </div>
                    </div>
                </div>

            </div>    
        </div>
    );
}