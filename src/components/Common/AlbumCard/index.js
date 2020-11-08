import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ScopedImage from '~/components/Common/ScopedImage';
import StyledArticle from './styled';

const AlbumCard = ({ title, image, path }) => (
  <StyledArticle>
    <Link to={path}>
      <ScopedImage src={image} alt={`${title} cover`} />
      <div>
        <h3>{title}</h3>
      </div>
    </Link>
  </StyledArticle>
);

AlbumCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default AlbumCard;
