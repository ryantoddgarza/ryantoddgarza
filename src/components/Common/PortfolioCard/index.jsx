import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Truncate from 'react-truncate';
import { StyledArticle, CardBody } from './styled';

const PortfolioCard = ({ title, summary, path, image }) => (
  <StyledArticle>
    <Link to={path}>
      <GatsbyImage image={getImage(image)} alt="" className="image" />
      <CardBody>
        <h5>
          <Truncate lines={1} ellipsis={<span>...</span>}>
            {title}
          </Truncate>
        </h5>
        {summary && (
          <div>
            <p>
              <Truncate lines={3} ellipsis={<span>...</span>}>
                {summary}
              </Truncate>
            </p>
            <em>Learn More</em>
          </div>
        )}
      </CardBody>
    </Link>
  </StyledArticle>
);

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  path: PropTypes.string.isRequired,
  image: PropTypes.shape({}),
};

PortfolioCard.defaultProps = {
  summary: [],
  image: {},
};

export default PortfolioCard;
