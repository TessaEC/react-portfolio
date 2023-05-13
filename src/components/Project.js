import React from 'react';
import picOne from '../assets/techpic1.jpg';
import picTwo from '../assets/techpic2.jpg';
import picThree from '../assets/techpic3.jpg';
import picFour from '../assets/techpic4.jpg';
import PicFive from '../assets/techpic5.jpg';
import picSix from '../assets/techpic6.jpg';
import '../Portfolio.css';
import '../Project.css';

export default function Portfolio() {
    return (
        <div className='flex-container'>
            <div className='card'>
                <div>             
                    <a href="https://github.com/TessaEC/challenge2-portfolio" className="first-port">
                    <h5 className="container-styling">First Portfolio</h5>
                    <img src={picOne} alt="keyboard" className="pic-1" />
                    </a>
                    </div>
            </div>
            <div className='card'>
                <a href="https://github.com/TessaEC/challenge4-API-quiz" className="quiz">
                    <h5 className="container-styling">API Quiz</h5>
                    <img src={picTwo} alt="keyboard" className="pic-2" />
                </a>
            </div>
            <div className='card'>
                <a href="https://github.com/TessaEC/miphy-movie-gif-generator" className="pro-1">
                    <h5 className="container-styling">API Group Project #1</h5>
                    <img src={picThree} alt="keyboard" className="pic-3" />
                </a>
            </div>
            <div className='card'>
                <a href="https://github.com/TessaEC/MVC-blog" className="blog">
                    <h5 className="container-styling">MVC Blog</h5>
                    <img src={picFour} alt="keyboard" className="pic-4" />
                </a>
            </div>
            <div className='card'>
                <a href="https://github.com/TessaEC/restaurant-foodbank-app" className="pro-2">
                    <h5 className="container-styling">MVC Group Project #2</h5>
                    <img src={PicFive} alt="keyboard" className="pic-5" />
                </a>
            </div>
            <div className='card'>
                <a href="https://github.com/TessaEC/friend-talk" className="friend-talk">
                    <h5 className="container-styling">MongoDB Friend Chat</h5>
                    <img src={picSix} alt="keyboard" className="pic-6" />
                </a>
            </div>
        </div>
    )
}