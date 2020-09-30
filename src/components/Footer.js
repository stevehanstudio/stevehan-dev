import React from 'react'
import { Box, Typography, Grid, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SocialLinks from './SocialLinks'

const useStyles = makeStyles(theme => ({
  root: {
//    display: 'block',
//    position: 'absolute',
//    bottom: 0,
    width: '100%',
//    height: '5.5rem',
    alignContent: 'center',
    alignItems: 'center',
  }, 
  container: {
    display: 'block',
    alignContent: 'center',
    alignItems: 'center',
  },
  items: {
    display: 'block',
    position: 'relative',
    width: '100%',
    paddingTop: '1rem',
    textAlign: 'center',
  },
  copyText: {
    letterSpacing: '0.2rem',
    fontWeight: 300,
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Box
      component="div"
      display="block"
      variant="outlined"
      alignItems="center"
      elevation={0}
      className={classes.root}
    >
      <Divider />
{/*      <Box component="div" display="inline-block" className={classes.items}>
        <SocialLinks />
      </Box>*/}
      <Grid item className={classes.items}>
        <Typography className={classes.copyText}>
          &copy;{new Date().getFullYear()} Steve Han. All rights reserved
        </Typography>
      </Grid>
    </Box>
  )
}

export default Footer
