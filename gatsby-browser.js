import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

module.exports.wrapPageElement = ({ element, props }) => {
  return <PreviewStoreProvider>{element}</PreviewStoreProvider>
}
