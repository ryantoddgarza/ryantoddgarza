import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface PostData {
  title: string;
  publishDate: string;
  author: {
    name: string;
  };
  category: {
    name: string;
  };
  image?: {
    gatsbyImage: IGatsbyImageData;
  };
  content: {
    childMarkdownRemark: {
      html: string;
    };
  };
}

export interface PostProps {
  data: {
    contentfulBlogPost: PostData;
  };
}
