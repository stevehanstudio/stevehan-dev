import React from 'react'
import { Link } from 'gatsby-theme-material-ui'
import Layout from '../components/Layout'
import { Paper, Typography, Button, Grid, makeStyles } from '@material-ui/core'
import SEO from '../components/seo'

const useStyles = makeStyles(theme => ({
   paper: {
      width: '100vw',
   },
}))

const NotFoundPage = () => {
   const classes = useStyles()

   return (
     <Layout>
       <SEO title="404 error page not found" />
       <Paper className={classes.paper}>
         <Grid
           container
           alignContent="center"
           alignItems="center"
           justifyContent="center"
           direction="column"
         >
           <Grid item alignItems="center">
             <Typography variant="h2">404</Typography>
           </Grid>
           <Grid item alignItems="center">
             <Typography variant="h5">
               Sorry, the page you tried cannot be found
             </Typography>
           </Grid>
           <Grid item alignItems="center">
             <Button>
               <Link to="/" className="btn">
                 back home
               </Link>
             </Button>
           </Grid>
         </Grid>
       </Paper>
     </Layout>
   )
}

export default NotFoundPage

/*
   <section className="error-page">
      <div className="page-center">
        <span>404</span>
      </div>
    </section>
 */