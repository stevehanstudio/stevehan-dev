import React from 'react'
import Project from './Project'
import { Paper, Box, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import styled from "styled-components"

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
    //border: '1px solid white',
    //columnGap: '1rem',
  },
  projItem: {
    placeItems: 'center',
//    boxShadow: '4px 4px 8px 2px rgba(255,255,255,1)',
//    border: '1px solid white',
//    borderRadius: '25px',
  },
}))

const ProjectWrapper = styled(Project)`
    border: '4px solid white';
    box-shadow: '4px 4px 8px 4px rgba(255,255,255,1)';
`

const Projects = ({projects,title}) => {
  const classes = useStyles()
  
  return (
    <Paper square elevation={0} className={classes.root}>
      <Box ml={2} mr={2}>
        <Typography variant="h3" className={classes.projectsTitle}>
          {title}
        </Typography>
        <Grid container spacing={3} className={classes.projectsContainer}>
          {projects.map(project => {
            return (
              <Grid
                key={project.id}
                className={classes.projItem}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
              >
                <ProjectWrapper {...project} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
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
