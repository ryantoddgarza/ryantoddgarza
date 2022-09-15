import type { BlogPost } from '../../../public/types/contentful/generated';

export interface PostProps {
  data: {
    contentfulBlogPost: BlogPost;
  };
}
