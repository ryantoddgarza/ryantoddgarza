import type { BlogPost } from '../../../lib/contentful/generated';

export interface PostCollectionProps {
  category?: string;
  posts: BlogPost[];
}
