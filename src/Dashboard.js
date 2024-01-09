// Import necessary libraries and dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashBoard.css';

const IpoCalendar = () => {
  const [selectedOption, setSelectedOption] = useState('ipo');
  const [ipoData, setIpoData] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (apiUrl) => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiUrl);

      if (selectedOption === 'ipo') {
        setIpoData(response.data);
        setCurrencyData([]);
      } else if (selectedOption === 'currencyRates') {
        setCurrencyData(response.data);
        setIpoData([]);
      }

      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIpoData([]);
      setCurrencyData([]);
      setError(error.message || 'Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const apiUrl = selectedOption === 'ipo'

    
      ? 'https://api.iex.cloud/v1/data/core/upcoming_ipos/market?token=pk_94ef65873918405e9c40c2c105b69075'
      : 'https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_94ef65873918405e9c40c2c105b69075';

    fetchData(apiUrl);
  }, [selectedOption]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label className='SelecteDropDownOptions'>
        <strong>Select The options: </strong>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="ipo">IPO</option>
          <option value="currencyRates">Currency Rates</option>
        </select>
      </label>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      <div className="data-card">
        {selectedOption === 'ipo' &&
          ipoData.map((item, index) => (
            <div key={index} className="card ipo-card">
             <h3>{item.companyName || 'N/A'}</h3>
              <p>Symbol: {item.symbol || 'N/A'}</p>
              <p>volume: {item.volume || 'N/A'}</p>
              <p>updated: {item.updated || 'N/A'}</p>
              <p>filedDate: {item.filedDate || 'N/A'}</p>
              <p>currentPrice: {item.currentPrice || 'N/A'}</p>
              <p>status: {item.status || 'N/A'}</p>
              <p>shares: {item.shares || 'N/A'}</p>
              <p>priceRangeHigh: {item.priceRangeHigh || 'N/A'}</p>
              <p>priceRangeLow: {item.priceRangeLow || 'N/A'}</p>
              <p>managers: {item.managers || 'N/A'}</p>
              <p>offerPrice: {item.offerPrice || 'N/A'}</p>
            </div>
          ))
        }
        {selectedOption === 'currencyRates' &&
          currencyData.map((item, index) => (
            <div key={index} className="card currency-card">
            <h3>{item.symbol || 'N/A'}</h3>
            <p>Rate: {item.rate || 'N/A'}</p>
            <p>Timestamp: {item.timestamp || 'N/A'}</p>
            <p>IsDerived: {item.isDerived || 'N/A'}</p>
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default IpoCalendar;
