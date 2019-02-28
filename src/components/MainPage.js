import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BlogTiles from '../components/BlogTiles'
import { Tags, findTopTags} from '../components/Tags' 

export default function MainPage() {
    return (
        <StaticQuery
          query={graphql`
            query mostRecentQuery {
                allMdx(sort: { order: DESC, fields: [frontmatter___date]}) {
                    edges {
                        node {
                            excerpt
                            timeToRead
                            frontmatter {
                                title
                                path
                                description
                                tags
                                cover {
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
          render={ ({ allMdx: { edges } }) => {

            const topTags = findTopTags(edges);
            const latestPosts = edges.slice(0, 4);

            return (
            <div id="main">
                <section id="one" className="tiles transition-slide">
                    <BlogTiles array={ latestPosts }/>
                </section>
                <Tags tags={ topTags } title={'See More by Topic:'}/>
            </div>
          )}}
        />
      )
};