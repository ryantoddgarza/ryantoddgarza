import React, { Children, cloneElement } from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ALBUM } from '../../constants';
import App from '../App';
import type { LayoutProps, BlogPostEdge, ProjectEdge } from './types';

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
            category
          }
        }
      }
    }
  `);

  const postEdges: BlogPostEdge[] = allContentfulBlogPost.edges;
  const posts = postEdges;

  const projectEdges: ProjectEdge[] = allProjectsJson.edges;
  const albums = projectEdges.filter(({ node: { type } }) => type === ALBUM);

  const categories = postEdges.reduce(
    (categories, { node }) => {
      const { category } = node;

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
