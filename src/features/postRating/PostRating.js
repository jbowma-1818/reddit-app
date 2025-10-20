import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostRating = ({ likeCount }) => {
    const dispatch = useDispatch();

    return (
        <>
            <button>&#8593;</button>
            <p>{likeCount}</p>
            <button>&#8595;</button>
        </>
    );
}

export default PostRating;