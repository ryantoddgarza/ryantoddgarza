import React from 'react';
import type { FunctionComponent } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FeaturedProjectCardProps } from './types';

const FeaturedProjectCard: FunctionComponent<FeaturedProjectCardProps> = ({
  name,
  descriptionHTML,
  projectLink,
  gitHubLink,
  techList,
  image,
  imageAlt,
}: FeaturedProjectCardProps) => {
  const getCardClasses = () => {
    const cardClasses = ['featured-project-card'];
    return cardClasses.join(' ');
  };

  return (
    <div className={getCardClasses()}>
      <div className="project-content">
        <p className="overline">Featured Project</p>
        <h3 className="title">
          {projectLink ? (
            <a href={projectLink} target="_blank" rel="noreferrer noopener">
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: descriptionHTML }}
        />
        <ul className="tech-list">
          {techList?.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <div className="links">
          {gitHubLink && (
            <a
              className="link"
              href={gitHubLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="icon small">
                <FaGithub />
              </div>
            </a>
          )}
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noreferrer noopener">
              <div className="icon small">
                <FaExternalLinkAlt />
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="project-image">
        {image && <GatsbyImage image={image} alt={imageAlt || ''} />}
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
