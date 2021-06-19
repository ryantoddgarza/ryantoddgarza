import React, { FunctionComponent } from 'react';

interface Props {
  heading: string;
  copy: string;
}

const Hero: FunctionComponent<Props> = ({ heading, copy }: Props) => {
  const getHeroClasses = () => {
    const heroClasses = ['hero'];
    return heroClasses.join(' ');
  };

  return (
    <div className={getHeroClasses()}>
      <div className="body">
        <div className="heading">{heading}</div>
        <p className="copy">{copy}</p>
      </div>
    </div>
  );
};

export default Hero;
