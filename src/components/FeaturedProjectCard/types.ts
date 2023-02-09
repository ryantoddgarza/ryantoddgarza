import type { IGatsbyImageData } from 'gatsby-plugin-image';

export interface FeaturedProjectCardProps {
  name: string;
  descriptionHTML: string;
  projectLink?: string;
  gitHubLink?: string;
  techList?: string[];
  image?: IGatsbyImageData;
  imageAlt?: string;
}
