import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
// ...GatsbyImageSharpFluid

const IndexPage = ({ data }) => {
  const {allMdx: {nodes: projects}} = data

  return (
    <Layout>
      <Projects projects={projects} title="Projects" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 6) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMM Do, YYYY")
          author
          category
          readTime
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

export default IndexPage
