// import React, { Component } from 'react';
// import queryString from 'query-string';
// import { Index } from 'elasticlunr';
// import { graphql } from 'gatsby';

// // Graphql query used to retrieve the serialized search index.
// export const query = graphql`query
// SearchIndexExampleQuery {
//     siteSearchIndex {
//       index
//     }
// }`;

// // Search component
// export default class Archives extends Component {
//     state = {
//       query: '',
//       results: []
//     }

//     checkSearch(){
//       const prevQuery = this.state.query;
//       const newQuery = queryString.parse(window.location.search);
  
//       if( prevQuery !== newQuery) { this.setState({ query : newQuery.tags }); }
//     }
  
//     componentDidMount() {
//       this.checkSearch();
//     }
  
//     componentDidUpdate(prevProps) {
//       if(prevProps.location !== this.props.location){
//         this.checkSearch();
//       }
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.state.query} onChange={this.search}/>
//                 <ul>
//                     {this.state.results.map(page => (
//                         <li>
//                             {page.title}: {page.tags.join(`,`)}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }

//     getOrCreateIndex = () => this.index
//         ? this.index
//         // Create an elastic lunr index and hydrate with graphql query results
//         : Index.load(this.props.data.siteSearchIndex.index);

//     search = (evt) => {
//         const query = evt.target.value;
//         this.index = this.getOrCreateIndex();
//         this.setState({
//             query,
//             // Query the index with search string to get an [] of IDs
//             results: this.index.search(query)
//                 // Map over each ID and return the full document
//                 .map(({
//                 ref,
//                 }) => this.index.documentStore.getDoc(ref)),
//         });
//     }
// }

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import BlogTiles from '../components/BlogTiles'

class HomeIndex extends React.Component {

    render() {

        return (
            <Layout>
                <Helmet
                    title="Jen Lipton, Developer Page"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                />

                <Banner/>

                <div id="main">
                        <BlogTiles />
                    <section id="two">
                            <span className="archives">
                                {/* <Link to="/blog" className="detail next">To Archives</Link> */}
                            </span>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex