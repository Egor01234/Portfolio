import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../component/Logo"
// import logo from './logo.png';

export default function Layout(){
    return (
    <>
    <h1>
    <Logo/>  <br></br>       My Portfolio
    </h1>
    <br></br>
    
    <nav>
        <Link className = "link" to = "/">  Home  </Link> | 
        <Link className = "link" to = "/about">  About Me  </Link> |
        <Link className = "link" to = "/services">  Services  </Link> |
        <Link className = "link" to = "/project">  Projects  </Link> |
        <Link className = "link" to = "/contact">  Contact Me</Link>
    </nav>
    
    </>)
}