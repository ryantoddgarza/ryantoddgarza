const site = require('./config');

const pathPrefix = site.pathPrefix === '/' ? '' : site.pathPrefix;

module.exports = {
  pathPrefix,
  siteMetadata: {
    siteUrl: site.url,
    title: site.title,
    titleTemplate: `%s | ${site.title}`,
    description: site.description,
    keywords: site.keywords,
    image: site.image,
    author: site.author,
  },
  plugins: [
    // First-priority plugins
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [site.gaMeasurementId, site.uaMeasurementId],
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
    // Other plugins
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
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
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
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: site.url,
        sitemap: `${site.url}/sitemap.xml`,
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: [],
            crawlDelay: 10,
          },
        ],
      },
    },
    // Last-priority plugins
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
};
