import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Posts from '../components/Posts';
import titleCase from '../utils/titleCase';
import { BlogPost } from '../../lib/contentful/generated';

const CategorizedPostsTemplate: FunctionComponent<
  CategorizedPostsTemplateProps
> = ({ data, pageContext }: CategorizedPostsTemplateProps) => {
  const { category } = pageContext;
  const {
    allContentfulBlogPost: { nodes },
  } = data;

  return (
    <Layout>
      <Posts posts={nodes} category={titleCase(category)} />
    </Layout>
  );
};

export default CategorizedPostsTemplate;

interface CategorizedPostsTemplateProps {
  data: {
    allContentfulBlogPost: {
      nodes: BlogPost[];
    };
  };
  pageContext: {
    category: string;
  };
}

export const pageQuery = graphql`
  query CategorizedPostsQuery($category: String) {
    allContentfulBlogPost(
      filter: { category: { eq: $category } }
      sort: { fields: publishDate, order: DESC }
    ) {
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
