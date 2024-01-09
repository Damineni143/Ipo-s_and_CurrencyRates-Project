
import React from 'react';
import './StockBar.css'; 
import { Link } from 'react-router-dom';
const StockNavBar = () => {
    return (
       <div>
        <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
          <li class="nav-item">
              <img className='stock-image' src='/images/ipo1.png'/>
            </li>
            <li class="nav-item">
              <Link to='/' class="nav-link active" href="#">Home</Link>
            </li>
            <li class="nav-item">
              <Link to={'/about'} class="nav-link" href="#">About</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Support</a>
            </li>
            <li class="nav-item">
              <Link to='/' class="nav-link loginPage" href="#">Login</Link>
            </li>
            <li class="nav-item">
              <Link to='/sign-up' class="nav-link SignUpPage">SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
};

export default StockNavBar;
