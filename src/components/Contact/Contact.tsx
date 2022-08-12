import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { TitledSection } from '../../design/components';
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
          <TitledSection title={title}>
            <div>
              <a className="button large dark" href={emailBtn.url}>
                {emailBtn.name}
              </a>
            </div>
          </TitledSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
