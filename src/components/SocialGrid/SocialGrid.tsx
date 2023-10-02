import React from 'react';
import type { FunctionComponent } from 'react';
import socialLinkList from './socialLinkList';
import { socialGridSizes } from './variants';
import type { SocialGridProps } from './types';

const SocialGrid: FunctionComponent<SocialGridProps> = ({
  size,
  theme,
}: SocialGridProps) => {
  const getGridClassNames = () => {
    const classNames = ['social-grid', size, theme];
    return classNames.join(' ');
  };

  return (
    <div className={getGridClassNames()}>
      {socialLinkList.map(
        ({ name, url, icon, display }) =>
          display && (
            <div className="item" key={name}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                <div className="button icon-btn ghost medium">
                  <div className="icon small">{icon}</div>
                </div>
              </a>
            </div>
          )
      )}
    </div>
  );
};

SocialGrid.defaultProps = {
  size: socialGridSizes.MEDIUM,
};

export default SocialGrid;
