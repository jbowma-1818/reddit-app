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
  
    // If your thunk hits the Reddit API, the list lives at payload.data.children
    const children = posts?.data?.children ?? posts ?? [];
  
    return (
      <div>
        {children.map((c, i) => {
          const d = c?.data ?? c; // be defensive
          return (
            <Post
              key={d.id ?? i}
              likeCount={d.ups ?? 0}
              title={d.title ?? 'Untitled'}
              author={d.author ?? 'Unknown Author'}
              timeframe={d.created_utc ?? 0}
              commentCount={d.num_comments ?? 0}
              thumbnail={d.thumbnail ?? null}
            />
          );
        })}
      </div>
    );
  };
  
  export default AllPosts;