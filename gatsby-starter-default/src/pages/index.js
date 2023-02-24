import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "../images/logo.png"
import { Grid, Typography, createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 400,
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.0rem',
      },
    },
    h3: {
      fontWeight: 300,
    },
  },
});


const IndexPage = () => (
  <Layout>
    <ThemeProvider theme={theme}>
      <Grid container
            sx={{ flexDirection: { xs: "column", lg: "row"} }}
            spacing={2}
            alignItems="center"
            style={{ height: '100vh' }}
      >
        <Grid item xs={12} lg={6} style={{textAlign: "center"}}>
          <img src={logo} alt="Curato Logo" />
        </Grid>
        <Grid item xs={12} lg={6} style={{textAlign: "center"}}>
          <Typography variant="h3">merchants 🤝 influencers</Typography>
          <br />
          <Typography variant="h3">available soon</Typography>
          <br />            
          <Typography variant="h1">🌎 🌍 🌏</Typography>              
        </Grid>
      </Grid>
    </ThemeProvider>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
