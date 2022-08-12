import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SocialGrid from '../SocialGrid';
import FooterDirectory from '../FooterDirectory';
import type { FooterProps } from './types';

const Footer: FunctionComponent<FooterProps> = ({
  categories,
}: FooterProps) => {
  const {
    site: {
      siteMetadata: { siteAuthor },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteAuthor: author
        }
      }
    }
  `);

  const content = {
    copyright: `© ${new Date().getFullYear()} ${siteAuthor}`,
  };

  return (
    <div className="footer container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="social">
            <div className="social-group">
              <SocialGrid />
            </div>
          </div>
          <div className="directory">
            <FooterDirectory categories={categories} />
          </div>
          <div className="legal">
            <div>{content.copyright}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
