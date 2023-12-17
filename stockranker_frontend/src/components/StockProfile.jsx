import React from 'react';

const StockProfilePage = ({ stock }) => {
    return (
        <div className="max-w-2xl mx-auto mt-8 p-4 border border-gray-300 rounded shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">{stock.name}</h1>
                <span className="text-gray-600">{stock.ticker}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <img
                        src={stock.logo || '/default-logo.png'} // Provide a default logo path
                        alt={`${stock.name}Logo`}
                        className="w-full h-auto mb-4 rounded"
                    />
                </div>

                <div>
                    <ul className="list-disc ml-4">
                        <li>
                            <strong>Country:</strong> {stock.country || 'N/A'}
                        </li>
                        <li>
                            <strong>Currency:</strong> {stock.currency || 'N/A'}
                        </li>
                        {/* Add more details as needed */}
                    </ul>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Stock Details</h2>
                <ul>
                    <li>
                        <strong>Market Capitalization:</strong>{' '}
                        {stock.marketCapitalization || 'N/A'}
                    </li>
                    <li>
                        <strong>Price:</strong> {stock.price || 'N/A'}
                    </li>
                    <li>
                        <strong>Price Change:</strong> {stock.price_change || 'N/A'}
                    </li>
                    {/* Add more stock details as needed */}
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Stock Performance</h2>
                <ul>
                    <li>
                        <strong>High Price Today:</strong>{' '}
                        {stock.high_price_today || 'N/A'}
                    </li>
                    <li>
                        <strong>Low Price Today:</strong> {stock.low_price_today || 'N/A'}
                    </li>
                    {/* Add more performance details as needed */}
                </ul>
            </div>

            {/* Add more sections based on your data structure */}
        </div>
    );
};

export default StockProfilePage;