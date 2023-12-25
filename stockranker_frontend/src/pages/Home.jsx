import React from 'react';
import Header from '../components/header';
import StockCarousel from '../components/StockCarousel';
import Table from '../components/table';
import Footer from '../components/footer';

const Home = ({ stocks, setStocks }) => {
    return (
        <div className="min-h-screen overflow-hidden">
            <Header />
            <StockCarousel stocks={stocks} />
            <Table stocks={stocks} setStocks={setStocks} />
            <Footer />
        </div>
    );
};

export default Home;