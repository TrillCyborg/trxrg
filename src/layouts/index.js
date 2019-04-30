import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import './index.css'

const Layout = ({ children, data, location }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        link={[
          // { href: 'https://fonts.googleapis.com/css?family=Maven+Pro|Roboto', rel: 'stylesheet' },
          { href: 'https://fonts.googleapis.com/css?family=Fira+Mono:400|Maven+Pro:400', rel: 'stylesheet' },
          { href: 'https://pro.fontawesome.com/releases/v5.2.0/css/all.css', rel: 'stylesheet', integrity: 'sha384-TXfwrfuHVznxCssTxWoPZjhcss/hp38gEOH8UPZG/JcXonvBQ6SlsIF49wUzsGno', crossorigin: 'anonymous' },
          // { href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css', rel: 'stylesheet', integrity: 'sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO', crossorigin: 'anonymous' },
        ]}
      />
      <div>{children()}</div>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
