// Importing node modules
import React from 'react'

// Importing local project files
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer' >
            <div className='footer-links' >
                <button>
                    <a href='https://github.com/Jerriath/portfolio' target='_blank'>
                        Portfolio Repo
                    </a>
                </button>
                <button>
                    <a href='https://github.com/Jerriath?tab=repositories' target='_blank'>
                        Other Projects
                    </a>
                </button>
            </div>
            <h4 className='email-link'>
                <a href='mailto:jerryzhang101@yahoo.com' target='_blank'>
                    jerryzhang101@yahoo.com
                </a>
            </h4>
        </footer>
    )
}

export default Footer