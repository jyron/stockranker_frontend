import React from 'react';
import LoginForm from './components/LoginBar'
import Stocks from "./components/Stocks";

function App() {
  return (
      <div>
          <LoginForm />
    <h1>Stocks</h1>
    <Stocks />
    </div>
  );
}

export default App;
