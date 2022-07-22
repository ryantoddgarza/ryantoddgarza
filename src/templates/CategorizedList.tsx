import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import CategorizedList from '../components/CategorizedList';
import type { CategorizedListData } from '../components/CategorizedList';

const CategorizedListTemplate: FunctionComponent<
  CategorizedListTemplateProps
> = ({ data, pageContext }: CategorizedListTemplateProps) => {
  const { category } = pageContext;

  return (
    <Layout>
      <CategorizedList data={{ ...data, category }} />
    </Layout>
  );
};

export default CategorizedListTemplate;

interface CategorizedListTemplateProps {
  data: CategorizedListData;
  pageContext: {
    category: string;
  };
}

export const pageQuery = graphql`
  query CategorizedListQuery($category: String) {
    allContentfulBlogPost(
      filter: { category: { name: { eq: $category } } }
      sort: { fields: publishDate, order: DESC }
    ) {
      nodes {
        id
        title
        slug
        description
        category {
          name
        }
        image {
          gatsbyImage(width: 800)
        }
      }
    }
  }
`;
