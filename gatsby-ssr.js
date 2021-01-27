import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

export default  ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)
