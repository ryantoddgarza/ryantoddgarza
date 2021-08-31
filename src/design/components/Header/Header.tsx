import React, { FunctionComponent, ReactNode } from 'react';
import { Link } from 'gatsby';
import { HOME_PATH } from '../../../constants';

interface Props {
  name?: string;
  children: ReactNode;
}

const Header: FunctionComponent<Props> = ({ name, children }: Props) => {
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
      <div className="header-content">
        {children}
      </div>
    </header>
  );
};

Header.defaultProps = {
  name: '',
};

export default Header;
