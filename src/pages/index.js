import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import { BlogTilesWithQuery } from '../components/BlogTiles'
import MainPage from '../components/MainPage'

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
                <MainPage />

            </Layout>
        )
    }
}

export default HomeIndex