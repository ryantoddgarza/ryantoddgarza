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
