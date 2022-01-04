import React, {useContext} from 'react'
import {ThemeContext} from './themeContext'
import {Link} from 'react-router-dom'


function Fellowship(props) {
    const {fellowship} = useContext(ThemeContext)
    const displayFellowship = fellowship.map(each => (
        <Link key={each._id} to={`${each._id}`}>
            <div>
                <h2>{each.name}</h2>
                <h5>{each.race}</h5>
            </div>
        </Link>
    ))

    return (
        <>
            <h1>The Company of The Ring</h1>
            <div id='fellowship'>
                {displayFellowship}
            </div>
        </>
    )
}

export default Fellowship