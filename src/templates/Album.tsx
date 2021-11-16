import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Album from '../components/Album';
import type { AlbumProps } from '../components/Album';

const AlbumTemplate: FunctionComponent<AlbumProps> = ({ data }: AlbumProps) => (
  <Layout>
    <Album data={data} />
  </Layout>
);

export default AlbumTemplate;

export const pageQuery = graphql`
  query AlbumByPath($path: String!) {
    album: projectsJson(fields: { path: { eq: $path } }) {
      metadata {
        title
        artist
        cover {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
        date
        format
        label
        sku
        upc
        copyright
      }
      tracks {
        title
        runtime
        lyrics
        video
      }
      credits {
        name
        role
      }
      links {
        distributor
        url
      }
      praise {
        publication
        title
        author
        date
        url
      }
    }
  }
`;
