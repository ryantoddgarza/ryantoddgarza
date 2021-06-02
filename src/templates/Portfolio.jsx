import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '~/components/layout';
import Portfolio from '~/components/Portfolio';

const PortfolioTemplate = ({ data, ...props }) => (
  <Layout {...props}>
    <Portfolio data={data} />
  </Layout>
);

export default PortfolioTemplate;

PortfolioTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query PortfolioQuery($path: String!) {
    portfolio: markdownRemark(fields: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date
        banner {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        images
      }
    }
  }
`;
