import React, { useState } from 'react'
import { createMuiTheme, CssBaseline, Grid, Paper, Box, Switch, Button, Divider } from '@material-ui/core'
import Header from './Header'
import Footer from './Footer'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'

// Colors Constants
const darkPrimary = "#031b40"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    overflowY: 'hidden',
    overflowX: 'hidden',
    padding: 0,
    margin: 0,
  },
  main: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
//    paddingBottom: '1000px',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    paddingBottom: '5.5rem', 
  },
  footer: {
    display: 'block',
  }
}))

const Layout = ({children}) => {
  /*const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }*/
  const [themeMode, toggleThemeMode] = useState(false)

  const lightTheme = createMuiTheme({
    typography: {
      fontFamily: ['Material Icons', 'Roboto'].join(','),
    },
    palette: {
      type: 'light',
      //primary: yellow
      text: {
        primary: darkPrimary,
      }
    },
  })

  const darkTheme = createMuiTheme({
    typography: {
      fontFamily: ['Material Icons', 'Roboto'].join(','),
    },
    palette: {
      type: 'dark',
      background: {
        //paper: '#010b13',
        paper: darkPrimary,
        //paper: 'linear- gradient(to right bottom, #430089, #82ffa1)',
        //default: '#010b13',
        default: 'linear- gradient(to right, #010b13, #050c44)',
      },
      //primary: indigo
    },
  })
  
  const handleToggleThemeMode = () => {
    toggleThemeMode(!themeMode)
  }

  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
        <Paper square elevation={0} className={classes.root}>
          <Grid container direction="column">
            <div className={classes.wrapper}>
              <Grid item container className={classes.header}>
                <Header
                  themeMode={themeMode}
                  handleToggleThemeMode={handleToggleThemeMode}
                />
              </Grid>
              <Divider />
              <Grid item container className={classes.main}>
                {children}
              </Grid>
            </div>
          </Grid>
          <Box
            component="div"
            display="block"
            alignItems="center"
            className={classes.footer}
          >
            <Footer />
          </Box>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default Layout
