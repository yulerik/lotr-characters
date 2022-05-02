import React from 'react'
import {Routes, Route, Link, Outlet} from 'react-router-dom'
import './styles.css'

import Home from './Home'
import Fellowship from './Fellowship'
import Characters from './Characters'
import InfoCard from './InfoCard'
import WrongCard from './WrongCard'
import Footer from './Footer'

function App() {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='fellowship'>Fellowship Characters</Link>
                <Link to='characters'>All LOTR Characters</Link>
            </nav>
            <Routes>
                <Route path ='./' element={<App />}></Route>
                    <Route index element={<Home />}></Route>
                    <Route path='fellowship'element={<Fellowship />}></Route>
                    <Route path='characters' element={<Characters />}></Route>
                    <Route path='characters/:characterId' element={<InfoCard />}></Route>
                    <Route path='fellowship/:characterId' element={<InfoCard />}></Route>
                    <Route path='*' element={<WrongCard />}></Route>
            </Routes>
            <Outlet />
            <Footer />
        </>
    )
}

export default App