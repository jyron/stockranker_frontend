import React, { useState } from 'react';

const Comment = ({ comment, onReply }) => {
    const [isReplying, setIsReplying] = useState(false);
    const [newReply, setNewReply] = useState('');

    const handleReply = () => {
        // Implement the logic to handle adding a reply
        // You may want to send the reply to the backend and update the comments state
        // For simplicity, let's assume you have a function addReplyToComment in your backend API
        // const updatedComment = addReplyToComment(comment.id, newReply);
        // Update the comments state with the updatedComment
        setIsReplying(false);
    };

    return (
        <div>
            <p>{comment.content}</p>
            <button onClick={() => setIsReplying(!isReplying)}>Reply</button>
            {isReplying && (
                <>
                    <input
                        type="text"
                        value={newReply}
                        onChange={(e) => setNewReply(e.target.value)}
                        placeholder="Type your reply..."
                    />
                    <button onClick={handleReply}>Submit Reply</button>
                </>
            )}
            {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} onReply={onReply} />
            ))}
        </div>
    );
};

export default Comment;