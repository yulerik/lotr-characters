import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import allCharacters from './lotrCharactersAll'

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    // set state, function for get call to set state
    const [characters, setCharacters] = useState([])
    const [fellowship, setFellowship] = useState([])
 
    // Samwise id: 5cd99d4bde30eff6ebccfd0d
    // Aragorn id: 5cd99d4bde30eff6ebccfbe6
    // Gandalf id: 5cd99d4bde30eff6ebccfea0
    // Merry id: 5cd99d4bde30eff6ebccfc66
    // Peregrin Took id: 5cd99d4bde30eff6ebccfc9b
    // Gimli id: 5cd99d4bde30eff6ebccfd23
    // Legolas id: 5cd99d4bde30eff6ebccfd81
    // Boromir id: 5cd99d4bde30eff6ebccfc57
    // Frodo id: 5cd99d4bde30eff6ebccfc15
    const fellowshipIds = ['5cd99d4bde30eff6ebccfd0d', '5cd99d4bde30eff6ebccfbe6', '5cd99d4bde30eff6ebccfea0', '5cd99d4bde30eff6ebccfc7c', '5cd99d4bde30eff6ebccfe2e', '5cd99d4bde30eff6ebccfd23', '5cd99d4bde30eff6ebccfd81', '5cd99d4bde30eff6ebccfc57', '5cd99d4bde30eff6ebccfc15']
    // filters out the fellowship
    function getFellowship() {
        const theFellowship = characters.filter(each => {
            for (let i = 0; i < fellowshipIds.length; i++) {
                let current = fellowshipIds[i]
                if (current === each._id) {
                    return true
                }
            }
            return false 
        })
        setFellowship(theFellowship)
    }

    function getCharacters() {
        axios.get('https://the-one-api.dev/v2/character', {
            headers: {
                'Authorization': `Bearer BvNgVR4Md3VR8AugMg9x`
            }
        })
            .then(response => {
                setCharacters((response.data.docs))

            })
            .catch(error => console.log(error))
    }

    function scrollToTop() {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        })
      }

    useEffect(() => {
        getCharacters()
    }, [])

    useEffect(() => {
        getFellowship()
    },[characters])



    return (
        <ThemeContext.Provider value={{
            characters, 
            fellowship, 
            getFellowship,
            scrollToTop
            }} >
                {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}
