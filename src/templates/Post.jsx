import React from 'react';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Post from '~/components/Post';

const PostTemplate = (props) => (
  <Layout {...props}>
    <Post {...props} />
  </Layout>
);

export default PostTemplate;

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
            fluid {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        images
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
