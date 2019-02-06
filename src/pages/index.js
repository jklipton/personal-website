import React from 'react'
import { Link } from 'gatsby'
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
                >
                </Helmet>

                <Banner/>

                <div id="main">
                        <BlogTiles />
                    <section id="two">
                            <span className="archives">
                                <Link to="/landing" className="detail next">To Archives</Link>
                            </span>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex