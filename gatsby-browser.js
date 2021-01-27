import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <PreviewStoreProvider {...props}>{element}</PreviewStoreProvider>
}
