import React from 'react';

const StockBox = ({ stock }) => {
    const isPositiveChange = stock.percent_change >= 0;
    const colorClass = isPositiveChange ? 'bg-green-200' : 'bg-red-200';
    const textColorClass = isPositiveChange ? 'text-green-600' : 'text-red-600';

    const roundedPercentChange = parseFloat(stock.percent_change).toFixed(2);

    return (
        <div className={`flex items-center py-2 border border-gray-300 rounded-md mb-2 overflow-hidden`}>
            <div className={`w-2 h-full ${colorClass} rounded-l-md`}></div>
            <div className="flex-grow pl-2 text-xs">
                <span className={`font-bold ${textColorClass} overflow-hidden overflow-ellipsis whitespace-nowrap`}>{stock.name}</span>
                <span className={`mt-1 ${textColorClass} ml-2 block sm:inline`}>
                    {isPositiveChange ? '+' : ''} {roundedPercentChange}%
                </span>
            </div>
        </div>
    );
};

export default StockBox;