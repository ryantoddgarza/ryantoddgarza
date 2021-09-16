import type { ReactNode } from 'react';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface PostCardProps {
  title: string;
  subtitle?: string | ReactNode;
  summary?: string;
  path: string;
  image?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  aspect?: string;
  theme?: string;
}
