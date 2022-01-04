import axios from 'axios'
import React, {useState, useEffect} from 'react'

function MovieQuotes(props) {
    const [quotes, setQuotes] = useState([])
    const [hidden, setHidden] = useState(true)
    const [noQuotes, setNoQuotes] = useState('')

 
    function toggleMovieQuotes(event) {
        event.preventDefault()
        if (hidden) {
            setHidden(hidden => !hidden)
            event.target.textContent = 'Hide All Movie Quotes'
        } else {
            event.target.textContent = 'See All Movie Quotes'   
            setHidden(hidden => !hidden)
        }
    }

    
    function getQuotes() {
        axios.get(`https://the-one-api.dev/v2//character/${props.id}/quote`, {
            headers: {
                'Authorization': `Bearer BvNgVR4Md3VR8AugMg9x`
            }
        })
            .then(response => {
                setQuotes(response.data.docs)
                if (response.data.docs.length === 0) {
                    setNoQuotes('No Dialogue')
                }
            })
            .catch(error => console.log(error))
        
    }

    useEffect(() => {
        getQuotes()
    }, [])

    return (
        <div>
            <button onClick={toggleMovieQuotes}>See All Movie Quotes</button>
            <div style={{display: hidden ? 'none' : 'block'}}>
                <div>{noQuotes}</div>
                {quotes.map(each => <h5 key={each._id}>{each.dialog}</h5>)}
            </div>
        </div>
    )
}

export default MovieQuotes