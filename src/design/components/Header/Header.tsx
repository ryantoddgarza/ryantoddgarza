import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Header: FunctionComponent<Props> = ({ children }: Props) => {
  const getHeaderClasses = () => {
    const headerClasses = ['header'];
    return headerClasses.join(' ');
  };

  return <header className={getHeaderClasses()}>{children}</header>;
};

export default Header;
