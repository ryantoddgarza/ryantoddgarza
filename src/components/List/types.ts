import type { PostFields, PostFrontmatterData } from '../Post';

export interface ListData {
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

export interface ListProps {
  data: ListData;
}
