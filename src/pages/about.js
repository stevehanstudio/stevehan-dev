import React from 'react'
import Layout from '../components/Layout'
import { Paper, Box, Typography, Divider } from '@material-ui/core'

const About = () => {
  return (
    <Layout>
      <Paper square elevation={0}>
        <Typography variant="h3">About</Typography>
        <Box mt={2} pt={2}>
          <Typography>Coming soon</Typography>
        </Box>
        <Divider />
      </Paper>
    </Layout>
  )
}

export default About
