module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-163895747-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `matthewburfield`,
    author: `Matthew Burfield`,
    description: `Personal blog of Matthew Burfield`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/burfield12`,
      },
      {
        name: `github`,
        url: `https://github.com/matthew-burfield`,
      },
    ],
  },
}
