/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: `0`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
