import React, { useContext } from 'react'
import { Link } from 'gatsby'
import {
  AppBar,
  Toolbar,
  Paper,
  Grid,
  Button,
  IconButton,
  Typography,
  Switch,
  Hidden,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
//import { GitHubIcon, LinkedInIcon } from '@material-ui/icons'
import { MenuRounded } from '@material-ui/icons'
import { GatsbyContext } from '../context/context'
import { navLinks } from '../constants/links'
import SocialLinks from './SocialLinks'
import MobileMenu from './MobileMenu'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1,
  },
  burgerIcon: {
    position: 'absolute',
    top: '0.2rem',
    right: '0.3rem',
    zIndex: 1,
  },
  switch: {
    width: 48,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
    top: '0.5rem',
    right: '1.6rem',
    position: 'absolute',
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
    [theme.breakpoints.down('sm')]: {
      fontSize: '4.4rem',
      letterSpacing: 2,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.6rem',
      letterSpacing: 1.5,
    },
  },
  h4: {
    fontSize: '2rem', // original 2.125rem
    fontWeight: 500,
    opacity: 0.78,
    letterSpacing: 6,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
      letterSpacing: 4,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
      fontWeight: 400,
      letterSpacing: 3,
    },
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
}))

const Navbar = ({themeMode, handleToggleThemeMode}) => {
  const { showMobileMenu } = useContext(GatsbyContext)
  //const theme = useTheme()
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position="static" elevation={0}>
      <MobileMenu themeMode={themeMode} handleToggleThemeMode={handleToggleThemeMode} />
      <Paper square elevation={0} className={classes.paper}>
        <Hidden xsDown>
          <Switch
            classes={{
              root: classes.switch,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            checked={themeMode}
            onChange={handleToggleThemeMode}
          />
        </Hidden>
        <Hidden smUp>
          <IconButton
            className={classes.burgerIcon}
            onClick={showMobileMenu}
          >
            <MenuRounded />
          </IconButton>
        </Hidden>
        <Grid container alignItems="center" direction="column">
          <Grid item container alignItems="center" direction="column">
            <Typography variant="h1" className={classes.h1}>
              STEVE HAN
            </Typography>
            <Typography variant="h4" className={classes.h4}>
              React Developer
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid container>
              <Toolbar className={classes.toolbar}>
                <Grid item className={classes.menuItems}>
                  {navLinks.map(navLink => {
                    const { title, pageUrl } = navLink
                    return (
                      <Button focusRipple className={classes.iconButton}>
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
            </Grid>
          </Hidden>
        </Grid>
      </Paper>
    </AppBar>
  )
}

export default Navbar
