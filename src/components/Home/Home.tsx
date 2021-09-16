import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FeatureGrid, Hero } from '../../design/components';
import SEO from '../SEO';

const Home: FunctionComponent = () => {
  const {
    content: {
      childResourcesJson: { hero, features },
    },
  } = useStaticQuery(graphql`
    query HomeQuery {
      content: file(name: { eq: "content-home" }) {
        childResourcesJson {
          hero {
            copy
            heading
          }
          features {
            body
            heading
          }
        }
      }
    }
  `);

  return (
    <div className="home">
      <SEO />
      <Hero heading={hero.heading} copy={hero.copy} />
      <div className="container section">
        <FeatureGrid features={features} />
      </div>
    </div>
  );
};

export default Home;
