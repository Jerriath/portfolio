// Importing node modules
import React from 'react'

// Importing local project files
import './projects.scss';

const Preview = ({title, image, description, demo, repo}) => {
    return (
        <article className='preview'>
            <div className='preview-image'>
                <img src={image} alt='Project preview' />
            </div>
            <div className='preview-overlay'> {/*This is gonna be the corner tab; on hover, will expand and turn from transparent to a color*/}
                <div className='overlay-content' >
                    <div className='preview-column'> {/*This will hold the text content and anchors; on hover, will change z-index and color after delay */}
                        <h4 className='preview-title'>{title}</h4>
                        <div className='preview-row'>
                            <div className='preview-text'>
                                <p>
                                    {description}
                                </p>
                            </div>
                            <div className='preview-anchors'>
                                <button>
                                    <a href={demo} target='_blank'>Live Demo</a>
                                </button>
                                <button>
                                    <a href={repo} target='_blank'>Github Repo</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Preview