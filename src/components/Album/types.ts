import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { SiteResourceData } from '../../../global.d';

export interface AlbumFields {
  path: 'string';
}

export interface AlbumMetadata {
  title: string;
  artist: string;
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    name: string;
  };
  date: string;
  format: string;
  label: string;
  sku: string;
  upc: string;
  copyright: string;
}

export interface TrackData {
  title: string;
  runtime: string;
  lyrics?: string;
  video?: string;
}

export interface CreditData {
  name: string;
  role: string;
}

export interface LinkData {
  distributor: string;
  url: string;
}

export interface PraiseData {
  publication: string;
  title: string;
  author?: string;
  date: string;
  url: string;
}

export interface AlbumData extends SiteResourceData {
  fields: AlbumFields;
  metadata: AlbumMetadata;
  tracks: TrackData[];
  credits: CreditData[];
  links: LinkData[];
  praise: PraiseData[];
}

export interface AlbumProps {
  data: {
    album: AlbumData;
  };
}
