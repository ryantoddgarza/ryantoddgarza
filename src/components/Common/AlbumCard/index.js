import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StyledArticle, Cover } from './styled';

const AlbumCard = ({ title, image, path }) => (
  <StyledArticle>
    <Link to={path}>
      <Cover>
        <Img fluid={image.childImageSharp.fluid} />
      </Cover>
      <main>
        <h3>{title}</h3>
      </main>
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
