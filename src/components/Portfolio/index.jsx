import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';
import ScopedImage from '~/components/Common/ScopedImage';
import { Wrapper, PortfolioDescription, PortfolioImages } from './styled';

const Portfolio = ({
  data: {
    portfolio: {
      frontmatter: { title, images },
      html,
    },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}${title}`}</title>
      <meta name="og:title" content={`${PREFIX}${title}`} />
    </Helmet>
    <PortfolioDescription>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </PortfolioDescription>
    {images ? (
      <PortfolioImages>
        {images.map((image) => (
          <ScopedImage key={image} src={image} alt={title} />
        ))}
      </PortfolioImages>
    ) : null}
  </Wrapper>
);

Portfolio.propTypes = {
  data: PropTypes.shape({
    portfolio: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
      }).isRequired,
      html: PropTypes.string,
    }),
  }).isRequired,
};

export default Portfolio;
