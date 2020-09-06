import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title, StyledLink } from './styled';

const SectionHeader = ({ title, link, path }) => (
  <Header>
    <Title>{title}</Title>
    {link ? <StyledLink to={path}>{link}</StyledLink> : null}
  </Header>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  path: PropTypes.string,
};

export default SectionHeader;
