import React from 'react';
import PropTypes from 'prop-types';
import social from './social';

const Link = ({ name, url, icon }) => (
  <a href={url} target="_blank" rel="noreferrer noopener" key={name}>
    {icon}
  </a>
);

const SocialLinks = () =>
  social.map((item) => (item.display ? Link(item) : null));

Link.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SocialLinks;
