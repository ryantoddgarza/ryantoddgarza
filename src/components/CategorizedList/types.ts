import type { BlogPost } from '../../../lib/contentful/generated';

export interface CategorizedListData {
  category: string;
  allContentfulBlogPost: {
    nodes: BlogPost[];
  };
}

export interface CategorizedListProps {
  data: CategorizedListData;
}
