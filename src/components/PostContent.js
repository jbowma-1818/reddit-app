import React from "react";

export default function PostContent({ url = null, isVideo}) {

    console.log(url);
    console.log(isVideo);
    
    // if media url is a video
    if (isVideo && url) {
        return (
          <div className='image-container'>
            <video
              className='post-image cover'
              src={url}
              controls
              playsInline
              preload='metadata'
            />
          </div>
        );
      }

    // if media is not a video
    return (
        <div className='image-container' >
            <div className='background-blur' style={{backgroundImage: `url(${url})` }} ></div>
            <img src={url} alt='' className='post-image cover' />
        </div>
    )
}