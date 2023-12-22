import React, { useState } from 'react';

const Comment = ({ comment, onReply }) => {
    const [isReplying, setIsReplying] = useState(false);
    const [newReply, setNewReply] = useState('');

    const handleReply = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/v0/reply_comment', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment_id: comment._id,
                    stock_id: comment.stock_id,
                    content: newReply,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add reply');
            }

            const newReplyData = await response.json();

            // Update state to show the new reply
            onReply(newReplyData);

            // Clear the input field
            setNewReply('');
            setIsReplying(false);
        } catch (error) {
            console.error('Error adding reply:', error);
        }
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
                <Comment key={reply._id} comment={reply} onReply={onReply} />
            ))}
        </div>
    );
};

export default Comment;
