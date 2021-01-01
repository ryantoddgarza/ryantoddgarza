import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import CategorizedList from '~/components/CategorizedList';

const CategorizedListTemplate = ({ data, ...props }) => (
  <Layout {...props}>
    <CategorizedList data={data} />
  </Layout>
);

export default CategorizedListTemplate;

CategorizedListTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query CategorizedListQuery {
    posts: allMarkdownRemark(
      filter: { frontmatter: { hide: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            type
            title
            category
            images
            tags
            date
            summary
          }
          fields {
            path
          }
        }
      }
    }
  }
`;
