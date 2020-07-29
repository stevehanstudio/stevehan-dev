import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import { AppBar, Toolbar, Paper, Grid, Divider, IconButton, Typography, Container, Switch, Tooltip, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'

const useStyles = makeStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
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



  themeSwitch: {
    width: 60,
    height: 40,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    borderRadius: 20,
    border: `1px solid white`,
  },
  toolbar: {
//    display: "flex",
//    justifyContent: "space-evenly",
//    paddingTop: theme.spacing(3),
//    margin: theme.spacing(3),
    paddingLeft: theme.spacing(2),
//    paddingRight: theme.spacing(3),
//    background: 'white',
  },
  menuItem: {
    paddingLeft: theme.spacing(2),
//    paddingRight: theme.spacing(3),
//    width: '100px',
  }
}));

const Navbar = ({themeMode, handleToggleThemeMode}) => {
  const theme = useTheme()
  const classes = useStyles()
  //const isMobile = useMediaQuery(theme.breakpoints.up("sm"))

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
      <Paper square elevation={0}>
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
            <Typography variant="h1">Steve Han</Typography>
            <Typography variant="h5">React Developer</Typography>
          </Grid>
          <Grid container>
            <Toolbar className={classes.toolbar}>
              {menuItems.map(menuItem => {
                const { title, pageUrl } = menuItem
                return <Link to={pageUrl} className={classes.menuItem}>{title}</Link>
              })}
            </Toolbar>

            {/*<Links styleClass="nav-links" />
            <SocialLinks styleClass="nav-icons" />*/}
          </Grid>
        </Grid>
      </Paper>
    </AppBar>
  )
}

export default Navbar
