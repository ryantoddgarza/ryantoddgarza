import type { BlogPost } from '../../../public/types/contentful/generated';

export interface CategorizedListData {
  category: string;
  allContentfulBlogPost: {
    nodes: BlogPost[];
  };
}

export interface CategorizedListProps {
  data: CategorizedListData;
}
