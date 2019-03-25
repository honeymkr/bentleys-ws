require("dotenv").config()


module.exports = {
  siteMetadata: {
    title: "Bentley's Bakery",
    description: "Cafe and bakery located in Danville, Vermont",
    url: "https://bentleysbakeryvt.com",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-images-contentful`,
          options: {
            maxHeight: 700,
            backgroundColor: 'red',
            linkImagesToOriginal: false,
          },
        }, ],
      },
    },
    
    {

      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },

    
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
      }
    }
  ],
}