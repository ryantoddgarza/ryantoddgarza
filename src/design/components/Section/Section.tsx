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

  const layout = {
    withHeader: title || subtitle,
  };

  return (
    <section className={getSectionClasses()}>
      {layout.withHeader && (
        <div className="header">
          {title && <h2 className="title">{title}</h2>}
          {subtitle && <h3 className="subtitle">{subtitle}</h3>}
        </div>
      )}
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: '',
  subtitle: '',
};

export default Section;
