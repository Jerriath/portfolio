// Importing node modules
import React from 'react'
import Kahu from './kahu.jpg';

//Importing local project files
import './about.scss';

const About = () => {

    return (
        <section className='about'>
            <div className='about-spacing'>
                <article className='content'>
                    <h3 className='about-header'>
                        About Me
                    </h3>
                    <p>
                        Hello! My name is Jerry Zhang and I am a self-taught, full stack web developer. I graduated from the University of Florida with
                        a B.S. degree in physics. 
                    </p>
                    <p>
                        After graduating, I wanted to change my career path and decided on software engineering. I spent a year after graduating teaching
                        myself web development via an online curriculum called 
                        <a href='https://www.theodinproject.com/' target='_blank'> The Odin Project.</a>
                    </p>
                    <p>Here are some technologies I am confident working with: </p>
                    <ul className='tech-list' >
                        <li className='tech-item' >Javascript (ES6+)</li>
                        <li className='tech-item' >ReactJS</li>
                        <li className='tech-item' >NodeJS</li>
                        <li className='tech-item' >Express</li>
                        <li className='tech-item' >MongoDB</li>
                        <li className='tech-item' >REST Apis</li>
                    </ul>
                </article>
                <article className='pictures'>
                    <div className='picture-holder'>
                        <img alt='image of myself' src={Kahu} />
                        <div className='top-curtain curtain' ></div>
                        <div className='bot-curtain curtain' ></div>
                        <div className='left-curtain curtain' ></div>
                        <div className='right-curtain curtain' ></div>
                    </div>
                </article>                
            </div>
        </section>
    )
}

export default About