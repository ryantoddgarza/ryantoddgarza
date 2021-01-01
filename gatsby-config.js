const website = require('./config/website');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
  pathPrefix,
  siteMetadata: {
    siteUrl: website.url,
    title: website.title,
    titleTemplate: `%s | ${website.title}`,
    description: website.description,
    keywords: website.keywords,
    image: website.image,
    author: website.author,
  },
  plugins: [
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: website.googleAnalyticsId,
        respectDNT: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.shortName,
        start_url: website.pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'minimal-ui',
        icon: website.favicon,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: website.url,
        sitemap: `${website.url}/sitemap.xml`,
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
  ],
};
