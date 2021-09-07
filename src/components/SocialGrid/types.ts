import { ReactNode } from 'react';

export interface SocialGridProps {
  size?: string;
  theme?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface SocialLinkList extends SocialLink {
  display: boolean;
}
