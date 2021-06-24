import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Hero } from '../../design/components';
import SEO from '../../components/Common/SEO';

const About: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { path: { glob: "/about-col[1,2]" } } }
      ) {
        cols: nodes {
          html
        }
      }
    }
  `);

  const { cols } = data.allMarkdownRemark;

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
            dangerouslySetInnerHTML={{ __html: cols[0].html }}
          />
          <div
            className="col markdown"
            dangerouslySetInnerHTML={{ __html: cols[1].html }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
