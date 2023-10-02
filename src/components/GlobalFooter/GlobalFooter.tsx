import React from 'react';
import type { FunctionComponent } from 'react';
import type { GlobalFooterProps } from './types';
import { globalFooterThemes } from './variants';

const GlobalFooter: FunctionComponent<GlobalFooterProps> = ({
  children,
  theme,
}: GlobalFooterProps) => {
  const getGlobalFooterClasses = () => {
    const globalFooterClasses = ['global-footer', theme];
    return globalFooterClasses.join(' ');
  };

  return (
    <footer className={getGlobalFooterClasses()}>
      <div className="global-footer-content-wrapper">{children}</div>
    </footer>
  );
};

GlobalFooter.defaultProps = {
  theme: globalFooterThemes.LIGHT,
};

export default GlobalFooter;
