import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/header';
import StockCarousel from '../components/StockCarousel';
import Table from '../components/table';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div className="min-h-screen overflow-hidden">

            <Header />
            <StockCarousel />
            <Table />
            <Footer />

        </div>
    );
};

export default Home;
