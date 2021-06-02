import React from 'react';
import PropTypes from 'prop-types';
import SEO from '~/components/Common/SEO';
import basename from '../../utils/basename';
import { Wrapper, PortfolioDescription, PortfolioImages } from './styled';

const Portfolio = (props) => {
  const {
    data: {
      portfolio: {
        frontmatter: { title, images },
        html,
      },
    },
  } = props;

  return (
    <>
      <SEO title={title} />
      <Wrapper>
        <PortfolioDescription>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </PortfolioDescription>
        {images && (
          <PortfolioImages>
            {images.map((image) => (
              <img
                key={basename(image)}
                src={require(`~/pages/portfolios/${image}`).default}
                alt={basename(image)}
              />
            ))}
          </PortfolioImages>
        )}
      </Wrapper>
    </>
  );
};

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
