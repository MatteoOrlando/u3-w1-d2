
import SingleComment from './SingleComment'; //

const CommentsList = ({ comments }) => {
    return (
        <div className="comments-list">
            <h5>Recensioni:</h5>
            {comments.map((comment, i) => (
                <SingleComment key={i} comment={comment} />
            ))}
        </div>
    );
};

export default CommentsList;