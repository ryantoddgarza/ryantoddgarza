const {
  TITLE,
  DESCRIPTION,
  KEYWORDS,
  IMAGE,
  SITE_URL,
  AUTHOR,
} = require('./src/constants');

const siteMetadata = {
  title: TITLE,
  titleTemplate: `%s | ${TITLE}`,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  image: IMAGE,
  url: SITE_URL,
  author: AUTHOR,
};

module.exports = {
  siteMetadata,
  pathPrefix: '/',
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
        trackingId: 'UA-107706366-2',
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
        name: 'Ryan Todd Garza',
        short_name: 'Ryan Todd Garza',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#a88f48',
        display: 'minimal-ui',
        icon: 'src/resources/images/icon.png',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
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
