import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <h1>Characters of The Lord of the Rings</h1>
            <h3>Gain access to the information of the characters Tolkien created</h3>
            <p>This site accesses all the information that is available for every character in The Lord of the Rings movie trilogy, using</p>
            <a href='https://the-one-api.dev' alt='the-one-api'>The-One-Api</a>
            <p>Click on one of the links above to access either all the characters or the nine characters that made up the fellowship of the ring.</p>
            <div className='home-links'>
                <Link to='fellowship'>Characters of the Fellowship</Link>
                <Link to='characters'>All Characters</Link>
            </div>
        </div>
    )
}

export default Home