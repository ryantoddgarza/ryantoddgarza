import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import type { TitledSectionProps } from './types';

const TitledSection: FunctionComponent<TitledSectionProps> = ({
  children,
  title,
  link,
}: TitledSectionProps) => {
  const getHeadlinerClasses = () => {
    const headlinerClasses = ['titled-section'];
    return headlinerClasses.join(' ');
  };

  return (
    <div className={getHeadlinerClasses()}>
      <div className="header">
        <div className="title">{title}</div>
        {link?.name && link?.url && (
          <Link className="link" to={link.url}>
            {link.name}
          </Link>
        )}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

TitledSection.defaultProps = {
  link: {
    name: '',
    url: '',
  },
};

export default TitledSection;
