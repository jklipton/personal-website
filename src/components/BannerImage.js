import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BannerImage = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "optimized-images/banner.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
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
          <BackgroundImage Tag="div"
                           className={className}
                           fluid={imageData}
          />
       )
     }
     }
    />
)

export default BannerImage