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
                    <Preview 
                        title={previewObj.visualizer.title}
                        image={previewObj.visualizer.imgSrc} 
                        description={previewObj.visualizer.description}
                        repo={previewObj.visualizer.repo}
                        demo={previewObj.visualizer.demo}
                    />
                    <Preview 
                        title={previewObj.blog.title}
                        image={previewObj.blog.imgSrc} 
                        description={previewObj.blog.description}
                        repo={previewObj.blog.repo}
                        demo={previewObj.blog.demo}
                    />
                    <Preview 
                        title={previewObj.twitter.title}
                        image={previewObj.twitter.imgSrc} 
                        description={previewObj.twitter.description}
                        repo={previewObj.twitter.repo}
                        demo={previewObj.twitter.demo}
                    />
                    <Preview 
                        title={previewObj.builder.title}
                        image={previewObj.builder.imgSrc} 
                        description={previewObj.builder.description}
                        repo={previewObj.builder.repo}
                        demo={previewObj.builder.demo}
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects