import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
      <section className="section">
        <div className="container">
          <div className="header">
            <div className="title">{title}</div>
          </div>
          <div>
            <a className="button dark wide" href={emailBtn.url}>
              {emailBtn.name}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
