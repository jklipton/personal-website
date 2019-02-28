import React from 'react'
import { Link } from 'gatsby'
import { Tags } from '../components/Tags'

const BlogTiles = ({ array , className }) => {

    const isTagTile = className ? className.includes('tag') : false;

    return array.map(({ node }, i) => {
        return (
            <article 
                key={i} 
                className={className}
                style={{backgroundImage: `url(${node.frontmatter.cover.childImageSharp.sizes.src})`}}
            >
                <header className="major">
                    <h3>{node.frontmatter.title}
                        {isTagTile && (
                            <span className="time-to-read">
                                { `${node.timeToRead} min read` }
                            </span>
                        )}
                    </h3>
                    <p>{node.frontmatter.description}</p>
                    {isTagTile && <Tags tags={node.frontmatter.tags}/>}
                </header>
                <Link to={node.frontmatter.path} className="link primary"></Link>
            </article>
        )
    })
};

export default BlogTiles;