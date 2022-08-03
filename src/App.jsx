import React, { Component } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, Navigate, Route, Routes } from "react-router-dom";
import About from './About'
import Contact from './Contact';
import Home from './Home';
import Navi from './Navi';
import AboutUs from "./AboutUs"


export default class App extends Component {
    render() {
        return (
            <>
                <Navi />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about/*" element={<About />}>
                        <Route index={true} element={<><AboutUs /><Navigate to="/about/aboutus"/></>}/>
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </>
        )
    }
}
