// Importing node modules
import React from 'react'

// Importing local project files
import Homepage from './components/home/Homepage';
import Header from './components/header/Header';

const App = () => {
    
    return (
        <main className='app'>
            <Header />
            <Homepage />
        </main>
    )
}

export default App