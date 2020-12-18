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

AlbumsTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default AlbumsTemplate;

export const pageQuery = graphql`
  query AlbumsQuery {
    albums: allProjectsJson(
      filter: { type: { eq: "album" } }
      sort: { fields: [metadata___date], order: DESC }
    ) {
      edges {
        node {
          path
          metadata {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`;
