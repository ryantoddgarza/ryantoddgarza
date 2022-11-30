import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../../design/components';
import FeaturedProjectCard from '../FeaturedProjectCard';
import SEO from '../SEO';
import type { ProgrammingProject } from '../../../lib/contentful/generated';

const Code: FunctionComponent = () => {
  const {
    content: { title, hero },
    allContentfulProgrammingProject: { projects },
  } = useStaticQuery(graphql`
    query CodeQuery {
      content: resourcesJson(name: { eq: "code" }) {
        title
        hero {
          heading
          body
        }
      }
      allContentfulProgrammingProject(
        sort: { fields: [featured, date], order: [DESC, DESC] }
      ) {
        projects: nodes {
          name
          featured
          description {
            childMarkdownRemark {
              html
            }
          }
          projectLink
          gitHubLink
          techList
        }
      }
    }
  `);

  return (
    <div className="code">
      <SEO title={title} />
      <div className="container">
        <div className="section light layout--margin">
          <Hero heading={hero.heading} body={hero.body} />
        </div>
        <div className="projects section light layout--margin">
          <header className="section-header">
            <h2 className="section-header title h2">Recent Projects</h2>
          </header>
          {projects.map(
            ({
              name,
              featured,
              projectLink,
              gitHubLink,
              techList,
              description: {
                childMarkdownRemark: { html },
              },
            }: ProgrammingProject) => (
              <FeaturedProjectCard
                key={name}
                name={name}
                featured={featured}
                descriptionHTML={html}
                projectLink={projectLink}
                gitHubLink={gitHubLink}
                techList={techList}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Code;
