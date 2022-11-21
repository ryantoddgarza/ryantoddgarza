import React from 'react';
import type { FunctionComponent } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { List, listSize } from '../../design/components';
import SEO from '../SEO';

const Home: FunctionComponent = () => {
  const {
    content: { navList },
  } = useStaticQuery(graphql`
    query HomeQuery {
      content: resourcesJson(name: { eq: "home" }) {
        navList {
          name
          url
        }
      }
    }
  `);

  const navNodes = navList.map(
    ({ name, url }: { name: string; url: string }) => (
      <div key={name}>
        <Link to={url}>{name}</Link>
      </div>
    )
  );

  return (
    <div className="home">
      <SEO />
      <section className="layout--margin">
        <div className="container">
          <List nodes={navNodes} size={listSize.DISPLAY} ordered />
        </div>
      </section>
    </div>
  );
};

export default Home;
