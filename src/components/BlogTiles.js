import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

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
            <section id="one" className="tiles transition-slide">
                    { allMarkdownRemark.edges.map(({ node }, i) => {
                        return (
                            <article key={i} style={{backgroundImage: `url(${node.frontmatter.tilePic.childImageSharp.sizes.src})`}}>
                                <header className="major">
                                    <h3>{node.frontmatter.title}</h3>
                                    <p>{node.frontmatter.description}</p>
                                </header>
                                <Link to="/wip" className="link primary"></Link>
                                {/* <Link to={node.frontmatter.path} className="link primary"></Link> */}
                            </article>
                        )
                    })}
            </section>
          )}
        />
      )
};
