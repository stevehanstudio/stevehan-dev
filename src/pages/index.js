import React, {useState} from 'react'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/SEO'
import { Box, Divider } from '@material-ui/core'
import { spacing } from '@material-ui/system'

// ...GatsbyImageSharpFluid

//const IndexPage = ({ data }) => {
const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 8) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMM Do, YYYY")
            author
            skills
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          id
        }
      }
    }
  `)

  const handleToggleSkill = skill => {
    setSkills({
      ...skills, 
      [skill]: !skills[skill]
    })
    console.log("handleToggleSkills", skills)
  }

  const { allMdx: { nodes: projects } } = data

  const featuredSkills = ["React", "Javascript", "NodeJS"]
  const moreSkills = []
  const tempSkills = {}
  const [skills, setSkills] = useState(tempSkills)
  
  projects.map(project => {
    project.frontmatter.skills.map(skill => {
      console.log("frontmatter", skill, featuredSkills)
      if (featuredSkills.includes(skill)) {        
        tempSkills[skill] = true
        console.log("Setting skill to true")
      }
      else {
        if (!moreSkills.includes(skill)) {
          moreSkills.push(skill)
          tempSkills[skill] = true
        }
        console.log("Setting to false", moreSkills)
      }
    })
    console.log(skills)
  })

  return (
    <Layout>
      <Skills 
        featuredSkills={featuredSkills}
        moreSkills={moreSkills} 
        skills={skills} 
        handleToggleSkill={handleToggleSkill} 
        title="Skills" />
      <Divider />
      <Box mt={3} mb={3}>
        <Projects projects={projects} title="Projects" />
      </Box>
    </Layout>
  )
} 

export default IndexPage
