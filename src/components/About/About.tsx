import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../SEO';

const About: FunctionComponent = () => {
  const { col1, col2 } = useStaticQuery(graphql`
    query AboutQuery {
      col1: file(name: { eq: "about-col1" }) {
        childMarkdownRemark {
          html
        }
      }
      col2: file(name: { eq: "about-col2" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <div className="about">
      <SEO title="About" />
      <section className="layout--margin">
        <div className="profile-photo">
          <StaticImage
            className="avatar lg"
            src="../../resources/images/me.jpg"
            alt="Ryan Todd Garza"
            quality={80}
            loading="eager"
          />
        </div>
      </section>
      <section>
        <div className="container widescreen">
          <div className="article">
            <div className="row">
              <div
                className="col markdown"
                dangerouslySetInnerHTML={{
                  __html: col1.childMarkdownRemark.html,
                }}
              />
              <div
                className="col markdown"
                dangerouslySetInnerHTML={{
                  __html: col2.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
