import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

// Wraps every page in a component
const wrapPageElement = ({ element, props }) => {
  return <PreviewStoreProvider>{element}</PreviewStoreProvider>
}

export default wrapPageElement
