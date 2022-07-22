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
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
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
