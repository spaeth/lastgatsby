import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

exports.wrapPageElement = ({ element, props }) => {
  return <PreviewStoreProvider>{element}</PreviewStoreProvider>
}