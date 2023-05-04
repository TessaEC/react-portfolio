import React from 'react';
import selfPortrait from '../assets/self-portrait.jpg';
import '../styles/AboutMe.css';

export default function AboutMe() {
    return (
        <div className='container'>
            <div className='display-aside'>
                <h2>About Me</h2>
                </div>
                <div className='display-center'>
                <img className='display-img' src={selfPortrait} alt="Tessa" />
                <p className='container'>
                    My name is Tessa. I am a Front-End Engineer and recently completed Vanderbilt's Full Stack Web Development Bootcamp.
                    This program has given me
                    the knowledge to create effective, responsive websites using a variety of programming languages
                    and tools, and has helped me find my passion for Front End Web Development. I love working
                    on user interfaces and designing intuitive, engaging websites that make a positive impact on the
                    users experience. I look forward to continue learning and building upon the knowledge I have gained so far.
                    I greatly appreciate the time you have taken to get to know me and look forward to new adventures. 
                </p>
            </div>
        </div>
    )
}