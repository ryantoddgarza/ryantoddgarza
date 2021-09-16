import React from 'react';
import type { FunctionComponent } from 'react';
import type { SectionProps } from './types';

const Section: FunctionComponent<SectionProps> = ({
  title,
  subtitle,
  children,
}: SectionProps) => {
  const getSectionClasses = () => {
    const sectionClasses = ['section'];
    return sectionClasses.join(' ');
  };

  return (
    <section className={getSectionClasses()}>
      <div className="header">
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: '',
  subtitle: '',
};

export default Section;
