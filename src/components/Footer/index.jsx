import React from 'react';
import { FooterWrapper, Copyright } from './styled';

const Footer = () => (
  <FooterWrapper>
    <Copyright>
      {`© ${new Date().getFullYear()} Ryan Todd Garza`}
    </Copyright>
  </FooterWrapper>
);

export default Footer;
