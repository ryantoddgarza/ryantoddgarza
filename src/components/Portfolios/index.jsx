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
            frontmatter: { path, title, summary, images = [] },
          },
        }) => {
          const [image = null] = images;

          return (
            <PortfolioCard
              key={path}
              title={title}
              summary={summary}
              path={path}
              image={image}
            />
          );
        }
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
