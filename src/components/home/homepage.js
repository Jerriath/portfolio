// Importing node modules
import React, { useEffect, useState } from 'react'

// Importing local project files
import Cradle from './Cradle';
import Ticker from './Ticker';
import './home.scss';

const Homepage = ({scrollHeight}) => {

    const [showFooter, setShowFooter] = useState(true);

    useEffect(() => {
        console.log(scrollHeight);
        if (scrollHeight > 50) {
            setShowFooter(false);
        }
        else {
            setShowFooter(true);
        }
    }, [scrollHeight])
    
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
            <div className='main-content'>
                <article className='left-content'>
                    <div className='introduction'>
                        <p>Hi, my name is</p>
                        <h2>Jerry Zhang</h2>
                        <h3>Aspiring Software Engineer</h3>
                        <p className='description'>
                        I am a self-taught, full-stack software engineer. I had graduated from the University of Florida with
                        a Bachelor of Science degree in physics. 
                        </p>
                        
                    </div>
                </article>
                <article className='right-content'>
                    <Cradle />
                    <div className='ticker-holder'>
                        <h4>I'm interested in: </h4>
                        <Ticker />
                    </div>
                </article>
            </div>
            <footer style={showFooter ? { opacity: 1 } : { opacity: 0 }}>
                <h3>Scroll down to read about me</h3>
                <h3 className='arrow'>
                    <div></div>
                    <div></div>
                </h3>
            </footer>
        </section>
    )
};

export default Homepage;