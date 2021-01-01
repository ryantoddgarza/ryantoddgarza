import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '~/components/layout';
import Album from '~/components/Album';

const AlbumTemplate = ({ data, ...props }) => (
  <Layout {...props}>
    <Album data={data} />
  </Layout>
);

export default AlbumTemplate;

AlbumTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query AlbumQuery($path: String!) {
    album: projectsJson(fields: { path: { eq: $path } }) {
      type
      metadata {
        title
        artist
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        date
        format
        upc
        publishing
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
    }
  }
`;
