import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios  from 'axios';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

        if (storedUserDetails && email === storedUserDetails.email && password === storedUserDetails.password) {
            navigate('/dashboard'); 
        } else {
            navigate('/sign-up');
        }
    };

    return (
        <div>
            <div className='main-login-page'>
                <div>
                    <img className='login-stock-img' src='/images/ipo.png' alt='Stock' />
                </div>
                <h1 className='login-text'>Login</h1>
                <div className='email-login'>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control input-width'
                        placeholder='Enter the email address'
                    />
                </div>
                <div className='password-login'>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control input-width'
                        placeholder='Enter the password'
                    />
                </div>
                <div>
                    <button onClick={handleLogin} className='login-btnn form-control btn btn-info'>
                        Login
                    </button>
                    <p>
                        <Link to="/sign-up" className='router-sign-up'>
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
