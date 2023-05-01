import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { PostCard } from '../PostCard';
import SEO from '../SEO';
import { CATEGORIES_PATH, POSTS_PATH } from '../../constants';
import { PostsProps } from './types';

const Posts: FunctionComponent<PostsProps> = ({
  posts,
  category,
}: PostsProps) => (
  <div className="module">
    <SEO title={category ?? 'Posts'} />
    <div className="container">
      <div className="post-grid">
        {posts.map(({ id, title, slug, description, category, image }) => (
          <PostCard
            key={id}
            title={title}
            subtitle={
              <Link to={`${CATEGORIES_PATH}/${category}`}>{category}</Link>
            }
            image={image?.gatsbyImage}
            summary={description}
            path={`${POSTS_PATH}/${slug}`}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Posts;
