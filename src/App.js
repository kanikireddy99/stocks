import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput';
const App = () => {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputSubmit = (n) => {
    if (n < 1 || n > 20) {
      setErrorMessage('Please enter a number between 1 and 20');
      return;
    }

    fetch(`http://localhost:3001/stocks?count=${n}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSelectedStocks(data);
      })
      .catch((error) => {
        console.error('There was a problem fetching the stocks:', error);
      });
  };

  return (
    <div className="App">
      <h1>Stock Tracker</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <UserInput handleInputSubmit={handleInputSubmit} />
      {/* Display stock data */}
      <div>
        <h2>Selected Stocks:</h2>
        <ul>
          {selectedStocks.map((stock, index) => (
            <li key={index}>{stock.symbol} - {stock.open}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
