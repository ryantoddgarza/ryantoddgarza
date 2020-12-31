import PropTypes from 'prop-types';
import React from 'react';
import SEO from '~/components/Common/SEO';
import PortfolioCard from '~/components/Common/PortfolioCard';
import { Wrapper } from './styled';

const Portfolios = ({
  data: {
    portfolios: { edges: portfolios },
  },
}) => (
  <>
    <SEO title="Portfolios" />
    <Wrapper>
      {portfolios.map(
        ({
          node: {
            frontmatter: { title, summary, images },
            fields: { path },
          },
        }) => (
          <PortfolioCard
            key={path}
            title={title}
            summary={summary}
            path={path}
            image={images[0]}
          />
        )
      )}
    </Wrapper>
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
