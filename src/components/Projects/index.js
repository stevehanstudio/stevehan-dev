import React from 'react'
import Project from './Project'
import Banner from '../Banner'
import { Paper, Typography } from '@material-ui/core'
const Projects = ({projects,title}) => {
  return (<Paper square elevation={0}>
    <Typography variant="h1">Projects Page</Typography>
    <Typography variant="h1">Projects Page</Typography>
    <Typography variant="h1">Projects Page</Typography>
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
