import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '~/components/layout';
import Albums from '~/components/Albums';

const AlbumsTemplate = ({ data, ...props }) => (
  <Layout {...props}>
    <Albums data={data} />
  </Layout>
);

export default AlbumsTemplate;

AlbumsTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query AlbumsQuery {
    albums: allProjectsJson(
      filter: { type: { eq: "album" } }
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
