// Importing node modules
import React from 'react'

// Importing local project files
import './projects.scss';

const Preview = () => {
    return (
        <article className='preview'>
            <div className='preview-image'>
                <img src={null} alt='Project preview' />
            </div>
            <div className='preview-overlay'> {/*This is gonna be the corner tab; on hover, will expand and turn from transparent to a color*/}
                <div className='preview-column'> {/*This will hold the text content and anchors; on hover, will change z-index and color after delay */}
                    <h4 className='preview-title'>{null}</h4>
                    <div className='preview-row'>
                        <div className='preview-anchors'>
                            <button>
                                <a href={null} target='_blank'>Live Demo</a>
                            </button>
                            <button>
                                <a href={null} target='_blank'>Github Repo</a>
                            </button>
                        </div>
                        <div className='preview-text'>
                            <p>
                                {null}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Preview