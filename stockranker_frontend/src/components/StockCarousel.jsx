import React, { useState, useEffect, useRef } from 'react';
import StockBox from './StockBox';

const StockCarousel = () => {
    const [stocks, setStocks] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await fetch('https://stockranker-backend.onrender.com/api/v0/stocks');
                const data = await response.json();
                setStocks(data);
            } catch (error) {
                console.error('Error fetching stocks:', error);
            }
        };

        fetchStocks();
    }, []);

    useEffect(() => {
        const container = containerRef.current;

        const scroll = () => {
            container.scrollLeft += 1; // Adjust the scrolling speed as needed

            // Reset scrollLeft to 0 when it reaches the end
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            }

            requestAnimationFrame(scroll);
        };

        const animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div ref={containerRef} className="flex overflow-hidden rounded-t-lg">
            {stocks.map((stock) => (
                <StockBox key={stock._id} stock={stock} />
            ))}
        </div>
    );
};

export default StockCarousel;