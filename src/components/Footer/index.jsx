import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CONTACT_PATH } from '~/constants';
import SocialLinks from '~/components/Common/SocialLinks';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteAuthor: author
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { siteAuthor },
    },
  } = data;

  const content = {
    links: [
      { name: 'Wiki', url: 'https://wiki.ryantoddgarza.com' },
      { name: 'Contact', url: CONTACT_PATH },
    ],
  };

  return (
    <footer className="footer">
      <div className="content container">
        <div className="social">
          <SocialLinks />
        </div>
        <div className="copyright">{`© ${new Date().getFullYear()} ${siteAuthor}`}</div>
        <div className="links">
          <ul>
            {content.links.map(({ name, url }) => (
              <li className="item" key={name}>
                <a className="link" href={url}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
