import React from 'react'
import Layout from '../components/Layout'
import { Paper, Grid, Typography, Divider } from '@material-ui/core'
import SEO from '../components/seo'

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Paper square elevation={0}>
        <Typography variant="h3">About</Typography>
        <Grid container mt={2} pt={2}>
          <Typography variant="h4">About Me</Typography>
          <Typography>Coming soon</Typography>
        </Grid>
        <Divider />
      </Paper>
    </Layout>
  )
}

export default About
