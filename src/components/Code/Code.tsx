import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FeaturedProjectCard from '../FeaturedProjectCard';
import PrgmgProjectCard from '../PrgmgProjectCard';
import SEO from '../SEO';
import type { ProgrammingProject } from '../../../lib/contentful/generated';

const Code: FunctionComponent = () => {
  const {
    content: { title },
    featuredProjects,
    nonFeaturedProjects,
  } = useStaticQuery(graphql`
    query CodeQuery {
      content: resourcesJson(name: { eq: "code" }) {
        title
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
      <section className="section light">
        <div className="container featured-projects">
          <div className="module align-center">
            <h2 className="u-h2">Featured Projects</h2>
          </div>
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
      </section>
      <section className="section light">
        <div className="container projects">
          <div className="module align-center">
            <h2 className="u-h2">Other Recent Projects</h2>
          </div>
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
      </section>
    </div>
  );
};

export default Code;
