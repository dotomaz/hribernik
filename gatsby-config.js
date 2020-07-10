module.exports = {
  siteMetadata: {
    title: `Aleš Hribernik`,
    description: `Sem Hribernik Aleš, muzikant doma s Polzele. Na klavirsko harmoniko sem začel igrati  pred tridesetimi leti. 
    Pri triindvajsetih letih sem si kupil še diatonično harmoniko, malo pred tem pa še synthesizer. 
    Skupaj s prijatelji smo šli snemati s triom in pevko v studio. Na CD-ju so same avtorske skladbe in besedila. 
    Ansambel je bil ustanovljen kot trio, kasneje smo se pa preoblikovali v kvintet. 
    Zaradi obveznosti članov je ansambel razpadel, zato sedaj igram sam kot "one man band".`,
    author: `@dotomaz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
