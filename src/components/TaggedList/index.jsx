import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import SEO from '~/components/Common/SEO';
import PostsWrapper from '~/components/Common/PostsWrapper';
import PostCard from '~/components/Common/PostCard';
import Pagination from '~/components/Common/Pagination';
import getPosts from '~/utils/getPosts';
import getPage from '~/utils/getPage';
import titleCase from '~/utils/titleCase';
import { CONTENT_PER_PAGE } from '~/constants';

const TaggedList = ({ data }) => {
  const location = useLocation();
  const page = getPage(location);
  const [, , tag] = location.pathname.split('/');
  const allPosts = data
    |> getPosts
    |> ((posts) => posts.filter(({ node: { frontmatter: { tags } } }) => tags.includes(tag)));
  const postCount = allPosts.length;
  const posts = allPosts.slice((page - 1) * CONTENT_PER_PAGE, page * CONTENT_PER_PAGE);

  return (
    <>
      <SEO title={titleCase(tag)} />
      <PostsWrapper>
        {posts.map(
          ({
            node: {
              excerpt,
              frontmatter: { title, summary, tags, images },
              fields: { path },
            },
          }) => (
            <PostCard
              key={path}
              title={title}
              summary={summary || excerpt}
              path={path}
              tags={tags}
              image={images[0]}
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
};

export default TaggedList;
