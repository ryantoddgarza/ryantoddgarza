import React from 'react';
import PropTypes from 'prop-types';
import SEO from '~/components/Common/SEO';
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
  <>
    <SEO title={title} />
    <Wrapper>
      <PortfolioDescription>
        <h1>{title}</h1>
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
  </>
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
