import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Headliner } from '../../design/components';
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
      <section className="layout--margin">
        <div className="container">
          <Headliner title={title} />
        </div>
      </section>
      <section className="section">
        <div className="container">
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
