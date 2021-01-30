import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import { ImageCaption, Quote, Text } from '../components/slices'
import SliceZone from '../components/SliceZone';
import SEO from "../components/SEO";

// Query for the Blog Post content in Prismic
export const query = graphql`
  query PostQuery($uid: String) {
    allPrismicPost(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            body {
              ... on PrismicPostBodyText {
                slice_type
                primary {
                  columns
                  content {
                    raw
                  }
                }
              }
              ... on PrismicPostBodyFullWidthImage {
                slice_type
                primary {
                  full_width_image {
                    url
                    thumbnails
                  }
                }
              }
            }
          }
        }
      }
    }
        prismicNavigation {
      ...HeaderQuery
    }
  }
`

const Post = ({ data }) => {
  if (!data) return null
  //const post = data.prismicPost.data
    const document = data.allPrismicPost.edges[0].node
  //const document = data.allPrismicPage.edges[0].node
  const prismicNavigation = data.prismicNavigation

  return (
    <Layout navigation={prismicNavigation}>
      <SliceZone sliceZone={document.data.body} />
    </Layout>
  )
}
export default withPreview(Post)
