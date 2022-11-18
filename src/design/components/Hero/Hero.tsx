import React from 'react';
import type { FunctionComponent } from 'react';
import type { HeroProps } from './types';

const Hero: FunctionComponent<HeroProps> = ({
  heading,
  copy,
  children,
}: HeroProps) => {
  const getHeroClasses = () => {
    const heroClasses = ['hero'];
    return heroClasses.join(' ');
  };

  return (
    <div className={getHeroClasses()}>
      <div className="content">
        <div className="heading">{heading}</div>
        <p className="copy">{copy}</p>
        {children}
      </div>
    </div>
  );
};

export default Hero;
