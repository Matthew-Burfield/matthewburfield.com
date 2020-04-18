module.exports = {
  siteMetadata: {
    title: ``,
    author: {
      name: `Matthew Burfield,`,
      summary: `a software engineer from Brisbane, with a passion for building cool shit on the interwebs.`,
    },
    description: `A blog about the cool software things Matt is working on.`,
    siteUrl: `https://matthewburfield.com/`,
    social: {
      twitter: `burfield12`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-162047547-1', // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: 'GTM-5HJX52F',
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_self`,
              rel: `nofollow`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          getBlogFeed({
            filePathRegex: `//content/blog//`,
            blogUrl: 'https://matthewburfield.com/',
            output: '/blog/rss.xml',
            title: 'Matthew Burfield Blog RSS Feed',
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `matthewburfield.com`,
        short_name: `matthewburfield.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// Borrowed from kentcdodds.com
function getBlogFeed({ filePathRegex, blogUrl, ...overrides }) {
  /**
   * These RSS feeds can be quite expensive to generate. Limiting the number of
   * posts and keeping each item's template lightweight (only using frontmatter,
   * avoiding the html/excerpt fields) helps negate this.
   */
  return {
    serialize: ({ query: { allMdx } }) => {
      const stripSlash = slug => (slug.startsWith('/') ? slug.slice(1) : slug)
      return allMdx.edges.map(edge => {
        const url = `${siteUrl}/${stripSlash(edge.node.fields.slug)}`

        return {
          ...edge.node.frontmatter,
          date: edge.node.fields.date,
          url,
          guid: url,
          custom_elements: [
            {
              'content:encoded': `<div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
                  <p>
                    I've posted a new article <em>"${edge.node.frontmatter.title}"</em> and you can <a href="${url}">read it online</a>.
                    <br>
                    ${edge.node.fields.plainTextDescription}
                  </p>
                </div>`,
            },
          ],
        }
      })
    },
    query: `
       {
         allMdx(
           limit: 25,
           filter: {
             frontmatter: {published: {ne: false}}
             fileAbsolutePath: {regex: "${filePathRegex}"}
           }
           sort: { order: DESC, fields: [frontmatter___date] }
         ) {
           edges {
             node {
               fields {
                 slug
                 date
                 plainTextDescription
               }
               frontmatter {
                 title
               }
             }
           }
         }
       }
     `,
    ...overrides,
  }
}
