import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header';
import Table from './components/table';


const App = () => {
  return (
    <>
      <Header />
      <Table />
    </>
  );
};

export default App;