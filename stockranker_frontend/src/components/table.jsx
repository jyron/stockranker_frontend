import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Table = () => {
  const [stocks, setStocks] = useState([]);

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

  return (
    <div className="rounded-lg border border-gray-200">
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Ticker</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Industry</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {stocks.map((stock) => (

              <tr key={stock.id} className="hover:bg-gray-100 cursor-pointer">
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{stock.ticker}</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{stock.name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">${stock.price}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{stock.finnhubIndustry}</td>

              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;