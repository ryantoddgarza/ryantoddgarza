import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { HOME_PATH } from '../../../constants';
import type { HeaderProps } from './types';

const Header: FunctionComponent<HeaderProps> = ({
  name,
  children,
}: HeaderProps) => {
  const getHeaderClasses = () => {
    const headerClasses = ['global-header'];
    return headerClasses.join(' ');
  };

  return (
    <header className={getHeaderClasses()}>
      {name && (
        <Link className="header-name" to={HOME_PATH}>
          {name}
        </Link>
      )}
      <div className="header-content">{children}</div>
    </header>
  );
};

Header.defaultProps = {
  name: '',
};

export default Header;
