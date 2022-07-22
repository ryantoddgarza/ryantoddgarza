import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { PostCard } from '../../design/components';
import SEO from '../SEO';
import { POSTS_PATH } from '../../constants';
import { ListProps } from './types';

const List: FunctionComponent<ListProps> = ({ data }: ListProps) => {
  const {
    allContentfulBlogPost: { nodes: posts },
  } = data;

  return (
    <>
      <SEO title="Posts" />
      <div className="layout--margin">
        <div className="container">
          <div className="posts-container">
            {posts.map(({ id, title, slug, description, category, image }) => (
              <PostCard
                key={id}
                title={title}
                subtitle={
                  <Link to={`/categories/${category.name}`}>
                    {category.name}
                  </Link>
                }
                image={image?.gatsbyImage}
                summary={description}
                path={`${POSTS_PATH}/${slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
