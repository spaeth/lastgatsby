import React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import Post from '../templates/post'
import Page from '../templates/page'
import Homepage from './index'
import Layout from '../components/layouts'

const Page404 = () => (
 <Layout>
  <div className="not-found">
    <h1>404</h1>
    <h3>The page you are looking for was not found</h3>
    <p>
      <a href="/">
        <button type="button">Return to homepage</button>
      </a>
    </p>
  </div>
 </Layout>
)

export default withUnpublishedPreview(Page404, {
  templateMap: {
    post: Post,
    page: Page,
    prismicPost: Post,
    prismicPage: Page,
  },
})
