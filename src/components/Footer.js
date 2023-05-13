import React from 'react';
import '../index.css';
import ghIcon from '../assets/github.svg';
import liIcon from '../assets/linkedin.svg';


export default function Footer() {
    return (
        <footer className='container'>
            <div className='icon-style' >
                <div>             
                    <a href="https://github.com/TessaEC">
                    <img className='resize-img' src={ghIcon} alt="github icon" />
                    </a>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/tessa-carlson-05650a275/">
                <img className='resize-img' src={liIcon} alt="linkdIn icon" />
                </a>
                </div>
            </div>
        </footer>
    )
}
