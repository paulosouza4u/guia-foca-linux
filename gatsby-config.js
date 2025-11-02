/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    siteMetadata: {
        title: "Guia Foca Linux",
        description: "Guia Foca Linux estilizado e com busca.",
        siteUrl: "https://guiafoca.org",
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: `${__dirname}/src/content`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
    ],
};
