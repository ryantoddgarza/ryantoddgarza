import { graphql } from 'gatsby';

export const SiteInformation = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
      author
      homepage
    }
  }
`;
