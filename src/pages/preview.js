import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layouts'

import linkResolver from '../utils/linkResolver'

const PreviewPage = ({ isPreview, isLoading }) => {
  const previewText = isPreview ? 'Loading' : 'Not a preview!'
  return (
    <Layout>
      <p>{previewText}</p>
    </Layout>
  )
}

/*const PreviewPage = ({ isPreview }) => {
  if (isPreview === false) return 'Not a preview!'
  return (
      <p>Vorschau wird geladen ...</p>
  )
}*/

export default (props) => {
  const data = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "gatsby-source-prismic" }) {
        pluginOptions {
          repositoryName
        }
      }
    }
  `)
  const { repositoryName } = data.sitePlugin.pluginOptions
  return withPreviewResolver(PreviewPage, {
    repositoryName,
    linkResolver: () => (doc) => linkResolver(doc),
  })(props)
}

/*export default withPreviewResolver(PreviewPage, {
  repositoryName: 'spaeth',
  linkResolver,
})*/