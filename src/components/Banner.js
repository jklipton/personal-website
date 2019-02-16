import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="banner-image-container">
            <BannerImage className='banner-image'/>
        </div>
        <div className="inner">
            <header className="major">
                <h1 className="dark">I am Jen Lipton.</h1>
            </header>
            <div className="content">
                <p>A user-first Android and React developer, steeped in science, design, and so many puppies.</p>
                <ul className="actions">
                    <li><Link to="/resume" className="button next scrolly slide-open">
                        <span className="fade-in slide-open">See my Resume</span>
                    </Link></li>
                </ul>
            </div>
        </div>
    </section>
);

export default Banner

const BannerImage = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "optimized-images/banner.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <Img Tag="div"
              className={className}
              fluid={imageData}
          />
       )
     }
     }
    />
)