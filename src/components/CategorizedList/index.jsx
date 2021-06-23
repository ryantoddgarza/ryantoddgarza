import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { PostCard } from '../../design/components';
import SEO from '~/components/Common/SEO';
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
