import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCollection from '../components/PostCollection';
import titleCase from '../utils/titleCase';
import { BlogPost } from '../../lib/contentful/generated';

const CategorizedListTemplate: FunctionComponent<
  CategorizedListTemplateProps
> = ({ data, pageContext }: CategorizedListTemplateProps) => {
  const { category } = pageContext;
  const {
    allContentfulBlogPost: { nodes },
  } = data;

  return (
    <Layout>
      <PostCollection posts={nodes} category={titleCase(category)} />
    </Layout>
  );
};

export default CategorizedListTemplate;

interface CategorizedListTemplateProps {
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
  query CategorizedListQuery($category: String) {
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
