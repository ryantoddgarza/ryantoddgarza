import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { POST, PORTFOLIO, ALBUM } from '~/constants';
import App from '~/components/App';

const Layout = ({ children, location }) => {
  const { allProjectsJson, allMarkdownRemark } = useStaticQuery(graphql`
    query GatsbyQuery {
      allProjectsJson(
        filter: { hide: { ne: true } }
        sort: { fields: [metadata___date], order: DESC }
      ) {
        edges {
          node {
            type
            featured
            metadata {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
            fields {
              path
            }
          }
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { hide: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            html
            excerpt
            frontmatter {
              type
              title
              category
              featured
              summary
              tags
              images
            }
            fields {
              path
            }
          }
        }
      }
    }
  `);

  const postEdges = allMarkdownRemark.edges;
  const projectEdges = allProjectsJson.edges;

  const albums = projectEdges.filter(({ node: { type } }) => type === ALBUM);
  const posts = postEdges.filter(({ node: { frontmatter: { type } } }) => type === POST || type === null);
  const portfolios = postEdges.filter(({ node: { frontmatter: { type } } }) => type === PORTFOLIO);

  const categories = postEdges.reduce(
    (categories, { node }) => {
      const { category } = node.frontmatter;

      if (category === null) {
        return categories;
      }

      const [{ length: total }] = categories;
      const categoryIndex = categories.findIndex(({ key }) => key === category);

      if (categoryIndex === -1) {
        return [
          { key: '__ALL__', length: total + 1 },
          ...categories.slice(1),
          { key: category, length: 1 },
        ];
      }

      return [
        { key: '__ALL__', length: total + 1 },
        ...categories.slice(1, categoryIndex),
        { key: category, length: categories[categoryIndex].length + 1 },
        ...categories.slice(categoryIndex + 1),
      ];
    },
    [{ key: '__ALL__', length: 0 }]
  );

  const postInformations = postEdges.reduce(
    (postInformations, { node: { frontmatter, fields } }) => {
      const { type, title, summary, tags = [], category } = frontmatter;
      const { path } = fields;

      if (type === POST || type === null) {
        return [
          ...postInformations,
          {
            path,
            title,
            summary,
            tags,
            category,
          },
        ];
      }

      return postInformations;
    },
    []
  );

  const hasPost = categories.length > 0;
  const hasPortfolio = portfolios.length > 0;
  const hasAlbum = albums.length > 0;

  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, { posts, albums, portfolios }));

  return (
    <App
      location={location}
      categories={categories}
      postInformations={postInformations}
      hasPost={hasPost}
      hasPortfolio={hasPortfolio}
      hasAlbum={hasAlbum}
    >
      {childrenWithProps}
    </App>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
};

export default Layout;
