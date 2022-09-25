import type { ReactNode } from 'react';
import type { BlogPost } from '../../../lib/contentful/generated';

export interface BlogPostEdge {
  node: BlogPost;
}

export interface LayoutProps {
  children: ReactNode;
}
