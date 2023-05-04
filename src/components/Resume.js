import React from 'react';
import resume from '../assets/TC Resume.docx';
import '../styles/Resume.css';
import { Button } from 'react-bootstrap';

export default function Resume() {
    return (
        <div className='container'>
            <Button attribute="download" href={resume}>Download My Resume</Button>
<div>
            <h5>Front-End Proficiencies</h5>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>Progressive Web Apps</li>
</div>
<br></br>
<div>
            <h5>Back-End Proficiencies</h5>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
</div>
        </div>
    )
}