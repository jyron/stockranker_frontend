import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/header';
import StockCarousel from '../components/StockCarousel';
import Table from '../components/table';
import Footer from '../components/footer';



const Home = () => {

    const gradientBackgroundStyle = {
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Change the colors as needed
        height: '100vh', // Adjust the height to cover the entire viewport
        overflow: 'hidden', // Ensure the gradient covers the entire viewport
    };
    return (
        <div className="bg-gradient-to-r from-red-500 to-yellow-500 min-h-screen overflow-hidden">
            <Header />
            <StockCarousel />
            <Table />
            <Footer />
        </div>
    );
};

export default Home;