import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import PostsWrapper from '~/components/Common/PostsWrapper';
import PostCard from '~/components/Common/PostCard';
import Pagination from '~/components/Common/Pagination';
import getPosts from '~/utils/getPosts';
import getPage from '~/utils/getPage';
import { PREFIX, CONTENT_PER_PAGE } from '~/constants';

const List = ({ data, location }) => {
  const page = getPage(location);
  const allPosts = getPosts(data);
  const postCount = allPosts.length;
  const posts = allPosts.slice((page - 1) * CONTENT_PER_PAGE, page * CONTENT_PER_PAGE);

  return (
    <>
      <PostsWrapper>
        <Helmet>
          <title>
            {`${PREFIX}Posts`}
          </title>
          <meta name="og:title" content={`${PREFIX}Posts`} />
        </Helmet>
        {posts.map(
          ({
            node: {
              frontmatter: { title, summary, tags, path, images },
            },
          }) => (
            <PostCard
              key={path}
              title={title}
              summary={summary}
              tags={tags}
              path={path}
              images={images}
            />
          )
        )}
      </PostsWrapper>
      <Pagination postCount={postCount} location={location} />
    </>
  );
};

List.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default List;
