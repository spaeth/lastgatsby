import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

const wrapPageElement = ({ element, props }) => {
  return <PreviewStoreProvider>{element}</PreviewStoreProvider>
}

export default wrapPageElement
