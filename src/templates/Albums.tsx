import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Albums from '../components/Albums';
import type { AlbumsProps } from '../components/Albums';

const AlbumsTemplate: FunctionComponent<AlbumsProps> = ({
  data,
}: AlbumsProps) => (
  <Layout>
    <Albums data={data} />
  </Layout>
);

export default AlbumsTemplate;

export const pageQuery = graphql`
  query AlbumsQuery {
    allContentfulMusicRelease(
      filter: { type: { eq: "album" } }
      sort: { fields: releaseDate, order: DESC }
    ) {
      nodes {
        id
        slug
        title
        releaseDate
        artist {
          name
        }
        image {
          gatsbyImage(width: 1280)
        }
      }
    }
  }
`;
