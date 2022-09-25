import type { BlogPost } from '../../../lib/contentful/generated';

export interface PostProps {
  data: {
    contentfulBlogPost: BlogPost;
  };
}
