import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Hero } from '../../design/components';
import SEO from '../../components/Common/SEO';

const content = {
  hero: {
    heading: 'I build practical systems to actualize creative concepts.',
    copy: "I'm Ryan Todd Garza. I draw from a broad background of interdisciplinary pattern abstraction to develop effective technical and creative solutions for artistic and entrepreneurial ventures.",
  },
};

const Home: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      home: markdownRemark(fields: { path: { eq: "/home" } }) {
        html
      }
    }
  `);

  const { home } = data;

  return (
    <div className="home">
      <SEO />
      <Hero heading={content.hero.heading} copy={content.hero.copy} />
      <div className="container section">
        <div className="col size7of12-tablet size1of2-desktop size5of12-widescreen">
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: home.html }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
