import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import List from '~/components/List';

const ListTemplate = ({ data, ...props }) => (
  <Layout {...props}>
    <List data={data} />
  </Layout>
);

export default ListTemplate;

ListTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query ListQuery {
    site {
      ...SiteInformation
    }
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
