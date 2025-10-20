import React from 'react';
import redditLogo from '../assets/Reddit-Logo.png'

export default function Banner() {
    return (
        <div className='banner'>
            <div className='bannerContainer'>
                <span className='icon'><img src={redditLogo} alt='Reddit Logo'></img></span>
                <span className='banner-title'>RedditMinimal</span> 
            </div>
        </div>
    );
}