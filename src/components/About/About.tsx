import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import DefinitionList from '../DefinitionList';
import SEO from '../SEO';
import './about.scss';

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
      name: 'Ryan Todd Garza',
      details: [
        {
          term: 'Currently',
          definition: 'Computer science major, Texas Tech Universtiy',
        },
        { term: 'Focus', definition: 'Music technology' },
        {
          term: 'Exploring',
          definition: 'DeepLearning.AI TensorFlow Developer Certificate',
        },
      ],
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
      <section className="sidebar section light module">
        <StaticImage
          className="avatar lg"
          src="../../resources/images/me.jpg"
          alt="Ryan Todd Garza"
          quality={80}
          loading="eager"
        />
        <div className="details">
          <h1 className="u-h4">{content.about.name}</h1>
          <DefinitionList nodes={content.about.details} />
        </div>
      </section>
      <section className="content section light module">
        <div className="body-copy">
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: content.about.html }}
          />
        </div>
        <div className="module container u-align-center">
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
