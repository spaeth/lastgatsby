import React from 'react'
import prismicLogo from '../../images/logo-prismic.svg'
import { Link } from 'gatsby'

export default () => (
  <footer className="container">
    <p>
      Proudly published with
      {' '}
      <Link to="/impressum" className="banner-button">
        Impressum
      </Link>
    </p>
  </footer>
)
