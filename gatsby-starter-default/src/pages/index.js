import * as React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import Seo from "../components/seo"
import { Grid, Typography } from '@mui/material'

const IndexPage = () => (
  <Layout>
    <Grid container spacing={0} direction="row" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={6} alignItems="center" justifyContent="center">
        <Logo />
      </Grid>
      <Grid item xs={6} style={{textAlign: "center"}}>
        <Typography variant="h5">next-gen social commerce</Typography>
        <Typography variant="h5">available soon</Typography>
        <Typography variant="h5">🌎 🌍 🌏</Typography>
      </Grid>
    </Grid>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
