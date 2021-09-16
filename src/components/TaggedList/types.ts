import type { PostFields, PostFrontmatterData } from '../Post';

export interface TaggedListData {
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

export interface TaggedListProps {
  data: TaggedListData;
}
