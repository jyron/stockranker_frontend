import React, { useState } from 'react';

const Table = ({ stocks, setStocks }) => {
  const api_url = import.meta.env.VITE_API_URL;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [comments, setComments] = useState({});
  const [currentComment, setCurrentComment] = useState({});

  const itemsPerPage = 25;
  const pageCount = Math.ceil(stocks.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
  };

  const handleLike = async (stockId) => {
    try {
      const response = await fetch(`${api_url}/api/v0/stocks/${stockId}/like`, {
        method: 'POST',
        credentials: 'include',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! ${JSON.stringify(errorData)}`);
      }
      alert('Stock liked!');
    } catch (error) {
      alert('Login to like a stock!');
    }
  };

  const handleDislike = async (stockId) => {
    try {
      const response = await fetch(`${api_url}/api/v0/stocks/${stockId}/dislike`, {
        method: 'POST',
        credentials: 'include',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! ${JSON.stringify(errorData)}`);
      }
      alert('Stock disliked!');
    } catch (error) {
      alert('Login to dislike a stock!');
    }
  };

  const postComment = async (stockId, comment) => {
    try {
      const response = await fetch(`${api_url}/api/v0/stock/${stockId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
        credentials: 'include',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! ${JSON.stringify(errorData)}`);
      }
      const result = await response.json();
      const updatedComments = { ...comments };
      updatedComments[stockId] = [...(comments[stockId] || []), result.comment];
      setComments(updatedComments);
      setCurrentComment({ ...currentComment, [stockId]: '' }); // Clear input field
      alert('Comment added!');
    } catch (error) {
      console.error('Failed to post comment:', error);
      alert('Failed to post comment. Please try again.');
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map(stock => (
            <tr key={stock._id}>
              <td>{stock.name}</td>
              <td>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={currentComment[stock._id] || ''}
                  onChange={(e) => setCurrentComment({ ...currentComment, [stock._id]: e.target.value })}
                />
                <button onClick={() => postComment(stock._id, currentComment[stock._id])}>Comment</button>
                <ul>
                  {comments[stock._id]?.map((comment, idx) => (
                    <li key={idx}>{comment.content}</li>
                  ))}
                </ul>
              </td>
              <td>
                <button onClick={() => handleLike(stock._id)}>Like</button>
                <button onClick={() => handleDislike(stock._id)}>Dislike</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
