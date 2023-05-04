import React from 'react';
import '../styles/index.css';


export default function Navigation({setCurrentPage}) {
    return (
        <nav className="navbar">
            <ul onClick={()=>setCurrentPage('AboutMe')}>About Me</ul>
            <ul onClick={()=>setCurrentPage('Portfolio')}>Portfolio</ul>
            <ul onClick={()=>setCurrentPage('Contact')}>Contact</ul>
            <ul onClick={()=>setCurrentPage('Resume')}>Resume</ul>
        </nav>
    )
}