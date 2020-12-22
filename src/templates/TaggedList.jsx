import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import TaggedList from '~/components/TaggedList';

const TaggedListTemplate = (props) => (
  <Layout {...props}>
    <TaggedList {...props} />
  </Layout>
);

export default TaggedListTemplate;

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
