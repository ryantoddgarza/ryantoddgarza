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
  plugins: ['gatsby-plugin-styled-components'],
};
