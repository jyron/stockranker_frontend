import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Search from './search'
import DisqusCommentCount from './disqusCommentCount';

const Table = ({ stocks, setStocks }) => {
  const api_url = import.meta.env.VITE_API_URL;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const itemsPerPage = 25;
  const pageCount = Math.ceil(stocks.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (term) => {
    setCurrentPage(0);
    setSearchTerm(term);
  };

  useEffect(() => {
    // No need to fetch stocks here; they are already passed as props from Home
  }, [stocks, setStocks]);

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

  const filteredStocks = searchTerm
    ? stocks.filter((stock) =>
      stock.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : stocks;

  const displayedStocks = filteredStocks.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="p-8 rounded-lg border border-gray-200">
      <Search onSearch={handleSearch} />

      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="px-2 py-2 font-medium text-gray-900">Logo</th>
              <th className="px-2 py-2 font-medium text-gray-900">Company</th>
              <th className="px-2 py-2 font-medium text-gray-900">Price</th>
              <th className="px-2 py-2 font-medium text-gray-900">Comments</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {displayedStocks.map((stock) => (
              <tr key={stock._id} className="hover:bg-gray-100 cursor-pointer">
                <td className="px-2 py-2 text-gray-900">
                  <img src={stock.logo} alt="Company Logo" className="h-12 w-12 object-cover rounded-full" />
                </td>
                <td className=" py-2 text-gray-900">
                  <div>
                    <Link to={`/stocks/${stock.ticker}`} className="text-blue-500 hover:text-blue-700">
                      <span className="font-medium mr-2">{stock.ticker}</span>
                      <span className="text-gray-800">{stock.name}</span>
                    </Link>
                  </div>
                </td>
                <td className="px-2 py-2 text-gray-900">${stock.price}</td>
                <td className="px-2 py-2 text-gray-900">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                    <div className="ml-1">
                      <DisqusCommentCount post={stock} />
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-gray-900">{stock.likes || 0}</td>
                <td className="px-2 py-2 text-gray-900">{stock.dislikes || 0}</td>

                <td className="px-2 py-2 text-gray-900">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleLike(stock._id)}
                      className="mr-2 text-green-500 hover:text-green-700"
                    >
                      Like
                    </button>
                    <button
                      onClick={() => handleDislike(stock._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Dislike
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination flex mt-4'}
          activeClassName={'active'}
          pageClassName={'pagination-item mx-1'}
          pageLinkClassName={'pagination-link block px-3 py-2 rounded bg-white border border-gray-300 text-gray-700'}
          breakClassName={'pagination-item mx-1'}
          breakLinkClassName={'pagination-link block px-3 py-2 rounded bg-white border border-gray-300 text-gray-700'}
          previousClassName={'pagination-item mx-1'}
          previousLinkClassName={'pagination-link block px-3 py-2 rounded bg-white border border-gray-300 text-gray-700'}
          nextClassName={'pagination-item mx-1'}
          nextLinkClassName={'pagination-link block px-3 py-2 rounded bg-white border border-gray-300 text-gray-700'}
        />
      </div>
    </div>
  );
};

export default Table;