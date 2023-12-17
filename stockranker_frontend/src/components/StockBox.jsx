const StockBox = ({ stock }) => {
    const isPositiveChange = stock.percent_change >= 0;
    const colorClass = isPositiveChange ? 'bg-green-200' : 'bg-red-200';
    const textColorClass = isPositiveChange ? 'text-green-600' : 'text-red-600';

    const roundedPercentChange = parseFloat(stock.percent_change).toFixed(2);

    return (
        <div className={`flex items-center px-2 py-1 border border-gray-300 rounded-md mb-2`}>
            <div className={`w-2 h-full ${colorClass} rounded-l-md`}></div>
            <div className="flex-grow pl-2 text-sm">
                <span className={`font-medium ${textColorClass} inline`}>{stock.ticker}</span>
                <div className={` whitespace-nowrap ml-2 ${textColorClass} inline`}>
                    {isPositiveChange ? '+' : ''} {roundedPercentChange}%
                </div>
            </div>
        </div>
    );
};

export default StockBox;