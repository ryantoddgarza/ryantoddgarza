import React, { Children, cloneElement } from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import App from '../App';
import type { LayoutProps, BlogPostEdge } from './types';

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  const { allContentfulBlogPost, allContentfulMusicRelease } =
    useStaticQuery(graphql`
      query GatsbyQuery {
        allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
          edges {
            node {
              category
            }
          }
        }
        allContentfulMusicRelease {
          edges {
            node {
              id
            }
          }
        }
      }
    `);

  const postEdges: BlogPostEdge[] = allContentfulBlogPost.edges;
  const posts = postEdges;
  const hasPost = posts.length > 0;

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

  const albums = allContentfulMusicRelease.edges;
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
