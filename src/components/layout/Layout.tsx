import React, { Children, cloneElement } from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { POST, ALBUM } from '../../constants';
import App from '../App';
import { PostEdge, ProjectEdge } from '../../../global.d';
import type { Category, LayoutProps } from './types';

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
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
              artist
              date
              cover {
                childImageSharp {
                  gatsbyImageData(width: 1600, layout: CONSTRAINED)
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
              banner {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
            fields {
              path
            }
          }
        }
      }
    }
  `);

  const postEdges: PostEdge[] = allMarkdownRemark.edges;
  const projectEdges: ProjectEdge[] = allProjectsJson.edges;

  const albums = projectEdges.filter(({ node: { type } }) => type === ALBUM);
  const posts = postEdges.filter(
    ({
      node: {
        frontmatter: { type },
      },
    }) => type === POST || type === null
  );

  const categories: Category[] = postEdges.reduce(
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

  const hasPost = categories.length > 0;
  const hasAlbum = albums.length > 0;

  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, { posts, albums })
  );

  return (
    <App
      categories={categories}
      hasPost={hasPost}
      hasAlbum={hasAlbum}
    >
      {childrenWithProps}
    </App>
  );
};

export default Layout;
