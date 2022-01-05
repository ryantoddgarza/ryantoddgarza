import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FeatureGrid, Hero, BigList } from '../../design/components';
import SEO from '../SEO';

const Home: FunctionComponent = () => {
  const {
    content: {
      childResourcesJson: { hero, navList, features },
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
          navList {
            name
            link
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
      <section className="layout--margin">
        <div className="container">
          <Hero
            heading={hero.heading}
            copy={hero.copy}
            btn1={{ name: hero.btn1.name, url: hero.btn1.url }}
            btn2={{ name: hero.btn2.name, url: hero.btn2.url }}
          />
        </div>
      </section>
      <section className="layout--margin">
        <div className="container">
          <div className="row">
            <div className="col size3of4-tablet offset1of4-tablet size2of3-desktop offset1of3-desktop">
              <BigList list={navList} numbered />
            </div>
          </div>
        </div>
      </section>
      <section className="layout--margin">
        <div className="container">
          <FeatureGrid features={features} />
        </div>
      </section>
    </div>
  );
};

export default Home;
