/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
      title: `Guia Foca Linux`,
      description: `Guia Foca Linux estilizado e com busca.`,
      siteUrl: `https://guiafoca.org`,
  },
  plugins: [
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `data`,
              path: `${__dirname}/data`,
          },
      },
      "gatsby-plugin-mdx",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
  ],
}
