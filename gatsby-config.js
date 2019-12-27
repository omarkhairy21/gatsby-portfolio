module.exports = {
  siteMetadata: {
    title: 'Khairy',
    author: 'Omar Khairy'
  },
  plugins: [
      {
          resolve: 'gatsby-source-contentful',
          options: {
              spaceId: '3csvu99xklh5',
              accessToken: 'idriLLqjq04FgWfm4SbTMdPVzswKTAh6k_qax4AZLYA'
          }
      },
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
      'gatsby-plugin-sitemap',    
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Khairy`,
          short_name: `Khairy`,
          description:`Software Developer facilitated to Build Scalable, MainTainable Testable Web Applications`,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#03A9F4`,
          display: `minimal-ui`,
          lang: `en`,
          icon: `./static/monster_512X512.png`,        
          //theme_color_in_head: false,
          // icons: [
          //   {
          //     src: './static/icon_128X128.png',
          //     sizes: '128x128',
          //     type: 'image/png',
          //   },
          //   {
          //     src: './static/icon_256X256.png',
          //     sizes: '256x256',
          //     type: 'image/png',
          //   },
          //   {
          //     src: './static/icon_512X512.png',
          //     sizes: '512x512',
          //     type: 'image/png',
          //   },
          // ],
        },
      },
      'gatsby-plugin-sharp',
      `gatsby-transformer-sharp`,
      'gatsby-transformer-remark',
      {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACING_ID || "none",
        },
      },
      {
        resolve: `gatsby-plugin-netlify`,
        options: {
          headers: {
            '/*.js': ['cache-control: public, max-age=31536000, immutable'],
            '/*.css': ['cache-control: public, max-age=31536000, immutable'],
            '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
          },
        },
      }, 
  ]
}