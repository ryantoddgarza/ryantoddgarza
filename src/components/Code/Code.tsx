import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../../design/components';
import FeaturedProjectCard from '../FeaturedProjectCard';
import PrgmgProjectCard from '../PrgmgProjectCard';
import SEO from '../SEO';
import type { ProgrammingProject } from '../../../lib/contentful/generated';

const Code: FunctionComponent = () => {
  const {
    content: { title, hero },
    featuredProjects,
    nonFeaturedProjects,
  } = useStaticQuery(graphql`
    query CodeQuery {
      content: resourcesJson(name: { eq: "code" }) {
        title
        hero {
          heading
          body
        }
      }
      featuredProjects: allContentfulProgrammingProject(
        filter: { featured: { eq: true } }
        sort: { fields: [date], order: [DESC] }
      ) {
        nodes {
          name
          description {
            childMarkdownRemark {
              html
            }
          }
          projectLink
          gitHubLink
          techList
          image {
            gatsbyImageData(width: 1920, quality: 80, formats: JPG)
            title
          }
        }
      }
      nonFeaturedProjects: allContentfulProgrammingProject(
        filter: { featured: { eq: false } }
        sort: { fields: [date], order: [DESC] }
      ) {
        nodes {
          name
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
        <div className="section light layout--margin">
          <div className="featured-projects">
            <header className="section-header">
              <h2 className="section-header title h2">Featured Projects</h2>
            </header>
            <div>
              {featuredProjects.nodes.map(
                ({
                  name,
                  projectLink,
                  gitHubLink,
                  techList,
                  description: {
                    childMarkdownRemark: { html },
                  },
                  image,
                }: ProgrammingProject) => (
                  <FeaturedProjectCard
                    key={name}
                    name={name}
                    descriptionHTML={html}
                    projectLink={projectLink}
                    gitHubLink={gitHubLink}
                    techList={techList}
                    image={image?.gatsbyImageData}
                    imageAlt={image?.title}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="section light layout--margin">
          <header className="section-header">
            <h2 className="section-header title h2">Other Recent Projects</h2>
          </header>
          <div className="prgmg-project-grid">
            {nonFeaturedProjects.nodes.map(
              ({
                name,
                projectLink,
                gitHubLink,
                techList,
                description: {
                  childMarkdownRemark: { html },
                },
              }: ProgrammingProject) => (
                <PrgmgProjectCard
                  key={name}
                  name={name}
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
    </div>
  );
};

export default Code;
