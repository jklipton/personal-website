import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

const WIPPage = () => (
  <Layout>
        <div className="construction-banner">
            <UnderConstructionImg/>
            <h3 className="dark">This site is undergoing some updating and constuction, please check back soon!</h3>
            <span className="back-page">
                <Link to="/" className="button detail prev">Back</Link>
            </span>
        </div>
  </Layout>
)

export default WIPPage

const UnderConstructionImg = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "optimized-images/construction.jpg" }) {
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