module.exports = {
  siteMetadata: {
    title: "Kunal Sinha",
    author: "Kunal Sinha",
    description: "Kunal Sinha's Personal Website"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kunal Sinha Profile',
        short_name: 'Kunal Sinha Profile',
        start_url: '/',
        background_color: '#0d182e',
        theme_color: '#0d182e',
        display: 'minimal-ui',
        icon: 'src/images/icon2.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
