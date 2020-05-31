module.exports = {
  siteMetadata: {
    title: `Слушай. Молись. Размышляй.`,
    description: `Вдохновляясь Словом Божьим!`,
    author: `@vann-dogg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `listen-pray-think`,
        short_name: `lpt`,
        start_url: `/`,
        background_color: `#010100`,
        theme_color: `#010100`,
        display: `minimal-ui`,
        icon: `src/images/icons/pwa-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
