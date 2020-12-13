import { POST } from '~/constants';

const getPosts = (data) =>
  data.posts.edges.filter(({ node: { frontmatter: { type } } }) => (
    (type || POST) === POST
  ));

export default getPosts;
