import React, { useState } from 'react';
import ThumbsUpDown from './ThumbsUpDown';
import Comment from './Comment';


const StockProfile = ({ stock }) => {
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState(stock.comments || []);


    const handleComment = async (stockId) => {
        const url = "http://localhost:8000/api/v0/stock_comment"
        const data = {
            stock_id: stockId,
            comment: newComment,
        };

        await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return (
        <div className="max-w-2xl mx-auto mt-8 p-4 border border-gray-300 rounded shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{stock.name}</h1>
                <span className="text-gray-600 text-lg">{stock.ticker}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <img
                        src={stock.logo || '/default-logo.png'}
                        alt={`${stock.name} Logo`}
                        className="w-full h-auto mb-4 rounded shadow-lg"
                    />
                    <div className="flex items-center space-x-4">
                        <ThumbsUpDown stock={stock} />
                    </div>
                </div>
                <div>
                    <ul className="list-disc ml-4 text-gray-700">
                        <li className="mb-2">
                            <strong>Country:</strong> {stock.country || 'N/A'}
                        </li>
                        <li className="mb-2">
                            <strong>Currency:</strong> {stock.currency || 'N/A'}
                        </li>
                        <li className="mb-2">
                            <strong>Exchange:</strong> {stock.exchange || 'N/A'}
                        </li>
                        <li className="mb-2">
                            <strong>Industry:</strong> {stock.finnhubIndustry || 'N/A'}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Stock Details</h2>
                <ul className="list-disc ml-4 text-gray-700">
                    <li className="mb-2">
                        <strong>Market Capitalization:</strong> {stock.marketCapitalization || 'N/A'}
                    </li>
                    <li className="mb-2">
                        <strong>Price:</strong> ${stock.price || 'N/A'}
                    </li>
                    <li className="mb-2">
                        <strong>Price Change:</strong> ${stock.price_change || 'N/A'}
                    </li>
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Stock Performance</h2>
                <ul className="list-disc ml-4 text-gray-700">
                    <li className="mb-2">
                        <strong>High Price Today:</strong> ${stock.high_price_today || 'N/A'}
                    </li>
                    <li className="mb-2">
                        <strong>Low Price Today:</strong> ${stock.low_price_today || 'N/A'}
                    </li>
                </ul>
            </div>
            <div>
                <h2>Comments</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Type your comment..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button onClick={() => handleComment(stock._id)} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                        Submit Comment
                    </button>
                </div>

                {stock.comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} onReply={(replyContent) => handleReply(comment._id, replyContent)} />
                ))}
            </div>
        </div>
    );
};

export default StockProfile;
