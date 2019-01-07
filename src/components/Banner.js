import React, { Component } from 'react'
import Typing from 'react-typing-animation';

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
            <Typing speed={80} startDelay={1500}>
                <h1 className="typed">I am a developer
                <Typing.Backspace count={9} delay={300} />
                {'designer'}
                <Typing.Backspace count={10} delay={300} />
                <Typing.Delay ms={500}/> 
                {' Jen Lipton.'}</h1>
            </Typing>
            </header>
            <div className="content">
                <p>A user-first Android and Web developer,<br />
                <span className="eg" onClick={(e) => handleEG(e)}>steeped</span> in science, design, and customer-service.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly slide-in">
                        <span className="fade-in slide-in">See my Resume</span>
                    </a></li>
                    {/* TODO: link to resume, obviously */}
                </ul>
            </div>
        </div>
    </section>
);

function handleEG({ target }){
    target.classList.add('easter-egg')
}

export default Banner

