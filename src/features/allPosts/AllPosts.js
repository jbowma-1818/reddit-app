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
        {posts.map((data, i) => (
            <Post
              key={data.id ?? i}
              likeCount={data.ups ?? 0}
              title={data.title ?? 'Untitled'}
              author={data.author ?? 'Unknown Author'}
              timeframe={data.created_utc ?? 0}
              commentCount={data.num_comments ?? 0}
              url={data.url ?? null}
            />
          )
        )}
      </div>
    );
  };
  
  export default AllPosts;