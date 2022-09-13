import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SocialGrid from '../SocialGrid';
import SEO from '../SEO';

const Contact: FunctionComponent = () => {
  const {
    content: {
      childResourcesJson: { title, emailBtn },
    },
  } = useStaticQuery(graphql`
    query ContactQuery {
      content: file(name: { eq: "content-contact" }) {
        childResourcesJson {
          title
          emailBtn {
            name
            url
          }
        }
      }
    }
  `);

  return (
    <div className="contact">
      <SEO title={title} />
      <section className="section light container layout--margin">
        <header className="section-header">
          <h2 className="section-header title h2">Contact</h2>
        </header>
        <div>
          <a className="button large dark" href={emailBtn.url}>
            {emailBtn.name}
          </a>
        </div>
      </section>
      <section className="section light container layout--margin">
        <header className="section-header">
          <h2 className="section-header title h2">Follow</h2>
        </header>
        <div style={{ marginLeft: -10 }}>
          <SocialGrid />
        </div>
      </section>
    </div>
  );
};

export default Contact;
