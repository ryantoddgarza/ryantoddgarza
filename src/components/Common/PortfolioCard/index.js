import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Truncate from 'react-truncate';
import ScopedImage from '~/components/Common/ScopedImage';
import { StyledArticle, CardBody } from './styled';

const PortfolioCard = ({ title, summary, path, image }) => (
  <StyledArticle>
    <Link to={path}>
      <ScopedImage src={image} alt={title} />
      <CardBody>
        <h5>{title}</h5>
        {summary ? (
          <>
            <p>
              <Truncate lines={3} ellipsis={<span>...</span>}>
                {summary}
              </Truncate>
            </p>
            <em>Learn More</em>
          </>
        ) : null}
      </CardBody>
    </Link>
  </StyledArticle>
);

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

PortfolioCard.defaultProps = {
  summary: [],
};

export default PortfolioCard;
