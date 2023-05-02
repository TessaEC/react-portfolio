import React from 'react';
import '../styles/index.css';


export function Navigation() {
    return (
        <nav className="navbar">
            <a href="#about-me">About Me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact Info</a>
            <a href="#resume">Resume</a>
        </nav>
    )
}


export default Navigation;