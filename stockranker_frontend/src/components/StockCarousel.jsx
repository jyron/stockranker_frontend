import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StockBox from './StockBox';

const StockCarousel = () => {
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 p-4 shadow-md">
            <Slider {...settings}>
                {stocks.map((stock) => (
                    <StockBox key={stock._id} stock={stock} />
                ))}
            </Slider>
        </div>
    );
};

export default StockCarousel;


