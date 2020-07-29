import React from 'react'
import { paper, Typography, Grid } from '@material-ui/core'
import SocialLinks from '../constants/socialLinks'

const Footer = () => {
  return (
    <paper variant="outlined" elevation={0}>
      <Grid container justify="center">
        <Grid item>
          {/*<SocialLinks styleClass="nav-icons" />*/}
          <Typography>&copy;{new Date().getFullYear()} stevehan.dev.  All rights reserved</Typography>
        </Grid>
      </Grid>
    </paper>
  )
}

export default Footer
