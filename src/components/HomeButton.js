import React from 'react'
import { Link } from 'gatsby'

const HomeButton = (props) => (
    <nav id="home-button">
        <Link className="home-link icon fa-home" to="/"/>
    </nav>
)

export default HomeButton
