import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { SiteResourceData } from '../../../global.d';

export interface PostFields {
  path: string;
}

interface PostComponentData {
  rootId: string;
  fileName: string;
}

interface TweetData {
  rootId: string;
  userId: string;
  tweetId: string;
}

export interface PostFrontmatterData extends SiteResourceData {
  title: string;
  date: string;
  category: string;
  tags?: string[];
  summary?: string;
  banner?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    name: string;
  };
  components?: PostComponentData[];
  tweets?: TweetData[];
}

export interface PostData {
  fields: PostFields;
  frontmatter: PostFrontmatterData;
  html: string;
  timeToRead?: number;
  excerpt?: string;
}

export interface PostProps {
  data: {
    post: PostData;
  };
}
