
export default function commentList( {author = 'Unknown Author', timePosted = 0.0, likeCount = 0} ) {
    return (
        <div className='comment'>
            <div className='comment-container'>
                <div className='comment-author-container'>

                </div>
                <div className='comment-body-container'>

                </div>
                <div className='comment-rating-container'>
                    
                </div>
            </div>
        </div>
    );
};