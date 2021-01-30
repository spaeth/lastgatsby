import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import '../../stylesheets/main.scss'
import Header from './Header'

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(data) => <Layout data={data} {...props} />}
  />
)

const Layout = ({ data, children, navigation }) => {
  // Define the meta title and description
  const { title, description } = data.site.siteMetadata

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'de' }}>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      </Helmet>
      <Header navigation={navigation} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
