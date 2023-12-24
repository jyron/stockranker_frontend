import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import StockDetailsPage from './pages/StockDetailsPage';


const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks/:ticker" element={<StockDetailsPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;