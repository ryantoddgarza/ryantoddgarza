import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import List from '../components/List';
import type { ListData } from '../components/List';

const ListTemplate: FunctionComponent<ListTemplateProps> = ({
  data,
}: ListTemplateProps) => (
  <Layout>
    <List data={data} />
  </Layout>
);

export default ListTemplate;

interface ListTemplateProps {
  data: ListData;
}

export const pageQuery = graphql`
  query ListQuery {
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
