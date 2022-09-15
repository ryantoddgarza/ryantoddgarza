import type { BlogPost } from '../../../public/types/contentful/generated';

export interface ListData {
  allContentfulBlogPost: {
    nodes: BlogPost[];
  };
}

export interface ListProps {
  data: ListData;
}
