import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import CategorizedList from '../components/CategorizedList';
import type { CategorizedListData } from '../components/CategorizedList';

const CategorizedListTemplate: FunctionComponent<CategorizedListTemplateProps> =
  ({ data }: CategorizedListTemplateProps) => (
    <Layout>
      <CategorizedList data={data} />
    </Layout>
  );

export default CategorizedListTemplate;

interface CategorizedListTemplateProps {
  data: CategorizedListData;
}

export const pageQuery = graphql`
  query CategorizedListQuery {
    posts: allMarkdownRemark(
      filter: { frontmatter: { hide: { ne: true } } }
      sort: {
        order: [DESC, ASC]
        fields: [frontmatter___date, frontmatter___title]
      }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            type
            title
            category
            tags
            date
            summary
            banner {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          fields {
            path
          }
        }
      }
    }
  }
`;
