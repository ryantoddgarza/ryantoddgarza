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
  query PostById($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishDate(formatString: "MMMM D, YYYY")
      author {
        name
      }
      category {
        name
      }
      image {
        gatsbyImage(width: 1600)
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
