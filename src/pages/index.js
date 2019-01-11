import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import BlogTiles from '../components/BlogTiles'
import Puppies from '../components/Puppies';
import PageTransition from 'gatsby-plugin-page-transitions';

class HomeIndex extends React.Component {

    state = {
        isPuppiesHappening: false
    }
    
    togglePuppies() {
        const { isPuppiesHappening: localPuppies } = this.state;
        if (!localPuppies) this.activatePuppies();
        this.setState({ isPuppiesHappening: localPuppies ? false : true })
    }

    activatePuppies() {

    }

    render() {

        const { isPuppiesHappening } = this.state; 

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner/>

                <Puppies active={isPuppiesHappening} />

                <div id="main">
                        <BlogTiles />
                    <section id="two">
                            <Link to="/landing" className="detail next">To Archives</Link>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex