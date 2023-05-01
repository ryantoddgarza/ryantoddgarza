import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCollection from '../components/PostCollection';
import { BlogPost } from '../../lib/contentful/generated';

const PostsTemplate: FunctionComponent<PostsTemplateProps> = ({
  data,
}: PostsTemplateProps) => {
  const {
    allContentfulBlogPost: { nodes },
  } = data;

  return (
    <Layout>
      <PostCollection posts={nodes} />
    </Layout>
  );
};

export default PostsTemplate;

interface PostsTemplateProps {
  data: {
    allContentfulBlogPost: {
      nodes: BlogPost[];
    };
  };
}

export const pageQuery = graphql`
  query PostsQuery {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      nodes {
        id
        title
        slug
        description
        category
        image {
          gatsbyImage(width: 800)
        }
      }
    }
  }
`;
