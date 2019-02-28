import React from 'react'
import { Link } from 'gatsby'

function findTopTags(edges, max = 15) {
    const allTags = edges.reduce((acc, { node }) => {
        let subAcc = { ...acc }
        node.frontmatter.tags.forEach(tag => {
            subAcc[tag] 
                ?  subAcc[tag]++ 
                : subAcc[tag] = 1;
        });
        return subAcc;
    }, {});

    const tagsSorted = Object.keys(allTags).sort((a,b) => allTags[b]-allTags[a])
    return tagsSorted.length > max ? tagsSorted.slice(0, max) : tagsSorted;    
}

function Tags({ tags, title = null }) {
    return (
        <section className="tags">
            { title && <h4 className="dark">{ title }</h4> }
            <div className="tag-container">
                { tags.map(( tag, i) => {
                    return <Link 
                        key={i}
                        to={`/tags/${tag}`}
                        className="tag-button"
                    > { tag } </Link>
                })}
            </div>
        </section>
    );
}

export { Tags, findTopTags };
  
