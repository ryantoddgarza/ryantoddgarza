import PropTypes from 'prop-types';
import React from 'react';
import SEO from '~/components/Common/SEO';
import PortfolioCard from '~/components/Common/PortfolioCard';

const Portfolios = ({
  data: {
    portfolios: { edges: portfolios },
  },
}) => (
  <>
    <SEO title="Portfolios" />
    <div>
      {portfolios.map(
        ({
          node: {
            frontmatter: { title, summary, banner },
            fields: { path },
          },
        }) => (
          <PortfolioCard
            key={path}
            title={title}
            summary={summary}
            path={path}
            image={banner}
          />
        )
      )}
    </div>
  </>
);

Portfolios.propTypes = {
  data: PropTypes.shape({
    portfolios: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Portfolios;
