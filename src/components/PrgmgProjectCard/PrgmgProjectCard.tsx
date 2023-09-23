import React from 'react';
import type { FunctionComponent } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PrgmgProjectCardProps } from './types';

const PrgmgProjectCard: FunctionComponent<PrgmgProjectCardProps> = ({
  name,
  descriptionHTML,
  projectLink,
  gitHubLink,
  techList,
}: PrgmgProjectCardProps) => {
  const getCardClasses = () => {
    const cardClasses = ['prgmg-project-card'];
    return cardClasses.join(' ');
  };

  return (
    <div className={getCardClasses()}>
      <div className="project-content">
        <div className="header">
          <h3 className="title">
            {projectLink ? (
              <a href={projectLink} target="_blank" rel="noreferrer noopener">
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
        </div>
        <div className="body">
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
        </div>
        <div className="footer">
          <div className="links">
            {gitHubLink && (
              <a
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
      </div>
    </div>
  );
};

export default PrgmgProjectCard;
