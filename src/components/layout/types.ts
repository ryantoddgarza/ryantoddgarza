import type { ReactNode } from 'react';
import type { AlbumData } from '../Album';
import type { BlogPost } from '../../../public/types/contentful/generated';

export interface BlogPostEdge {
  node: BlogPost;
}

export interface ProjectEdge {
  node: AlbumData;
}

export interface LayoutProps {
  children: ReactNode;
}
