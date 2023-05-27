import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../SEO';

const Landing: FunctionComponent = () => {
  const {
    aboutTextBlock,
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query LandingQuery {
      aboutTextBlock: contentfulTextBlock(
        contentful_id: { eq: "3SuARzclwfWYiDg41lEVDu" }
      ) {
        content {
          childMarkdownRemark {
            html
          }
        }
      }
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  const content = Object.freeze({
    about: {
      html: aboutTextBlock?.content?.childMarkdownRemark?.html,
    },
    contact: {
      emailLink: {
        text: 'Send me an email',
        href: `mailto:${siteMetadata.email}`,
      },
    },
  });

  return (
    <div className="landing">
      <SEO />
      <div className="content">
        <div className="grid">
          <div className="cell">
            <h2 className="h3">About</h2>
          </div>
          <div
            className="cell markdown"
            dangerouslySetInnerHTML={{ __html: content.about.html }}
          />
          <div className="cell">
            <h2 className="h3">Contact</h2>
          </div>
          <div className="cell">
            <a
              className="button large light"
              href={content.contact.emailLink.href}
            >
              {content.contact.emailLink.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
