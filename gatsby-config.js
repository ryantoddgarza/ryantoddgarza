require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const site = require('./config');

const pathPrefix = site.pathPrefix === '/' ? '' : site.pathPrefix;

module.exports = {
  pathPrefix,
  trailingSlash: 'never',
  siteMetadata: {
    siteUrl: site.url,
    title: site.title,
    titleTemplate: `%s | ${site.title}`,
    description: site.description,
    keywords: site.keywords,
    image: site.image,
    author: site.author,
    email: site.email,
  },
  plugins: [
    // 1. first priority plugins
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GA_MEASUREMENT_ID],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    // 2.source plugins
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/resources`,
        name: 'resources',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // 3. transformer plugins
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              quality: 75,
              maxWidth: 800,
              showCaptions: ['title'],
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'hljs-',
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    // 4. other plugins
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
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
    'gatsby-plugin-netlify',
    // 5. last priority plugins
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: 'robots-txt.config.js',
      },
    },
    'gatsby-plugin-offline',
  ],
};
