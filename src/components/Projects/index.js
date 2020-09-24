import React from 'react'
import Project from './Project'
import { Paper, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  projectsTitle: {
    /*font-weight: 700;*/
    textTransform: 'uppercase',
    marginBottom: '1.2rem',
  },
  projectsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //columnGap: '1rem',
  },
  projItem: {
    placeItems: 'center',
    borderRadius: '25px',
  },
}))

const Projects = ({projects,title}) => {
  const classes = useStyles()

  return (
    <Paper square elevation={0} className={classes.root}>
      <Typography variant="h3" className={classes.projectsTitle}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {projects.map(project => {
          return (
            <Grid
              className={classes.projectItem}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
            >
              <Project key={project.id} {...project} />
            </Grid>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Projects
  
/*    <section className="projects">
      <h2 className="projects-title">{title}</h2>
      <div className="projects-container projects-center">
        <article>
          {projects.map(project => {
            return <Project key={project.id} {...project} />
          })}
        </article>
      </div>

    </section>
        */
