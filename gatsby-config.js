module.exports = {
  siteMetadata: {
    title: `Steve Han Frontend Developer portfolio`,
    description: `Frontend focused full stack web developer portfolio site built using React, Gatsby, MDX, React Context API, and Material UI.`,
    author: `Steve Han`,
    titleTemplate: `%s | Steve Han React Developer`,
    url: `https://www.stevehan.dev/`,
    image: `mainBcg.png`,
    twitterUsername: `@stevehanphoto`,
    siteUrl: `http://localhost:9000`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-178415099-2`,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: ``,
        includeInDevelopment: true,
      },
    },
  ],
}
