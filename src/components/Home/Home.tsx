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
            btn1 {
              name
              url
            }
            btn2 {
              name
              url
            }
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
      <div className="container section">
        <Hero
          heading={hero.heading}
          copy={hero.copy}
          btn1={{ name: hero.btn1.name, url: hero.btn1.url }}
          btn2={{ name: hero.btn2.name, url: hero.btn2.url }}
        />
      </div>
      <div className="container section">
        <FeatureGrid features={features} />
      </div>
    </div>
  );
};

export default Home;
