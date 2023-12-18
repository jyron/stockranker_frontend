import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/header';
import StockCarousel from '../components/StockCarousel';
import Table from '../components/table';
import Footer from '../components/footer';

const Home = () => {
    return (
        <>
            <Header />
            <StockCarousel />
            <Table />
            <Footer />
        </>
    );
};

export default Home;