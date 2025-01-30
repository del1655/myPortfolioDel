/* MainRouter.jsx
Delannie Joseline Teodoro Bocanegra
StudentNumber : 301486294
Date : 29/01/2025 */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from '../src/pages/About/About'
import Contact from '../src/pages/Contact/Contact'
import Services from '../src/pages/Servicesp/Services'
import Projects from '../src/pages/Projects/Projects'
import Layout from '../components/Layoutp/Layout'

const MainRouter = () => {
    return (<div>

        <Layout/>
        
        <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About></About>} />
            <Route exact path="/services" element={<Services></Services>} />
            <Route exact path="/projects" element={<Projects></Projects>} />
            <Route exact path="/contact" element={<Contact></Contact>} />

        </Routes>
    </div>
    )
}

export default MainRouter