import React from 'react';
import type { FunctionComponent } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FeatureGrid, Hero, List, listSize } from '../../design/components';
import SEO from '../SEO';

const Home: FunctionComponent = () => {
  const {
    content: { hero, navList, features },
  } = useStaticQuery(graphql`
    query HomeQuery {
      content: resourcesJson(name: { eq: "home" }) {
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
          url
        }
        features {
          body
          heading
        }
      }
    }
  `);

  const navNodes = navList.map(
    ({ name, url }: { name: string; url: string }) => (
      <div key={name}>
        <a href={url}>{name}</a>
      </div>
    )
  );

  return (
    <div className="home">
      <SEO />
      <section className="layout--margin">
        <div className="container">
          <Hero heading={hero.heading} copy={hero.copy}>
            <div className="cta-row button-group">
              <Link className="button large dark" to={hero.btn1.url}>
                {hero.btn1.name}
              </Link>
              <Link className="button large light" to={hero.btn2.url}>
                {hero.btn2.name}
              </Link>
            </div>
          </Hero>
        </div>
      </section>
      <section className="layout--margin">
        <div className="container">
          <List nodes={navNodes} size={listSize.DISPLAY} ordered />
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
