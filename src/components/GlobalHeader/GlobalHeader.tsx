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
    const headerClasses = ['global-header'];
    return headerClasses.join(' ');
  };

  return (
    <header className={getGlobalHeaderClasses()}>
      {name && (
        <Link className="header-name" to={HOME_PATH}>
          {name}
        </Link>
      )}
      <div className="header-content">{children}</div>
    </header>
  );
};

GlobalHeader.defaultProps = {
  name: '',
};

export default GlobalHeader;
