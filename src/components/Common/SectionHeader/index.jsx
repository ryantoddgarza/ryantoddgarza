import React from 'react';
import PropTypes from 'prop-types';
import ScopedLink from '~/components/Common/ScopedLink';
import { Header, Title } from './styled';

const SectionHeader = ({ title, linkName, linkURL }) => (
  <Header>
    <Title>{title}</Title>
    {linkName && linkURL ? <ScopedLink to={linkURL}>{linkName}</ScopedLink> : null}
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
