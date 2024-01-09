// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StockNavBar from './components/navbar/StockNavBar';
// import Home from './components/stockmarket/Home';
import About from './components/stockmarket/About';
// import Products from './components/stockmarket/Products';
// import Support from './components/stockmarket/Support';
import Login from './components/stockmarket/Login';
import SignUp from './components/stockmarket/SignUp';
import Dashboard from './Dashboard';

// Your main component
const App = () => {
  return (
    <Router>
      <div>
        {/* Your navigation links */}
        <StockNavBar />
        <Routes>
          <Route path="/"  element={< Login/>}  />
          <Route path="/about" element={<About />} />
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/support" element={<Support />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
