import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { POSTS_PATH, EMAIL } from '~/constants';
import SocialLinks from '~/components/Common/SocialLinks';
import {
  FooterWrapperOuter,
  FooterWrapperInner,
  SocialInformation,
  Copyright,
  Links,
} from './styled';

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteAuthor: author
        }
      }
    }
  `);

  const { siteAuthor } = site.siteMetadata;

  return (
    <FooterWrapperOuter>
      <FooterWrapperInner>
        <SocialInformation>
          <SocialLinks />
        </SocialInformation>
        <Copyright>{`© ${new Date().getFullYear()} ${siteAuthor}`}</Copyright>
        <Links>
          <ul>
            <li>
              <Link to={`${POSTS_PATH}/1`}>Blog</Link>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>Contact</a>
            </li>
          </ul>
        </Links>
      </FooterWrapperInner>
    </FooterWrapperOuter>
  );
};

export default Footer;
