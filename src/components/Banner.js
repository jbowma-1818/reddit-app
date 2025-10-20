import React from 'react';
import redditLogo from '../assets/Reddit-Logo.png'

export default function Banner() {
    return (
        <div className='banner'>
            <div className='banner-container'>
                <img src={redditLogo} alt='Reddit Logo' className='banner-icon'></img>
                <p className='banner-title'><span className='text-color'>Reddit</span>Minimal</p> 
            </div>
        </div>
    );
}