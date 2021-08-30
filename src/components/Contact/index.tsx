import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../../components/Common/SEO';

const Contact: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { email },
    },
  } = data;

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
