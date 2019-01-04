import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, I'm Jen Lipton</h1>
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
