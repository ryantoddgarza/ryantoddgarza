import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Hero } from '../../design/components';
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
      <Hero
        heading="About"
        copy="I build practical systems to actualize creative concepts."
      />
      <div className="article container widescreen">
        <div className="row">
          <div
            className="col markdown"
            dangerouslySetInnerHTML={{ __html: col1.childMarkdownRemark.html }}
          />
          <div
            className="col markdown"
            dangerouslySetInnerHTML={{ __html: col2.childMarkdownRemark.html }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
