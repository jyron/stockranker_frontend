import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StockProfile from '../components/StockProfile';
import Header from '../components/header';
import StockCarousel from '../components/StockCarousel';
import Footer from '../components/footer';
import MamboUINewsContainer from '../components/MamboUINewsContainer';

const NewsPage = ({ stocks }) => {
    const api_url = import.meta.env.VITE_API_URL;
    const [newsDetails, setNewsDetails] = useState(null);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            try {
                const response = await fetch(`${api_url}/api/v0/news/`);
                const data = await response.json();
                setNewsDetails(data);
            } catch (error) {
                console.error(`Error fetching news details`, error);
            }
        };

        fetchNewsDetails();
    }, []);

    if (!nDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Header />
            <StockCarousel stocks={stocks} />
            <NewsArticlePage news={newsDetails} />
            <MamboUINewsContainer />
            <Table stocks={stocks} setStocks={setStocks} />
            <Footer />
        </div>
    );
};

export default NewsPage;