import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SocialInformation, Copyright, Links } from './styled';
import { EMAIL } from '~/constants';
import SocialLinks from '~/components/Common/SocialLinks';

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
    <footer className="footer">
      <div className="content container">
        <SocialInformation>
          <SocialLinks />
        </SocialInformation>
        <Copyright>{`© ${new Date().getFullYear()} ${siteAuthor}`}</Copyright>
        <Links>
          <ul>
            <li>
              <a href="https://wiki.ryantoddgarza.com">Wiki</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>Contact</a>
            </li>
          </ul>
        </Links>
      </div>
    </footer>
  );
};

export default Footer;
