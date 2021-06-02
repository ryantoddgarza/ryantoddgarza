import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import SEO from '~/components/Common/SEO';
import PostCard from '~/components/Common/PostCard';
import Pagination from '~/components/Common/Pagination';
import getPosts from '~/utils/getPosts';
import getPage from '~/utils/getPage';
import titleCase from '~/utils/titleCase';
import { CONTENT_PER_PAGE } from '~/constants';

const CategorizedList = ({ data }) => {
  const location = useLocation();
  const page = getPage(location);
  const [, , category] = location.pathname.split('/');
  const _posts = getPosts(data);
  const allPosts = _posts.filter(
    ({
      node: {
        frontmatter: { category: c },
      },
    }) => category === c
  );
  const postCount = allPosts.length;
  const posts = allPosts.slice(
    (page - 1) * CONTENT_PER_PAGE,
    page * CONTENT_PER_PAGE
  );

  return (
    <>
      <SEO title={titleCase(category)} />
      <div className="layout__main">
        <div className="container posts-container">
          {posts.length === 0 ? <div>No posts.</div> : null}
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
      <Pagination
        prefix={`/categories/${category}/`}
        postCount={postCount}
        location={location}
      />
    </>
  );
};

CategorizedList.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default CategorizedList;
