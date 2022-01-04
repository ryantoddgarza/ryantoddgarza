import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
      <div className="section">
        <div className="container widescreen">
          <div className="header">
            <div className="profile-photo">
              <img
                className="avatar lg"
                src="/images/me.jpg"
                alt="Ryan Todd Garza"
              />
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default About;
