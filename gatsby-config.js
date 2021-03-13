const site = require('./config');

const pathPrefix = site.pathPrefix === '/' ? '' : site.pathPrefix;

module.exports = {
  pathPrefix,
  siteMetadata: {
    siteUrl: site.url,
    siteName: site.title,
    titleTemplate: `%s – ${site.title}`,
    description: site.description,
    image: site.image,
    author: site.author,
    email: site.email,
    twitter: site.twitter,
  },
  plugins: [
    // First-priority plugins
    // Other plugins
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: site.title,
        short_name: site.shortName,
        start_url: site.pathPrefix,
        background_color: site.backgroundColor,
        theme_color: site.themeColor,
        display: 'minimal-ui',
        icon: site.favicon,
      },
    },
    // Last-priority plugins
  ],
};
