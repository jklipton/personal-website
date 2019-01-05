import React from 'react'
import Typing from 'react-typing-animation';

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
            <Typing speed={150} startDelay={1000}>
                <h1 className="typed">I am 
                <Typing.Delay ms={1000}/> 
                {' a developer'}
                <Typing.Backspace count={9} delay={1000} />
                {'designer'}
                <Typing.Backspace count={10} delay={1000} />
                <Typing.Delay ms={1000}/> 
                {' Jen Lipton.'}</h1>
            </Typing>
            </header>
            <div className="content">
                <p>A user-first Android and Web developer,<br />
                steeped in science, design, and customer-service.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">See my Resume</a></li>
                    {/* TODO: link to resume, obviously */}
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
