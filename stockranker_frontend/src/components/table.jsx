import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Search from './search'

const Table = () => {
  const [stocks, setStocks] = useState([]);
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
    const fetchStocks = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v0/stocks');
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  const handleLike = async (stockId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v0/stocks/${stockId}/like`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! ${JSON.stringify(errorData)}`);
      }

      console.log(`Liked stock with ID: ${stockId}`);
      // Implement logic to update the UI, e.g., show a success message or update local state
    } catch (error) {
      console.error('Like failed:', error);
      // Implement error handling, e.g., show an error message to the user
    }
  };

  const handleDislike = async (stockId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v0/stocks/${stockId}/dislike`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! ${JSON.stringify(errorData)}`);
      }

      console.log(`Disliked stock with ID: ${stockId}`);
      // Implement logic to update the UI, e.g., show a success message or update local state
    } catch (error) {
      console.error('Dislike failed:', error);
      // Implement error handling, e.g., show an error message to the user
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
    <div className="rounded-lg border border-gray-200">
      <Search onSearch={handleSearch} />
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-gray-900">Ticker</th>
              <th className="px-4 py-2 font-medium text-gray-900">Name</th>

              <th className="px-4 py-2 font-medium text-gray-900">Industry</th>
              <th className="px-4 py-2 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {displayedStocks.map((stock) => (
              <tr key={stock._id} className="hover:bg-gray-100 cursor-pointer">
                <td className="px-4 py-2 text-gray-900">
                  <div>{stock.ticker}</div>
                  <div className="mt-1 text-gray-700">${stock.price}</div>
                </td>
                <td className="px-4 py-2 text-gray-900">{stock.name}</td>
                <td className="px-4 py-2 text-gray-700">{stock.finnhubIndustry}</td>
                <td className="px-4 py-2 text-gray-900">
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