import React from 'react'
import {useParams} from 'react-router-dom'
import {ThemeContext} from './themeContext'
import MovieQuotes from './Buttons/MovieQuotes'

function InfoCard(props) {
    const {characterId} = useParams()
    const {characters} = React.useContext(ThemeContext)
    const character = characters.find(each => each._id === characterId)
    const {name, race, _id, height, birth, death, realm, wikiUrl, hair, gender,spouse} = character

    return (
        <div>
            <div className='info-card' id={_id}>
                <h1>{name}</h1>
                <h3>{race}<span style={{display: !gender && 'none', fontSize: '10px'}}>   {gender}</span></h3>
                <h5 style={{display: !birth && 'none'}}>birth:<br></br>{birth}</h5>
                <h5 style={{display: !realm && 'none'}}>realm:<br></br>{realm}</h5>
                <h5 style={{display: !death && 'none'}}>death:<br></br>{death}</h5>
                <h5 style={{display: !height && 'none'}}>height:<br></br>{height}</h5>
                <a href={wikiUrl}>More Information about {name}</a>
            </div>
            <MovieQuotes key={_id} id={_id} name={name}/>
        </div>

    )
}

export default InfoCard