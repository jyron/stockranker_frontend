import React, { useEffect, useRef, useState } from 'react';
import StockBox from './StockBox';

const StockCarousel = ({ stocks }) => {
    const containerRef = useRef(null);
    const [carouselStocks, setCarouselStocks] = useState([]);

    useEffect(() => {
        // Update the internal state when the 'stocks' prop changes
        setCarouselStocks(stocks);

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

        // Cleanup function to stop the animation when the component unmounts
        return () => cancelAnimationFrame(animationId);
    }, [stocks]);

    // Check if carouselStocks is undefined or not an array
    if (!carouselStocks || !Array.isArray(carouselStocks)) {
        return null; // or return a loading state or an empty div
    }

    return (
        <div ref={containerRef} className="flex overflow-hidden rounded-t-lg">
            {carouselStocks.map((stock) => (
                <StockBox key={stock.id} stock={stock} />
            ))}
        </div>
    );
};

export default StockCarousel;
