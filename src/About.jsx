import React, { Component } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import AboutUs from './AboutUs'
import OurProjects from './OurProjects'
import References from './References'

export default class About extends Component {

    
    render() {
        return (
            <div className="container mt-3 col-xs-12 col-md-12 col-lg-8">
                <ul className="nav nav-tabs" role="tablist">
                    <Link to="aboutus" className="nav-link" >Who We Are ?</Link>
                    <Link to="projects" className="nav-link">Our Projects</Link>
                    <Link to="references" className="nav-link">References</Link>
                </ul>
                <Outlet  />
                <Routes>
                    <Route path='aboutus' element={<AboutUs />} />
                    <Route path='projects' element={<OurProjects />} />
                    <Route path='references' element={<References />} />
                </Routes>
            </div>


        )
    }
}
