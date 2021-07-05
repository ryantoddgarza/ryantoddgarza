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
      siteMetadata {
        title
        description
      }
    }
    posts: allMarkdownRemark(
      filter: { frontmatter: { hide: { ne: true } } }
      sort: {
        order: [DESC, ASC]
        fields: [frontmatter___date, frontmatter___title]
      }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            type
            title
            category
            tags
            date
            summary
            banner {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          fields {
            path
          }
        }
      }
    }
  }
`;
