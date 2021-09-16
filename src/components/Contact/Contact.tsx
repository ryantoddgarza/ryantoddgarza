import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../SEO';

const Contact: FunctionComponent = () => {
  const {
    site: {
      siteMetadata: { email },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  return (
    <div className="contact">
      <SEO title="Contact" />
      <section className="container section">
        <div className="header">
          <div className="title">Contact</div>
        </div>
        <div>
          <a className="button dark wide" href={`mailto:${email}`}>
            Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
