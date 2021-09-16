import { ReactNode } from 'react';

export interface SocialGridProps {
  size?: string;
  theme?: string;
}

export interface SocialLinkData {
  name: string;
  url: string;
  icon: ReactNode;
}

export interface SocialLinkListItem extends SocialLinkData {
  display: boolean;
}
