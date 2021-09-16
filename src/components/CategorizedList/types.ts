import type { PostFields, PostFrontmatterData } from '../Post';

export interface CategorizedListData {
  posts: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: PostFrontmatterData;
        fields: PostFields;
      };
    }[];
  };
}

export interface CategorizedListProps {
  data: CategorizedListData;
}
