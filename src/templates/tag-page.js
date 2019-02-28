
import SEO from '../components/Seo'
import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import BlogTiles from '../components/BlogTiles'
import HomeButton from '../components/HomeButton';
import { Tags, findTopTags } from '../components/Tags';

// TODO: implement SEO

export default function TagTemplate({
        data: { allMdx: { edges } },
        pageContext: { pagination, tags, activetag },
    }) {
    
    const { page, nextPagePath, previousPagePath } = pagination;
    const posts = page.map(id => edges.find(edge => edge.node.id === id),);
      
    const titleTag = activetag.charAt(0).toUpperCase() + activetag.slice(1);
    const topTags = findTopTags(edges, 50);

    return (
    <Layout>
        <Helmet
        title={`${titleTag} Blog | Jen Lipton`}
        meta={[
            { name: 'description', content: `${titleTag} Articles` },
            { name: 'keywords', content: tags },
        ]}
        />
        <HomeButton/>

        <section id="tag-page">
          <h1>{`All '${titleTag}' Posts`}</h1>
          <div className="tiles transition-slide">
            <BlogTiles array={ posts } className="tag-tile" />
          </div>
          <Tags tags={ topTags } title={'Other Topics:'}/>
        </section>
    </Layout>
    )
}

export const pageQuery = graphql `
  query {
    allMdx {
        edges {
          node {
            excerpt(pruneLength: 300)
            id
            timeToRead
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
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
}
`