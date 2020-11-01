import React from 'react';
import PropTypes from 'prop-types';
import ScopedImage from '~/components/Common/ScopedImage';
import StyledArticle from './styled';

const AlbumCard = ({ title, image }) => (
  <StyledArticle>
    <ScopedImage src={image} alt={`${title} - cover`} />
    <div>
      <h3>{title}</h3>
    </div>
  </StyledArticle>
);

AlbumCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AlbumCard;
