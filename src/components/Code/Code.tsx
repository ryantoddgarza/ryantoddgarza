import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FaGithub } from 'react-icons/fa';
import { GITHUB_ID } from '../../constants';
import { Hero } from '../../design/components';
import { socialGridThemes } from '../SocialGrid';
import SEO from '../SEO';

const Code: FunctionComponent = () => {
  const {
    content: { title, hero },
  } = useStaticQuery(graphql`
    query CodeQuery {
      content: resourcesJson(name: { eq: "code" }) {
        title
        hero {
          heading
          copy
        }
      }
    }
  `);

  return (
    <div className="code">
      <SEO title={title} />
      <div className="container">
        <section className="section light layout--margin">
          <Hero heading={hero.heading} copy={hero.copy} />
        </section>
        <section className="section light layout--margin">
          <header className="section-header">
            <h2 className="section-header title h2">GitHub</h2>
          </header>
          <div className={`social-grid ${socialGridThemes.DARK}`}>
            <div className="item">
              <a
                href={`https://github.com/${GITHUB_ID}`}
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                <div className="button icon-btn ghost large">
                  <div className="icon large">
                    <FaGithub />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Code;
