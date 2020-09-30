import React from 'react';
import SocialLinks from '~/components/Common/SocialLinks';
import {
  FooterWrapperOuter,
  FooterWrapperInner,
  SocialInformation,
  Copyright,
} from './styled';

const Footer = () => (
  <FooterWrapperOuter>
    <FooterWrapperInner>
      <SocialInformation>
        <SocialLinks />
      </SocialInformation>
      <Copyright>{`© ${new Date().getFullYear()} Ryan Todd Garza`}</Copyright>
    </FooterWrapperInner>
  </FooterWrapperOuter>
);

export default Footer;
