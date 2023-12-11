import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Table = () => {
  const [stocks, setStocks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 25;
  const pageCount = Math.ceil(stocks.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
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

  const displayedStocks = stocks.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="rounded-lg border border-gray-200">
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-gray-900">Ticker</th>
              <th className="px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="px-4 py-2 font-medium text-gray-900">Price</th>
              <th className="px-4 py-2 font-medium text-gray-900">Industry</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {displayedStocks.map((stock) => (
              <tr key={stock.id} className="hover:bg-gray-100 cursor-pointer">
                <td className="px-4 py-2 text-gray-900">{stock.ticker}</td>
                <td className="px-4 py-2 text-gray-900">{stock.name}</td>
                <td className="px-4 py-2 text-gray-700">${stock.price}</td>
                <td className="px-4 py-2 text-gray-700">{stock.finnhubIndustry}</td>
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