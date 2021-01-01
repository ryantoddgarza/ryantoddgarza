import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Portfolios from '~/components/Portfolios';

const PortfoliosTemplate = ({ data, ...props }) => (
  <Layout {...props}>
    <Portfolios data={data} />
  </Layout>
);

export default PortfoliosTemplate;

PortfoliosTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
export const pageQuery = graphql`
  query PortfoliosQuery {
    portfolios: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "portfolio" }, hide: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            summary
            images
            date
            featured
          }
          fields {
            path
          }
        }
      }
    }
  }
`;
