import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/Post';
import type { PostProps } from '../components/Post';

const PostTemplate: FunctionComponent<PostProps> = ({ data }: PostProps) => (
  <Layout>
    <Post data={data} />
  </Layout>
);

export default PostTemplate;

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    post: markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
        category
        tags
        banner {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
        components {
          rootId
          fileName
        }
        tweets {
          rootId
          userId
          tweetId
        }
      }
    }
  }
`;
