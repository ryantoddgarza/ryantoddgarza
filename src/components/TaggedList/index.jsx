import React from 'react';
import PropTypes from 'prop-types';
import SEO from '~/components/Common/SEO';
import PostsWrapper from '~/components/Common/PostsWrapper';
import PostCard from '~/components/Common/PostCard';
import Pagination from '~/components/Common/Pagination';
import getPosts from '~/utils/getPosts';
import getPage from '~/utils/getPage';
import { CONTENT_PER_PAGE } from '~/constants';

const TaggedList = ({ data, location }) => {
  const page = getPage(location);
  const [, , tag] = location.pathname.split('/');
  const allPosts = data
    |> getPosts
    |> ((posts) => posts.filter(({ node: { frontmatter: { tags } } }) => tags.includes(tag)));
  const postCount = allPosts.length;
  const posts = allPosts.slice((page - 1) * CONTENT_PER_PAGE, page * CONTENT_PER_PAGE);

  return (
    <>
      <SEO title={tag} />
      <PostsWrapper>
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaggedList;
