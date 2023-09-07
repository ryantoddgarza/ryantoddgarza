import React from 'react';
import type { FunctionComponent } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { ABOUT_PATH } from '../../constants';
import SEO from '../SEO';

const Home: FunctionComponent = () => {
  const { aboutTextBlock } = useStaticQuery(graphql`
    query HomeQuery {
      aboutTextBlock: contentfulTextBlock(
        contentful_id: { eq: "3SuARzclwfWYiDg41lEVDu" }
      ) {
        content {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  `);

  const content = Object.freeze({
    about: {
      excerpt:
        aboutTextBlock?.content?.childMarkdownRemark?.rawMarkdownBody.split(
          '\n'
        )[0],
      cta: {
        text: 'Continue reading',
        link: ABOUT_PATH,
      },
    },
  });

  return (
    <div className="home">
      <SEO />
      <section className="section light module">
        <div className="container">
          <div className="about max-width-container desktop">
            <div className="col image-wrapper">
              <StaticImage
                className="avatar lg"
                src="../../resources/images/me.jpg"
                alt="Ryan Todd Garza"
                quality={80}
                loading="eager"
              />
            </div>
            <div className="col copy-wrapper">
              <h2 className="headline">Ryan Todd Garza</h2>
              <p className="text">{content.about.excerpt}</p>
              <div className="cta-links">
                <Link className="button large dark" to={content.about.cta.link}>
                  {content.about.cta.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
