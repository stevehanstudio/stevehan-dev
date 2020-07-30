import React from 'react'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {
    pageContext: { category },
  } = props

  const {
    data: {
      categories: { nodes: projects },
    },
  } = props
  return (
    <Layout>
      <Projects projects={projects} title={`category / ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMM Do, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        id
      }
    }
  }
`

export default CategoryTemplate