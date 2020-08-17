import React, {useState} from 'react'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/SEO'
import { Divider } from '@material-ui/core'
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
    console.log(skill)
    console.log(selectedSkills)
    setSelectedSkills({ 
      ...selectedSkills, 
      [skill]: !selectedSkills[skill]
    })
    console.log(selectedSkills)
  }

  const { allMdx: { nodes: projects } } = data

  //const skills = ["react","javascript"]
  //console.log(projects)
  const skills = {}
  
  projects.map(project => {
    project.frontmatter.skills.map(skill => {
      if (!(skill in skills)) {        
        skills[skill] = true
        //        setSelectedSkills({[skill]: true})
      }
    })
    //console.log(skills)
  })

  const [selectedSkills, setSelectedSkills] = useState(skills)
  //console.log(selectedSkills)
  /*
  skills.forEach(skill => {
    {selectedSkills.push({name: skill, selected: true})}
  })
*/
  return (
    <Layout>
      <Skills skills={selectedSkills} handleToggleSkill={handleToggleSkill} title="Skills Selected" />
      <Divider />
      <Projects projects={projects} title="Projects" />
    </Layout>
  )
} 

/*export const query = graphql`
  {
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
`
*/
export default IndexPage
