import React, { Children, cloneElement } from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ALBUM } from '../../constants';
import App from '../App';
import { PostEdge, ProjectEdge } from '../../../global.d';
import type { Category, LayoutProps } from './types';

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  const { allProjectsJson, allContentfulBlogPost } = useStaticQuery(graphql`
    query GatsbyQuery {
      allProjectsJson(
        filter: { hide: { ne: true } }
        sort: { fields: metadata___date, order: DESC }
      ) {
        edges {
          node {
            type
          }
        }
      }
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            category {
              name
            }
          }
        }
      }
    }
  `);

  const postEdges: PostEdge[] = allContentfulBlogPost.edges;
  const posts = postEdges;

  const projectEdges: ProjectEdge[] = allProjectsJson.edges;
  const albums = projectEdges.filter(({ node: { type } }) => type === ALBUM);

  const categories: Category[] = postEdges.reduce(
    (categories, { node }) => {
      const {
        category: { name },
      } = node;

      if (name === null) {
        return categories;
      }

      const [{ length: total }] = categories;
      const categoryIndex = categories.findIndex(({ key }) => key === name);

      if (categoryIndex === -1) {
        return [
          { key: '__ALL__', length: total + 1 },
          ...categories.slice(1),
          { key: name, length: 1 },
        ];
      }

      return [
        { key: '__ALL__', length: total + 1 },
        ...categories.slice(1, categoryIndex),
        { key: name, length: categories[categoryIndex].length + 1 },
        ...categories.slice(categoryIndex + 1),
      ];
    },
    [{ key: '__ALL__', length: 0 }]
  );

  const hasPost = posts.length > 0;
  const hasAlbum = albums.length > 0;

  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, { posts, albums })
  );

  return (
    <App categories={categories} hasPost={hasPost} hasAlbum={hasAlbum}>
      {childrenWithProps}
    </App>
  );
};

export default Layout;
