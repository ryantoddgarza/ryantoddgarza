import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { PostCard } from '../../design/components';
import SEO from '../SEO';
import Pagination from '../Pagination';
import getPosts from '../../utils/getPosts';
import getPage from '../../utils/getPage';
import titleCase from '../../utils/titleCase';
import { CONTENT_PER_PAGE } from '../../constants';
import type { TaggedListProps } from './types';

const TaggedList: FunctionComponent<TaggedListProps> = ({
  data,
}: TaggedListProps) => {
  const location = useLocation();
  const page = getPage(location);
  const [, , tag] = location.pathname.split('/');
  const _posts = getPosts(data);
  const allPosts = _posts.filter(({ node }) =>
    node?.frontmatter?.tags?.includes(tag)
  );
  const postCount = allPosts.length;
  const posts = allPosts.slice(
    (page - 1) * CONTENT_PER_PAGE,
    page * CONTENT_PER_PAGE
  );

  return (
    <>
      <SEO title={titleCase(tag)} />
      <div className="layout--margin">
        <div className="container">
          <div className="posts-container">
            {posts.length === 0 && <div>No posts.</div>}
            {posts.map(
              ({
                node: {
                  excerpt,
                  frontmatter: { title, summary, category, banner },
                  fields: { path },
                },
              }) => (
                <PostCard
                  key={path}
                  title={title}
                  subtitle={
                    <Link to={`/categories/${category}/1`}>{category}</Link>
                  }
                  summary={summary || excerpt}
                  path={path}
                  image={banner}
                />
              )
            )}
          </div>
        </div>
        <Pagination
          prefix={`/tags/${tag}/`}
          postCount={postCount}
          location={location}
        />
      </div>
    </>
  );
};

export default TaggedList;
