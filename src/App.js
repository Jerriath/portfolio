// Importing node modules
import React from 'react'
import { useEffect } from 'react';

// Importing local project files
import Homepage from './components/home/Homepage';
import Header from './components/header/Header';
import About from './components/about/About';

const App = () => {

    useEffect(() => {
        const handleScroll = event => {
          console.log('window.scrollY', window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <main className='app'>
            <Header />
            <Homepage />
            <About />
        </main>
    )
}

export default App