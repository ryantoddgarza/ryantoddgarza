import React from 'react';
import { FaRegEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { EMAIL, GITHUB_ID, INSTAGRAM_ID, LINKEDIN_ID } from '~/constants';
import { FooterWrapper, SocialInformation, Copyright } from './styled';

const Footer = () => (
  <FooterWrapper>
    <SocialInformation>
      {EMAIL ? (
        <a href={`mailto:${EMAIL}`} rel="noreferrer noopener">
          <FaRegEnvelope />
        </a>
      ) : null}
      {GITHUB_ID ? (
        <a
          href={`https://github.com/${GITHUB_ID}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
      ) : null}
      {LINKEDIN_ID ? (
        <a
          href={`https://www.linkedin.com/in/${LINKEDIN_ID}/`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin />
        </a>
      ) : null}
      {INSTAGRAM_ID ? (
        <a
          href={`https://instagram.com/${INSTAGRAM_ID}/`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagram />
        </a>
      ) : null}
    </SocialInformation>
    <Copyright>{`© ${new Date().getFullYear()} Ryan Todd Garza`}</Copyright>
  </FooterWrapper>
);

export default Footer;
