import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../SEO';

const About: FunctionComponent = () => {
  const { aboutTextBlock, technicalCV, artisticCV } = useStaticQuery(graphql`
    query AboutQuery {
      aboutTextBlock: contentfulTextBlock(
        contentful_id: { eq: "3SuARzclwfWYiDg41lEVDu" }
      ) {
        content {
          childMarkdownRemark {
            html
          }
        }
      }
      technicalCV: contentfulAsset(
        contentful_id: { eq: "7DcZhy0JJdUllG60wwoeC6" }
      ) {
        file {
          url
        }
      }
      artisticCV: contentfulAsset(
        contentful_id: { eq: "25YrXSisO1MVgwNiXxhgl4" }
      ) {
        file {
          url
        }
      }
    }
  `);

  const content = Object.freeze({
    about: {
      html: aboutTextBlock?.content?.childMarkdownRemark?.html,
    },
    file: {
      technicalCV: {
        url: technicalCV.file.url,
      },
      artisticCV: {
        url: artisticCV.file.url,
      },
    },
  });

  return (
    <div className="about">
      <SEO title="About" />
      <section className="section light module">
        <div className="profile-photo">
          <StaticImage
            className="avatar lg"
            src="../../resources/images/me.jpg"
            alt="Ryan Todd Garza"
            quality={80}
            loading="eager"
          />
        </div>
      </section>
      <section className="section light">
        <div className="container">
          <div
            className="max-width-container prose markdown"
            dangerouslySetInnerHTML={{ __html: content.about.html }}
          />
        </div>
      </section>
      <section className="section light module">
        <div className="container widescreen align-center">
          <div className="button-group">
            <a
              className="button large light"
              href={content.file.technicalCV.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Technical CV
            </a>
            <a
              className="button large light"
              href={content.file.artisticCV.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Artistic CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
