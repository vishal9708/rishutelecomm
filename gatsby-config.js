module.exports = {
  siteMetadata: {
    title: `Rishu Telecom`,
    siteUrl: `https://vishalkr.netlify.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rishu Telecom`,
        short_name: `rishuTelecom`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
