import React from 'react';

const StockProfile = ({ stock }) => {
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
                        {/* Add more details as needed */}
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
                        <strong>Price:</strong> {stock.price || 'N/A'}
                    </li>
                    <li className="mb-2">
                        <strong>Price Change:</strong> {stock.price_change || 'N/A'}
                    </li>
                    {/* Add more stock details as needed */}
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Stock Performance</h2>
                <ul className="list-disc ml-4 text-gray-700">
                    <li className="mb-2">
                        <strong>High Price Today:</strong> {stock.high_price_today || 'N/A'}
                    </li>
                    <li className="mb-2">
                        <strong>Low Price Today:</strong> {stock.low_price_today || 'N/A'}
                    </li>
                    {/* Add more performance details as needed */}
                </ul>
            </div>

            {/* Add more sections based on your data structure */}
        </div>
    );
};

export default StockProfile;
