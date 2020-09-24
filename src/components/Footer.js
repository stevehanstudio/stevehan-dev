import React from 'react'
import { Paper, Box, Typography, Grid, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SocialLinks from '../constants/socialLinks'
import { FaFileExcel } from 'react-icons/fa'

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
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifySelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    justifyItems: 'center',
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
      <Box component="div" display="inline-block" className={classes.items}>
        <SocialLinks />
      </Box>
      <Grid item className={classes.items}>
        <Typography className={classes.copyText}>
          &copy;{new Date().getFullYear()} stevehan.dev. All rights reserved
        </Typography>
      </Grid>
    </Box>
  )
}

export default Footer
