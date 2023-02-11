import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../SEO';

const About: FunctionComponent = () => {
  const {
    contentfulTextBlock: {
      content: {
        childMarkdownRemark: { html },
      },
    },
    technicalCV,
    artisticCV,
  } = useStaticQuery(graphql`
    query AboutQuery {
      contentfulTextBlock(contentful_id: { eq: "3SuARzclwfWYiDg41lEVDu" }) {
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

  const columns = () => {
    const midIndex = Math.floor(html.length / 2);
    const splitHtml = [html.substring(0, midIndex), html.substring(midIndex)];
    const regexp = /\n/g;
    const newlines = [...splitHtml[1].matchAll(regexp)];
    const bpIndex = splitHtml[0].length + newlines[0].index;

    return [html.substring(0, bpIndex), html.substring(bpIndex)];
  };

  const [col0, col1] = columns();

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
        <div className="container widescreen">
          <div className="row">
            <div
              className="col markdown"
              dangerouslySetInnerHTML={{ __html: col0 }}
            />
            <div
              className="col markdown"
              dangerouslySetInnerHTML={{ __html: col1 }}
            />
          </div>
        </div>
      </section>
      <section className="section light module">
        <div className="container widescreen align-center">
          <div className="button-group">
            <a
              className="button large light"
              href={technicalCV.file.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Technical CV
            </a>
            <a
              className="button large light"
              href={artisticCV.file.url}
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
