// Importing node modules
import React from 'react'

// Importing local project files
import Cradle from './Cradle';
import Ticker from './Ticker';
import './home.scss';

const Homepage = () => {
    
  return (
    <section className='homepage'>
        <div className='background'>
            <div className='star'></div>
            <div className="meteor-1"></div>
            <div className="meteor-2"></div>
            <div className="meteor-3"></div>
            <div className="meteor-4"></div>
            <div className="meteor-5"></div>
            <div className="meteor-6"></div>
            <div className="meteor-7"></div>
            <div className="meteor-8"></div>
            <div className="meteor-9"></div>
            <div className="meteor-10"></div>
            <div className="meteor-11"></div>
            <div className="meteor-12"></div>
            <div className="meteor-13"></div>
            <div className="meteor-14"></div>
            <div className="meteor-15"></div>
        </div>
        <Cradle />
        <div className='ticker-holder'>
            <h3 className="">I'm interested in: </h3>
            <Ticker />
        </div>
        <footer>
            <h3>Scroll down to read about me</h3>
            <h3>v</h3>
        </footer>
    </section>
  )
};

export default Homepage;