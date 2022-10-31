import type { GatsbyConfig } from "gatsby";

const title = process.env.TITLE || 'travel-app'
const description =
   process.env.DESCRIPTION || 'Static travel app with to test framer-motion'
const image = process.env.IMAGE || '/pageImg.png'
const siteUrl = process.env.URL || 'http://localhost:9000'
const sitemapName = 'sitemap.xml'

const config: GatsbyConfig = {
   siteMetadata: {
      title: title,
      description: description,
      image: image,
      siteUrl: siteUrl,
      twitterUsername: `Georgi`,
   },
   // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
   // If you use VSCode you can also use the GraphQL plugin
   // Learn more at: https://gatsby.dev/graphql-typegen
   graphqlTypegen: true,
   plugins: [
      "gatsby-plugin-styled-components",
      "gatsby-plugin-image",
      "gatsby-transformer-sharp",
      "gatsby-transformer-javascript-frontmatter",
      "gatsby-plugin-sitemap",
      {
         resolve: `gatsby-plugin-sharp`,
         options: {
            // Defaults used for gatsbyImageData and StaticImage
            defaults: {
               quality: 100
            },
         },
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            "name": "images",
            "path": "./src/images/"
         },
         __key: "images"
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `pages`,
            path: `./src/pages/`,
         },
         __key: "pages"
      },
      {
         resolve: "gatsby-plugin-react-svg",
         options: {
            rule: {
               include: /images\/assets/,
            }
         }
      },
      {
         resolve: 'gatsby-plugin-robots-txt',
         options: {
            host: siteUrl,
            sitemap: `${siteUrl}/${sitemapName}`,
            policy: [{ userAgent: '*', allow: '/' }],
         },
      },
   ]
};

export default config;
