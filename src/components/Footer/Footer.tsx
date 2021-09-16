import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CONTACT_PATH } from '../../constants';
import SocialGrid from '../SocialGrid';

const Footer: FunctionComponent = () => {
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
    links: [
      { name: 'Wiki', url: 'https://wiki.ryantoddgarza.com' },
      { name: 'Contact', url: CONTACT_PATH },
    ],
    copyright: `© ${new Date().getFullYear()} ${siteAuthor}`,
  };

  return (
    <footer className="footer">
      <div className="content container">
        <div className="social">
          <SocialGrid />
        </div>
        <div className="copyright">{content.copyright}</div>
        <div className="links">
          {content.links.map(({ name, url }) => (
            <div className="item" key={name}>
              <a className="link" href={url}>
                {name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
