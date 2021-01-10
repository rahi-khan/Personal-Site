//// Configurations for the site

module.exports = {
    //! Site Meta Data
    siteMetadata: {
        title: "Gatsby Template Pro",
        description: `A starter template for Gatsby.js projects`,
        author: `Rahi Khan`,
        siteUrl: `https://gatsby-template-pro.netlify.app/`,
    },

    //! External Gatsby Plugins
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        `gatsby-transformer-json`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `./src/data/`,
                ignore: [`**/\.*`], //! ignore files starting with a dot
            },
        },

        //! "Offline-plugin" will always be after "Manifest-plugin"
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Template Pro`,
                short_name: `Gatsby Template Pro`,
                description: `A starter template for Gatsby.js projects`,
                lang: `en`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                display: `standalone`,
                icon: `./src/images/icon.png`,
            },
        },
        "gatsby-plugin-offline",
    ],
};
