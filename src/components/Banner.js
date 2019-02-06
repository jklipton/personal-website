import React from 'react'
import Typed from './Typed'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1 className="dark">I am Jen Lipton.</h1>
            </header>
            <div className="content">
                <p>A user-first Android and React developer,<br />
                steeped in science, design, and customer service.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly slide-open">
                        <span className="fade-in slide-open">See my Resume</span>
                    </a></li>
                    {/* TODO: link to resume, obviously */}
                </ul>
            </div>
        </div>
    </section>
);

function handleEmoji({ target }){
    switch(target.classList[1]){
        case "tea": 
            target.classList.add('tea-now')
            break;
        case "sci":
            target.classList.add('sci-now')
            break;
        case "des":
            target.classList.add('des-now')
            break;
        case "cus":
            target.classList.add('cus-now')
            break;
    }
}

export default Banner

