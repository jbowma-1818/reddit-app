import React from 'react';
import PostRating from './PostRating';
import PostContent from './PostContent';
import CommentButton from './CommentButton';

export default function Post({ likeCount = 0, title = 'Untitled', author = 'Unknown Author', timePosted = 0.0, commentCount = 0, url = null, isVideo = false }){
    return (
        <div className='post'>
            <div className='post-container'>
                <div className='post-like-count-container'>               
                    <PostRating likeCount={likeCount} />
                </div> 
                <div className='post-info-container'>
                    <div className='post-body-container'>
                        <h2 className='post-title'>{title}</h2>

                            <PostContent url={url} isVideo={isVideo} />

                    </div>
                    <div className='post-footer-container'>
                        <div className='post-author'>Posted by {author}</div>
                        <div className='post-time-posted'>{timePosted}</div>
                        <div className='post-comments-container'>
                            <CommentButton commentCount={commentCount} />
                        </div>
                    </div>
                </div>

            </div>    
        </div>
    );
}