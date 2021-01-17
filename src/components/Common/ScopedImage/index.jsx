import React from 'react';
import PropTypes from 'prop-types';

const ScopedImage = ({ src, alt }) => {
  if (!src) {
    return null;
  }

  return (
    <img
      src={src.includes('//') ? src : require(`~/resources/${src}`)}
      alt={alt}
    />
  );
};

ScopedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

ScopedImage.defaultProps = {
  alt: '',
};

export default ScopedImage;
