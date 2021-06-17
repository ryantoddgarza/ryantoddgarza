import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import SEO from '~/components/Common/SEO';
import Pagination from '~/components/Common/Pagination';
import { PostCard } from '~/design/components';
import getPosts from '~/utils/getPosts';
import getPage from '~/utils/getPage';
import titleCase from '~/utils/titleCase';
import { CONTENT_PER_PAGE } from '~/constants';

const TaggedList = ({ data }) => {
  const location = useLocation();
  const page = getPage(location);
  const [, , tag] = location.pathname.split('/');
  const _posts = getPosts(data);
  const allPosts = _posts.filter(
    ({
      node: {
        frontmatter: { tags },
      },
    }) => tags.includes(tag)
  );
  const postCount = allPosts.length;
  const posts = allPosts.slice(
    (page - 1) * CONTENT_PER_PAGE,
    page * CONTENT_PER_PAGE
  );

  return (
    <>
      <SEO title={titleCase(tag)} />
      <div className="layout__main">
        <div className="container">
          <div className="posts-container">
            {posts.length === 0 && <div>No posts.</div>}
            {posts.map(
              ({
                node: {
                  excerpt,
                  frontmatter: { title, summary, tags, banner },
                  fields: { path },
                },
              }) => (
                <PostCard
                  key={path}
                  title={title}
                  summary={summary || excerpt}
                  path={path}
                  tags={tags}
                  image={banner}
                />
              )
            )}
          </div>
        </div>
      </div>
      <Pagination
        prefix={`/tags/${tag}/`}
        postCount={postCount}
        location={location}
      />
    </>
  );
};

TaggedList.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default TaggedList;
