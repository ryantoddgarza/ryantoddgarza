import type { BlogPost } from '../../../lib/contentful/generated';

export interface PostsProps {
  category?: string;
  posts: BlogPost[];
}
