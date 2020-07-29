import React, { useState } from 'react'
import { createMuiTheme, CssBaseline, Grid, Paper, Switch, Button, Divider } from '@material-ui/core'
import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeProvider } from '@material-ui/core/styles'

const Layout = ({children}) => {
  /*const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }*/
  const [themeMode, toggleThemeMode] = useState(false)

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      //primary: yellow
    }
  })

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      //primary: indigo
    }
  })
  
  const handleToggleThemeMode = () => {
    toggleThemeMode(!themeMode)
    console.log(themeMode)
  }

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>        
        <Paper square elevation={0}>
          <Grid container direction="column">
            <Grid item container>
              <Navbar 
                themeMode={themeMode} 
                handleToggleThemeMode={handleToggleThemeMode}   
              />
            </Grid>
            <Divider />
            <Grid item container>
              {children}
            </Grid>
            <Divider />
            <Grid item>
              <Footer />
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default Layout
