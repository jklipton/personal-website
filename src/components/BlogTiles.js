import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

export default function BlogTiles() {

    return (
        <StaticQuery
          query={graphql`
          query mostRecentQuery {
              allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}, limit: 4) {
                  edges {
                      node {
                          excerpt
                          frontmatter {
                              title
                              path
                              description
                              tilePic {
                                  childImageSharp{
                                      sizes(maxWidth:640) {
                                          ...GatsbyImageSharpSizes
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }`}
          render={ ({ allMarkdownRemark }) => (
            <section id="one" className="tiles">
                    { allMarkdownRemark.edges.map(({ node }, i) => {
                        return (
                            <article key={i} style={{backgroundImage: `url(${node.frontmatter.tilePic.childImageSharp.sizes.src})`}}>
                                <header className="major">
                                    <h3>{node.frontmatter.title}</h3>
                                    <p>{node.frontmatter.description}</p>
                                </header>
                                <Link to={node.frontmatter.path} className="link primary"></Link>
                            </article>
                        )
                    })}
            </section>
          )}
        />
      )
};
