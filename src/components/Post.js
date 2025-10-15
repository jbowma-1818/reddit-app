import React from 'react';

export default function Post(prop){
    return (
        <div className='post'>
            <div className='post-container'>
                <span className='post-like-count'>15</span>
                <div className='post-info-container'>
                    <h2 className='post-tile'>Test Title</h2>
                    <div className='image-container'>
                        <img alt='' className='post-image' />
                    </div>
                </div>
                <div className='post-footer-container'>
                    <span className='post-author'>Author</span>
                    <span className='post-timeframe'>1 hour ago</span>
                    <span className='post-comments-count'>5</span>
                </div>
            </div>    
        </div>
    );
}