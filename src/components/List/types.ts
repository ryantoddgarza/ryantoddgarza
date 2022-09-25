import type { BlogPost } from '../../../lib/contentful/generated';

export interface ListData {
  allContentfulBlogPost: {
    nodes: BlogPost[];
  };
}

export interface ListProps {
  data: ListData;
}
