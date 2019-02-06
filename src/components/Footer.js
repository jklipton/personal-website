import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/jkliptonia" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/jklipton" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; JK LIPTON LLC 2019</li><li>Design: based on <a href="https://html5up.net">HTML5 UP</a>, leveraged by Jen Lipton.</li>
                <li>Built with <a href="https://gatsby-forty.surge.sh/">GATSBY.JS</a>.</li>
            </ul>
        </div>
    </footer>
)

export default Footer
