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
  query AlbumById($id: String!) {
    contentfulMusicRelease(id: { eq: $id }) {
      title
      releaseDate(formatString: "MMMM D, YYYY")
      label
      format
      upc
      copyright
      description {
        childMarkdownRemark {
          html
        }
      }
      artist {
        name
      }
      image {
        gatsbyImage(width: 3000)
      }
      tracks {
        id
        title
        videoUrl
      }
      links {
        name
        url
      }
      credits {
        name
        role
      }
      writeups {
        title
        publication
        author
        date(formatString: "MMM D, YYYY")
        url
      }
    }
  }
`;
