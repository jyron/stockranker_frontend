import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StockProfile from '../components/StockProfile';
import Header from '../components/header';
import StockCarousel from '../components/StockCarousel';
import Footer from '../components/footer';


const StockDetailsPage = ({ stocks }) => {
    const { ticker } = useParams();
    const [stockDetails, setStockDetails] = useState(null);

    useEffect(() => {
        const fetchStockDetails = async () => {
            try {
                const response = await fetch(`https://stockranker-backend.onrender.com/api/v0/stocks/${ticker}`);
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
            <StockCarousel stocks={stocks} />
            <StockProfile stock={stockDetails} />
            <Footer />
        </div>
    );
};

export default StockDetailsPage;