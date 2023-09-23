import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SocialGrid from '../SocialGrid';
import SEO from '../SEO';

const Contact: FunctionComponent = () => {
  const {
    content: { title, emailBtn },
  } = useStaticQuery(graphql`
    query ContactQuery {
      content: resourcesJson(name: { eq: "contact" }) {
        title
        emailBtn {
          name
          url
        }
      }
    }
  `);

  return (
    <div className="contact">
      <SEO title={title} />
      <section className="section light module">
        <div className="container align-center">
          <h2 className="u-h2 margin">Contact</h2>
          <div className="cta-links">
            <a className="button large dark" href={emailBtn.url}>
              {emailBtn.name}
            </a>
          </div>
        </div>
      </section>
      <section className="section light module">
        <div className="container align-center">
          <h2 className="u-h3 margin">Follow</h2>
          <div className="cta-links">
            <SocialGrid />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
