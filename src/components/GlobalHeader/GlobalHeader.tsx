import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { HOME_PATH } from '../../constants';
import type { GlobalHeaderProps } from './types';

const GlobalHeader: FunctionComponent<GlobalHeaderProps> = ({
  name,
  children,
}: GlobalHeaderProps) => {
  const getGlobalHeaderClasses = () => {
    const classes = ['global-header'];
    return classes.join(' ');
  };

  return (
    <header className={getGlobalHeaderClasses()}>
      {name && (
        <Link className="header-item header-name" to={HOME_PATH}>
          {name}
        </Link>
      )}
      <div className="header-item header-content">{children}</div>
    </header>
  );
};

GlobalHeader.defaultProps = {
  name: '',
};

export default GlobalHeader;
