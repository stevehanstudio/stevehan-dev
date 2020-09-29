import React, { useState } from 'react'
import { createMuiTheme, CssBaseline, Grid, Paper, Box, Divider, Typography } from '@material-ui/core'
import Header from './Header'
import Footer from './Footer'
import { ThemeProvider, makeStyles, useTheme, responsiveFontSizes } from '@material-ui/core/styles'
// Colors Constants
const darkPrimary = "#031b40"
//const darkPrimary = 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'

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
  },
}))

const Layout = ({children}) => {
  const [themeMode, toggleThemeMode] = useState(false)

  let lightTheme = createMuiTheme({
    typography: {
      fontFamily: ['Material Icons', 'Roboto'].join(','),
      h3: {
        fontSize: '2rem',
        '@media (min-width:600px)': {
          fontSize: '2.4rem',
        },
        '@media (min-width:960px)': {
          fontSize: '3rem',
        },
      },
      h5: {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.3rem',
        },
        '@media (min-width:960px)': {
          fontSize: '1.4rem',
        },
      },
    },
    palette: {
      type: 'light',
      //primary: yellow
      text: {
        primary: darkPrimary,
      },
      background: {
        secondary: 'rgb(255,255,255,0.6)',
      },
    },
  })

  let darkTheme = createMuiTheme({
    typography: {
      fontFamily: [
        'Material Icons',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
      ].join(','),
      h3: {
        fontSize: '2rem',
        '@media (min-width:600px)': {
          fontSize: '2.4rem',
        },
        '@media (min-width:960px)': {
          fontSize: '3rem',
        },
      },
      h5: {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.3rem',
        },
        '@media (min-width:960px)': {
          fontSize: '1.4rem',
        },
      },
    },
    palette: {
      type: 'dark',
      background: {
        //paper: '#010b13',
        secondary: 'rgb(0,0,0,0.6)',
        paper: darkPrimary,
        //paper: 'linear- gradient(to right bottom, #430089, #82ffa1)',
        //default: '#010b13',
        default: 'linear- gradient(to right, #010b13, #050c44)',
      },
      //primary: indigo
    },
  })

  //lightTheme = responsiveFontSizes(lightTheme)  
  //darkTheme = responsiveFontSizes(darkTheme)

  const handleToggleThemeMode = () => {
    toggleThemeMode(!themeMode)
  }

  const theme = useTheme()
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
