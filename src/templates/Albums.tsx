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
    albums: allProjectsJson(
      filter: { type: { eq: "album" }, hide: { ne: true } }
      sort: { fields: [metadata___date], order: DESC }
    ) {
      nodes {
        metadata {
          title
          artist
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
          date
        }
        fields {
          path
        }
      }
    }
  }
`;
