import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import TaggedList from '../components/TaggedList';
import type { TaggedListData } from '../components/TaggedList';

const TaggedListTemplate: FunctionComponent<TaggedListTemplateProps> = ({
  data,
}: TaggedListTemplateProps) => (
  <Layout>
    <TaggedList data={data} />
  </Layout>
);

export default TaggedListTemplate;

interface TaggedListTemplateProps {
  data: TaggedListData;
}

export const pageQuery = graphql`
  query TaggedListQuery {
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
