import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Albums from '~/components/Albums';

const AlbumsTemplate = props => (
  <Layout {...props}>
    <Albums {...props} />
  </Layout>
);

export default AlbumsTemplate;

export const pageQuery = graphql`
  query AlbumsQuery {
    site {
      siteMetadata {
        title
        author
        homepage
      }
    }
    albums: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "album" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            cover
          }
        }
      }
    }
  }
`;
