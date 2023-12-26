import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import StockDetailsPage from './pages/StockDetailsPage';

const App = () => {
  const api_url = import.meta.env.VITE_API_URL;
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch(`${api_url}/api/v0/stocks`);
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path="/"
          element={<Home stocks={stocks} setStocks={setStocks} />}
        />
        <Route path="/stocks/:ticker" element={<StockDetailsPage stocks={stocks} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;