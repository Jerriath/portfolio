// Importing node modules
import React from 'react'

// Importing local project files
import './header.scss';

const Header = ({scrolledUp}) => {

    return (
        <header className={scrolledUp ? 'show' : 'hide'}>
            <nav>
                <ul>
                    <li>
                        <a>
                            Home
                        </a>
                    </li>
                    <li>
                        <a>
                            About
                        </a>
                    </li>
                    <li>
                        <a>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <button>
                <a>
                    Resume
                </a>
            </button>
        </header>
    )
}

export default Header