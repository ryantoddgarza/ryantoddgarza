import React from 'react';
import { Header, Title, StyledLink } from './styled';

const SectionHeader = ({ title, cta, link }) => (
  <Header>
    <Title>{title}</Title>
    <StyledLink to={link}>{cta}</StyledLink>
  </Header>
);

export default SectionHeader;
