// Importing node modules
import React, { useState, useRef } from 'react'

// Importing local project files
import './header.scss';

const Header = ({scrolledUp, scrollHeight}) => {

    const [currentSelected, setCurrentSelected] = useState(null);
    const homeAnchor = useRef(null);

    const onClickHandler = (e) => {
        if (currentSelected === null ) {
            homeAnchor.current.classList.remove('selected');
        }
        else {
            currentSelected.classList.remove('selected');
        }
        setCurrentSelected(e.target);
        e.target.classList.add('selected');
    }

    return (
        <header className={scrolledUp ? 'show' : 'hide'}>
            <nav>
                <ul>
                    <li>
                        <a className='selected' onClick={onClickHandler} ref={homeAnchor} >
                            Home
                        </a>
                    </li>
                    <li>
                        <a onClick={onClickHandler} >
                            About
                        </a>
                    </li>
                    <li>
                        <a onClick={onClickHandler} >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a onClick={onClickHandler} >
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