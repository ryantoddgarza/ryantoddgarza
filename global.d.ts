import type { PostData } from './src/components/Post';
import type { AlbumData } from './src/components/Album';

export interface SiteMetadata {
  siteUrl: string;
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  image: string;
  author: string;
  email: string;
}

export interface SiteResourceData {
  type: string;
  hide?: boolean;
  featured?: boolean;
}

export interface PostEdge {
  node: PostData;
}

export interface ProjectEdge {
  node: AlbumData;
}
