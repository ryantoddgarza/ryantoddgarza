import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Album from '~/components/Album';

const AlbumTemplate = (props) => (
  <Layout {...props}>
    <Album {...props} />
  </Layout>
);

export default AlbumTemplate;

export const pageQuery = graphql`
  query AlbumQuery($path: String!) {
    album: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        artist
        title
        cover
        metadata {
          date
          format
          upc
          publishing
          tracks {
            title
            runtime
            lyrics
            video
          }
        }
        credits {
          name
          role
        }
        links {
          distributor
          url
        }
      }
    }
  }
`;
