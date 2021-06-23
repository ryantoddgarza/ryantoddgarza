import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { PostCard } from '../../design/components';
import SEO from '~/components/Common/SEO';
import Pagination from '~/components/Common/Pagination';
import getPosts from '~/utils/getPosts';
import getPage from '~/utils/getPage';
import { CONTENT_PER_PAGE } from '~/constants';

const List = ({ data }) => {
  const location = useLocation();
  const page = getPage(location);
  const allPosts = getPosts(data);
  const postCount = allPosts.length;
  const posts = allPosts.slice(
    (page - 1) * CONTENT_PER_PAGE,
    page * CONTENT_PER_PAGE
  );

  return (
    <>
      <SEO title="Posts" />
      <div className="layout__main">
        <div className="container">
          <div className="posts-container">
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
      <Pagination postCount={postCount} location={location} />
    </>
  );
};

List.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default List;
