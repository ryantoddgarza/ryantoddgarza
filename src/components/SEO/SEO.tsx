import React from 'react';
import type { FunctionComponent } from 'react';
import { useLocation } from '@reach/router';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import type { SEOProps } from './types';

const SEO: FunctionComponent<SEOProps> = ({
  title,
  type,
  description,
  author,
}: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            keywords
            defaultImage: image
            defaultAuthor: author
          }
        }
      }
    `
  );

  const location = useLocation();
  const { pathname } = location;

  const {
    siteUrl,
    defaultTitle,
    titleTemplate,
    defaultDescription,
    keywords,
    defaultImage,
    defaultAuthor,
  } = site.siteMetadata;

  const seo = {
    siteName: defaultTitle,
    title: title || defaultTitle,
    type: type || 'website',
    description: description || defaultDescription,
    image: `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
    author: author || defaultAuthor,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={seo.title === defaultTitle ? null : titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={seo.author} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={seo.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ryantoddgarza" />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: undefined,
  type: undefined,
  description: undefined,
  image: undefined,
  author: undefined,
};

export default SEO;
