import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCommentsByPostId,
  selectCommentsForPost,
  selectCommentsStatusForPost,
  selectCommentsErrorForPost
} from './commentsSlice';

export default function CommentsPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const comments = useSelector((state) =>
    selectCommentsForPost(state, postId)
  );
  const status = useSelector((state) =>
    selectCommentsStatusForPost(state, postId)
  );
  const error = useSelector((state) =>
    selectCommentsErrorForPost(state, postId)
  );

  useEffect(() => {
    if (postId) {
      dispatch(fetchCommentsByPostId(postId));
    }
  }, [postId, dispatch]);

  if (status === 'loading') return <p>Loading comments…</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((c) => (
        <div key={c.id} className="comment">
          <p><strong>u/{c.author}</strong></p>
          <p>{c.body}</p>
          <p>{c.score}</p>
        </div>
      ))}
    </div>
  );
}