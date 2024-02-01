import React from 'react';

const SingleComment = ({ comment }) => {
    return (
        <div className="single-comment">
            <p>{comment.comment}</p>
            <small>{comment.author}</small>
        </div>
    );
};

export default SingleComment;