// Importing node modules
import React from 'react'
import { useEffect, useState } from 'react';

// Importing local project files
import './App.scss';
import Homepage from './components/home/Homepage';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';

const App = () => {

    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrolledUp, setScrolledUp] = useState(true);

    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY < 100) {
                setScrolledUp(true);
            }
            else if (window.scrollY - scrollHeight < 0) {
                console.log("Up");
                setScrolledUp(true);
            }
            else if (window.scrollY - scrollHeight > 0) {
                console.log("down");
                setScrolledUp(false);
            } 
            setScrollHeight(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollHeight]);

    return (
        <main className='app'>
            <Header scrolledUp={scrolledUp} scrollHeight={scrollHeight}/>
            <Homepage scrollHeight={scrollHeight} />
            <About />
            <Projects />
        </main>
    )
}

export default App