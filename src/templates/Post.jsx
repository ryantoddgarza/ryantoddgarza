import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '~/components/layout';
import Post from '~/components/Post';

const PostTemplate = ({ data, ...props }) => (
  <Layout {...props}>
    <Post data={data} />
  </Layout>
);

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    post: markdownRemark(fields: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        banner {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
        category
        tags
        date
        components {
          rootId
          fileName
        }
        tweets {
          rootId
          userId
          tweetId
        }
        summary
      }
    }
  }
`;
