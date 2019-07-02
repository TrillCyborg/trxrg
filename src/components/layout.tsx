/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }: any) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <div style={{ backgroundColor: theme.colors.dark.background }}>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    )}
  />
)

// {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
