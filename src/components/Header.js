import React from 'react'
//import { Link } from 'gatsby-theme-material-ui'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import { AppBar, Toolbar, Paper, Grid, Divider, Button, IconButton, Typography, Container, Switch, Tooltip, useMediaQuery, Grow } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
//import { GitHubIcon, LinkedInIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: 48,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
    position: 'absolute',
    top: '0.5rem',
    right: '1.6rem',
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(22px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},

  paper: {
    position: 'relative',
    flexGrow: 1,
  },
  h1: {
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: theme.spacing(1),
    lineHeight: 1.05,
  },
  h4: {
    fontSize: '1.8rem', // original 2.125rem
    fontWeight: 500,
    opacity: 0.78,
    letterSpacing: 4,
  },
  themeSwitch: {
    width: 58,
    height: 40,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    borderRadius: 20,
    border: `1px solid white`,
  },
  toolbar: {
    width: '100vw',
    flexGlow: 1,
    //    display: "flex",
    //    justifyContent: "space-evenly",
    //    paddingTop: theme.spacing(3),
    //    margin: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    //    paddingRight: theme.spacing(3),
    //    background: 'white',
    paddingBottom: 0,
    marginBottom: 0,
    //    lineHeight: 1,
        minHeight: '52px',
  },
  menuItems: {
    flexGrow: 1,
  },
  iconButton: {
    maxHeight: '44px',
    color: 'red',
    paddingRight: '30px',
  },
  menuItem: {
    fontSize: '1.1rem',
    paddingLeft: theme.spacing(2),
    //    lineHeight: 1,
    color: theme.palette.text.primary,
    opacity: 0.7,
    textDecoration: 'none',
    paddingBottom: 0,
    marginBottom: 0,
    //    paddingRight: theme.spacing(3),
    //    width: '100px',
    '&:hover': {
      opacity: 1,
      textDecoration: 'none',
    },
    '&:active': {
      opacity: 1,
    },
  },
  /*  socialLinks: {
    flexGrow: 1,
  }*/
}))

const Navbar = ({themeMode, handleToggleThemeMode}) => {
  const theme = useTheme()
  const classes = useStyles()
  //const isMobile = useMediaQuery(theme.breakpoints.up("sm"))

  //console.log(theme.typography.h1)
  const menuItems = [
    {
      title: 'HOME',
      pageURL: '/'
    },
    {
      title: 'ABOUT',
      pageUrl: '/about'
    },
    {
      title: 'CONTACT',
      pageUrl: '/contact'
    }
  ]

  return (
    <AppBar position="relative" elevation={0}>
      <Paper square elevation={0} className={classes.paper}>
        <Switch
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          checked={themeMode}
          onChange={handleToggleThemeMode}
        />
        <Grid container alignItems="center" direction="column">
          <Grid item container alignItems="center" direction="column">
            <Typography variant="h1" className={classes.h1}>
              STEVE HAN
            </Typography>
            <Typography variant="h4" className={classes.h4}>
              React Developer
            </Typography>
          </Grid>
          <Grid container>
            <Toolbar className={classes.toolbar}>
              <Grid item className={classes.menuItems}>
                {menuItems.map(menuItem => {
                  const { title, pageUrl } = menuItem
                  return (
                    <Button className={classes.iconButton}>
                      <Link to={pageUrl} className={classes.menuItem}>
                        {title}
                      </Link>
                    </Button>
                  )
                })}
              </Grid>
              <Grid item className={classes.socialLinks}>
                <SocialLinks />
              </Grid>
            </Toolbar>
            {/*<Links styleClass="nav-links" />*/}
          </Grid>
        </Grid>
      </Paper>
    </AppBar>
  )
}

export default Navbar
