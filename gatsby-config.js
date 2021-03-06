module.exports = {
  siteMetadata: {
    title: `Steve Han React Developer`,
    description: `Frontend focused full stack React web developer portfolio site built using React, Gatsby, MDX, React Context API, and Material UI.`,
    author: `Steve Han`,
    titleTemplate: `%s | Steve Han Developer`,
    url: `https://www.stevehan.dev/`,
    image: `main.png`,
    twitterUsername: `@stevehanphoto`,
    siteUrl: `https://www.stevehan.dev`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SteveHanDev`,
        short_name: `Steve Han`,
        description: `Steve Han Developer Portfolio web application`,
        start_url: `/`,
        lang: `en`,
        background_color: `#252C46`,
        theme_color: `#252C46`,
        display: `standalone`,
        icon: `src/assets/stevehandev.png`,
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
        id: `GTM-T8VL9NM`,
        includeInDevelopment: true,
      },
    },
  ],
}
