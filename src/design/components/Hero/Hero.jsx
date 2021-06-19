import React from 'react';

const Hero = ({ heading, copy }) => {
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
