import React, {useState} from 'react'
import {ThemeContext} from './themeContext'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development'


function Characters() {
    const {characters} = React.useContext(ThemeContext)
    const [filter, setFilter] = useState(characters)
    const allCharacters = filter.map(each => (
        <Link key={each._id} to={`${each._id}`}>
            <div>
                <h5 style={{marginTop: '1px', marginBottom: '1px'}}>
                    {each.name}
                </h5>
                <h6 style={{marginTop: '1px', marginBottom: '1px'}}>{each.race}</h6>
            </div>
        </Link>
    ))

    function handleSortFilter(event) {
        event.preventDefault()
        const sort = event.target.textContent
        const filterSort = filter.filter(each => {
            if (each.name[0] === sort) {
                return true
            }
            return false
        })
        setFilter(filterSort)
    }

    function resetFilter() {
        setFilter(characters)
        console.dir(document.filter)
        for (let i = 0; i < document.filter.length; i++) {
            let current = document.filter[i]
            current.checked = false
        }
    }
    
    // filters out string with format for get call. 
    // sets filter to return from get call
    function handleFilter(event) {
        event.preventDefault()
        let filters = ''
        for (let i = 0; i < event.target.form.length; i++) {
            let current = event.target.form[i]
            if (current.checked) {
                if (filters.length === 0) {
                    filters = current.value
                } else {
                    filters+=`,${current.value}`
                }
            }
        }
        axios.get(`https://the-one-api.dev/v2//character?race=${filters}`, {
            headers: {
                'Authorization': `Bearer BvNgVR4Md3VR8AugMg9x`
            }})
            .then(response => {
                setFilter(response.data.docs)
            })
            .catch(error => console.log(error))

    }

    useEffect(() => {
        axios.get('https://the-one-api.dev/v2/character', {
            headers: {
                'Authorization': `Bearer BvNgVR4Md3VR8AugMg9x`
            }
        })
            .then(response => {
                setFilter((response.data.docs))
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <form name='filter'>
                <input 
                    type='checkbox'
                    id='orc'
                    value='Orc'
                    name='filter'
                ></input>
                <label>Orcs</label>
                <input 
                    type='checkbox'
                    id='elf'
                    value='Elf'
                    name='filter'
                ></input>
                <label>Elves</label>
                <input 
                    type='checkbox'
                    id='dwarf'
                    value='Dwarf'
                    name='filter'
                ></input>
                <label>Dwarves</label>
                <input 
                    type='checkbox'
                    id='human'
                    value='Human'
                    name='filter'
                ></input>
                <label>Humans</label>
                <input
                    type='checkbox'
                    id='maiar'
                    value='Maiar'
                    name='filter'
                ></input>
                <label>Maiar</label>
                <input
                    type='checkbox'
                    id='ent'
                    value='Ent'
                    name='filter'
                ></input>
                <label>Ents</label>
                <input type='button' htmlFor='filter' value='Filter' onClick={handleFilter}></input>
            
            </form>
            <h5 style={{marginBottom: '5px'}}>Click a letter to sort by first name initial</h5>
            <button onClick={handleSortFilter}>A</button>
            <button onClick={handleSortFilter}>B</button>
            <button onClick={handleSortFilter}>C</button>
            <button onClick={handleSortFilter}>D</button>
            <button onClick={handleSortFilter}>E</button>
            <button onClick={handleSortFilter}>F</button>
            <button onClick={handleSortFilter}>G</button>
            <button onClick={handleSortFilter}>H</button>
            <button onClick={handleSortFilter}>I</button>
            <button onClick={handleSortFilter}>J</button>
            <button onClick={handleSortFilter}>K</button>
            <button onClick={handleSortFilter}>L</button>
            <button onClick={handleSortFilter}>M</button>
            <button onClick={handleSortFilter}>N</button>
            <button onClick={handleSortFilter}>O</button>
            <button onClick={handleSortFilter}>P</button>
            <button onClick={handleSortFilter}>Q</button>
            <button onClick={handleSortFilter}>R</button>
            <button onClick={handleSortFilter}>S</button>
            <button onClick={handleSortFilter}>T</button>
            <button onClick={handleSortFilter}>U</button>
            <button onClick={handleSortFilter}>V</button>
            <button onClick={handleSortFilter}>W</button>
            <button onClick={handleSortFilter}>X</button>
            <button onClick={handleSortFilter}>Y</button>
            <button onClick={handleSortFilter}>Z</button>
            <br></br>
            <button onClick={resetFilter}>Clear Filters</button>
            <h1>All Lord of the Rings Characters</h1>
            <div id='characters'>
                {allCharacters}
            </div>
        </div>
    )
}

export default Characters