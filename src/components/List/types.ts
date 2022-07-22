import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ListData {
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

export interface ListProps {
  data: ListData;
}
