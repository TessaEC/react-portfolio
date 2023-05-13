import React from 'react';
import Project from './Project';
import '../Portfolio.css';

export default function Portfolio() {
    return (
        <div className='container'>
            <p className='port-style'>My work in progression that was completed during bootcamp</p>
            <Project />
        </div>

    )
}
