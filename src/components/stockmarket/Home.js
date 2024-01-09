import React from 'react'
import './home.css'
const Home = () => {
    return (
        <div className='main-home-page'>
            <div className='row container'>
                <div className='col-lg-6 easiest-stock'>
                    <h1>
                        The easiest<br></br> way to use <br></br>stock market!.
                    </h1>
                    <p>Build and scale finacial applicatios<br></br> faster on IEX cloud</p>
                </div>
                <div className='col-lg-6'>
                    <img className='home-stock-img' src='/images/stock3.png'/>
                </div>
            </div>
        </div>
    )
}

export default Home