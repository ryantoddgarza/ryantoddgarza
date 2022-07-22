import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface CategorizedListData {
  category: string;
  allContentfulBlogPost: {
    nodes: {
      id: string;
      title: string;
      slug: string;
      description: string;
      category: {
        name: string;
      };
      image: {
        gatsbyImage: IGatsbyImageData;
      }
    }[];
  };
}

export interface CategorizedListProps {
  data: CategorizedListData;
}
