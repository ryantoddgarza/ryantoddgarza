import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StyledArticle, CardBody, Cover } from './styled';

const AlbumCard = ({ title, image, path }) => (
  <StyledArticle>
    <Link to={path}>
      <Cover>
        <Img fluid={image.childImageSharp.fluid} />
      </Cover>
      <CardBody>
        <h5>{title}</h5>
      </CardBody>
    </Link>
  </StyledArticle>
);

AlbumCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export default AlbumCard;
