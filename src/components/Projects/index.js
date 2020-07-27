import React from 'react'
import Project from './Project'
import Banner from '../Banner'
const Projects = ({projects,title}) => {
  return (
    <section className="projects">
      <h2 className="projects-title">{title}</h2>
      <div className="projects-container projects-center">
        <article>
          {projects.map(project => {
            return <Project key={project.id} {...project} />
          })}
        </article>
      </div>

    </section>
  )
}

export default Projects
