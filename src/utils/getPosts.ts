import { POST } from '../constants';
import type { PostData } from '../components/Post';

interface Data {
  posts: {
    edges: any[];
  }
}

interface PostEdge {
  node: PostData;
}

function getPosts(data: Data): PostEdge[] {
  const filtered = data.posts.edges.filter(
    (edge: PostEdge) => (edge?.node?.frontmatter?.type || POST) === POST
  );

  return filtered;
}

export default getPosts;
