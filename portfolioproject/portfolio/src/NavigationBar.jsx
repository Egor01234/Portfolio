/*NavigationBar.jsx Yehor Valesiuk 301343939 28.09.24*/
import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout"
import Home from "../component/Home"
import About from "../component/AboutMe"
import Services from "../component/Services"
import Project from "../component/Project"
import Contact from "../component/ContactMe"
import Logo from "../component/Logo"

const NavigationBar = () => {
    return (
        <div>
            <Layout/>
            <Routes>
                <Route exact path="/logo" element={<Logo />}/>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/services" element={<Services />}/>
                <Route exact path="/project" element={<Project />}/>
                <Route exact path="/contact" element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default NavigationBar