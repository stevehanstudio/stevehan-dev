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
            subtitle
            slug
            date(formatString: "MMM Do, YYYY")
            author
            skills
            website
            github
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

  const { allMdx: { nodes: projects } } = data

  const tempSkills = {}
  const [skills, setSkills] = useState(tempSkills)
  const [showAll, setShowAll] = useState(true)

  const handleToggleSkill = skill => {
    const tmpSkills = {}
    if (showAll) {
      Object.keys(skills).map(s => {
        //console.log(`In handleToggleSkill: skill=${skill}, s=${s}, tmpSkills=${tmpSkills}`)
        if (s === skill) {
          tmpSkills[s] = true
        } else {
          tmpSkills[s] = false
        }
      })
      console.log("tmpSkills", tmpSkills)
      setSkills(tmpSkills)
      setShowAll(false)
    } else {
      // should we handle setShowAll
      setSkills({
        ...skills,
        [skill]: !skills[skill],
      })
      console.log("handleToggleSkills setting skills!", skill, skills)
    }
    console.log('handleToggleSkills', skill, skills)
  }

  projects.map(project => {
    project.frontmatter.skills.map(skill => {
      if (tempSkills[skill] === undefined) {        
        tempSkills[skill] = false
        //console.log(`Setting skill: ${skill}`)
      }
      //console.log('frontmatter', project, skill, tempSkills)
    })
  })
//  setSkills(tempSkills)

  /*  projects.map(project => {
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
  })*/

  console.log('skills in index', skills)

  return (
    <Layout>
      {/*<SEO title="Home" />*/}
      {/*      <Skills 
        skills={skills} 
        showAll={showAll}
        handleToggleSkill={handleToggleSkill} 
        title="Skills" />
      <Divider />*/}
      <Box mt={3} mb={3}>
        <Projects projects={projects} title="Projects" />
      </Box>
    </Layout>
  )
} 

export default IndexPage
