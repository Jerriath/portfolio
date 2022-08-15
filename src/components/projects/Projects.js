// Importing node modules
import React from 'react'

// Importing local project files
import './projects.scss';
import Preview from './Preview';
import previewObj from './previewObj.js';

const Projects = () => {
    return (
        <section className='projects'>
            <div className='projects-spacing'>
                <div className='projects-header'>
                    <h3>Projects</h3>
                </div>
                <div className='preview-holder'>
                    <Preview image={previewObj.visualizer.imgSrc} />
                    <Preview image={previewObj.blog.imgSrc} />
                    <Preview image={previewObj.twitter.imgSrc} />
                    <Preview image={previewObj.builder.imgSrc} />
                </div>
            </div>
        </section>
    )
}

export default Projects