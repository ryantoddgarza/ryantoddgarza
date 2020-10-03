import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import { Header, Title } from './styled';

const Link = ({ data: { linkName, linkURL } }) => {
  if (linkURL.startsWith('http')) {
    return (
      <a href={linkURL} target="_blank" rel="noreferrer noopener">
        {linkName}
      </a>
    );
  }

  return <GatsbyLink to={linkURL}>{linkName}</GatsbyLink>;
};

Link.propTypes = {
  data: PropTypes.shape({
    linkName: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
  }).isRequired,
};

const SectionHeader = ({ title, linkName, linkURL }) => (
  <Header>
    <Title>{title}</Title>
    {linkName && linkURL ? <Link data={{ linkName, linkURL }} /> : null}
  </Header>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  linkName: PropTypes.string,
  linkURL: PropTypes.string,
};

SectionHeader.defaultProps = {
  linkName: '',
  linkURL: '',
};

export default SectionHeader;
