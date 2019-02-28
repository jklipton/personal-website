
import SEO from '../components/Seo'
import React from "react"
import { graphql } from "gatsby"
import HomeButton from '../components/HomeButton'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Img from "gatsby-image"
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { Tags } from '../components/Tags'

// TODO: implement SEO

export default function Template({ data: { mdx }}) {
  const { frontmatter, html } = mdx;

  return (
    <Layout>
      <Helmet
        title={frontmatter.title}
        meta={[
            { name: 'description', content: frontmatter.description },
            { name: 'keywords', content: frontmatter.keywords },
        ]}
      />

      <div id="blog-post">
        <header className="blog-banner">
          <HomeButton/>
          <Img
              className="post-banner"
              fluid={frontmatter.cover.childImageSharp.fluid}/>
          <div className="inner">
            <header className="major">
              <h1 className="light">{frontmatter.title}</h1>
            </header>
            <div className="content">
              <p className="display">by <span className="light signature">Jen Lipton,</span> on {frontmatter.date}</p>
              <p className="display">{frontmatter.description}</p>
            </div>
          </div>
        </header>

        <article className="dark">
          <div className="inner" >
            <MDXRenderer >{mdx.code.body}</MDXRenderer>
          </div>
        </article>

        <Tags tags={mdx.frontmatter.tags} title={ 'View related articles by topic:'}/>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      code {
        body
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        description
        title
        tags
        cover {
          childImageSharp{
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`