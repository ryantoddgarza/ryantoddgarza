import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import PortfolioCard from '~/components/Common/PortfolioCard';
import { PREFIX } from '~/constants';
import { Wrapper } from './styled';

const Portfolios = ({
  data: {
    portfolios: { edges: portfolios },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}Portfolios`}</title>
      <meta name="og:title" content={`${PREFIX}Portfolios`} />
    </Helmet>
    {portfolios.map(
      ({
        node: {
          frontmatter: { path, title, summary, images = [] },
        },
      }) => {
        const [image = null] = images;

        return (
          <Link to={path} key={path}>
            <PortfolioCard
              title={title}
              summary={summary}
              image={image}
            />
          </Link>
        );
      }
    )}
  </Wrapper>
);

Portfolios.propTypes = {
  data: PropTypes.shape({
    portfolios: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Portfolios;
