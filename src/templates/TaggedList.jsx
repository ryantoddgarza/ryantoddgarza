import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import TaggedList from '~/components/TaggedList';

const TaggedListTemplate = ({ data, ...props }) => (
  <Layout {...props}>
    <TaggedList data={data} />
  </Layout>
);

export default TaggedListTemplate;

TaggedListTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query TaggedListQuery {
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
