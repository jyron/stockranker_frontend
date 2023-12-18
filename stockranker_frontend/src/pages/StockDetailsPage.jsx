import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StockProfile from '../components/StockProfile';
import Header from '../components/header';
import StockCarousel from '../components/StockCarousel';


const StockDetailsPage = () => {
    const { ticker } = useParams();
    const [stockDetails, setStockDetails] = useState(null);

    useEffect(() => {
        const fetchStockDetails = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/v0/stocks/${ticker}`);
                const data = await response.json();
                setStockDetails(data);
            } catch (error) {
                console.error(`Error fetching details for stock ${ticker}:`, error);
            }
        };

        fetchStockDetails();
    }, [ticker]);

    if (!stockDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Header />
            <StockCarousel />
            <StockProfile stock={stockDetails} />
        </div>
    );
};

export default StockDetailsPage;