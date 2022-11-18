import React from 'react';
import type { FunctionComponent } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FeaturedProjectCardProps } from './types';

const FeaturedProjectCard: FunctionComponent<FeaturedProjectCardProps> = ({
  name,
  featured,
  descriptionHTML,
  projectLink,
  gitHubLink,
  techList,
}) => {
  const getCardClasses = () => {
    const cardClasses = ['featured-project-card'];
    return cardClasses.join(' ');
  };

  return (
    <div className={getCardClasses()}>
      {featured && <p className="overline">Featured Project</p>}
      <h3 className="title">
        <a href={projectLink}>{name}</a>
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
          <a
            className="link"
            href={projectLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="icon small">
              <FaExternalLinkAlt />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
