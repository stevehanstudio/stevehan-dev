import React from 'react'
import Layout from '../components/Layout'
import { Paper, Typography, Grid, Divider } from '@material-ui/core'

const About = () => {
  return (
    <Layout>
      <Paper square elevation={0}>
        <Typography variant="h3">
          About
        </Typography>
        <Typography>
          This website is for all the project managers, human resource personels, recruiters interested in learning more about my skills in software development. 
        </Typography>
        <Divider />
        <Typography variant="h4">
          About Me
        </Typography>
      </Paper>      
    </Layout>
  )
}

export default About
