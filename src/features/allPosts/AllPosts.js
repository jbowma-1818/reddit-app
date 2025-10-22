import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/Post';
import { loadPosts } from './allPostsSlice';

const AllPosts = () => {
    const dispatch = useDispatch();
    const { posts, isLoading, hasError } = useSelector((state) => state.allPosts);

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);


    if (isLoading) return <p>Loading…</p>;
    if (hasError) return <p>Failed to load posts.</p>;
  
    return (
        <div>
        {posts.map((data, i) => {
          const videoUrl =
            data?.secure_media?.reddit_video?.fallback_url || 
            data?.media?.reddit_video?.fallback_url ||
            data?.preview?.reddit_video_preview?.fallback_url ||
            data?.crosspost_parent_list?.[0]?.secure_media?.reddit_video?.fallback_url ||
            data?.crosspost_parent_list?.[0]?.media?.reddit_video?.fallback_url ||
            null;
  
          const isVideo =
            Boolean(videoUrl) ||
            data?.is_video === true ||
            data?.post_hint === 'hosted:video';

            console.log(isVideo);
  
          return (
            <Post
              key={data.id ?? i}
              likeCount={data.ups ?? 0}
              title={data.title ?? 'Untitled'}
              author={data.author ?? 'Unknown Author'}
              timeframe={data.created_utc ?? 0}
              commentCount={data.num_comments ?? 0}
              url={
                videoUrl
                ?? data?.url_overridden_by_dest
                ?? data?.url
                ?? null
              }
              isVideo={isVideo}
            />
          );
        })}
      </div>
    );
  };
  
  export default AllPosts;