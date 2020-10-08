import React from 'react';
import { Link } from 'gatsby';
import { EMAIL } from '~/constants';
import SocialLinks from '~/components/Common/SocialLinks';
import {
  FooterWrapperOuter,
  FooterWrapperInner,
  SocialInformation,
  Copyright,
  Links,
} from './styled';

const Footer = () => (
  <FooterWrapperOuter>
    <FooterWrapperInner>
      <SocialInformation>
        <SocialLinks />
      </SocialInformation>
      <Copyright>{`© ${new Date().getFullYear()} Ryan Todd Garza`}</Copyright>
      <Links>
        <ul>
          <li>
            <Link to="/pages/1">Blog</Link>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`}>Contact</a>
          </li>
        </ul>
      </Links>
    </FooterWrapperInner>
  </FooterWrapperOuter>
);

export default Footer;
