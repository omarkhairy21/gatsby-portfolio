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
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Khairy`,
          short_name: `Khairy`,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#03A9F4`,
          display: `minimal-ui`,
          icon: `./static/monster_512X512.png`,        
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
          theme_color_in_head: false,
        },
      },
      'gatsby-transformer-remark',
      {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACING_ID || "none",
        },
      }  
  ]
}