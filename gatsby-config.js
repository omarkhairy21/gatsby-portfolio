module.exports = {
  siteMetadata: {
    title: 'Khairy',
    author: 'Omar Khairy'
  },
  plugins: [
      'gatsby-plugin-sass',
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve:'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
      },
      'gatsby-transformer-remark'
  ]
}