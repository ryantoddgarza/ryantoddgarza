import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import type { HeroProps } from './types';

const Hero: FunctionComponent<HeroProps> = ({
  heading,
  copy,
  btn1,
  btn2,
}: HeroProps) => {
  const getHeroClasses = () => {
    const heroClasses = ['hero'];
    return heroClasses.join(' ');
  };

  const hasButton = btn1 || btn2;

  return (
    <div className={getHeroClasses()}>
      <div className="content">
        <div className="heading">{heading}</div>
        <p className="copy">{copy}</p>
        {hasButton && (
          <div className="cta-row button-group">
            {btn1 && (
              <Link className="button dark wide" to={btn1.url}>
                {btn1.name}
              </Link>
            )}
            {btn2 && (
              <Link className="button light wide" to={btn2.url}>
                {btn2.name}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
