import React from 'react';
import Navigation from './Navigation';
import '../index.css';


export default function Header({setCurrentPage}) {
    return (
        <header className='container'>
                <h1>Tessa Carlson</h1>
                <Navigation setCurrentPage={setCurrentPage}/>
        </header>
    )
}
