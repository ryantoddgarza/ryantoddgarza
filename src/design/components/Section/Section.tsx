import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

const Section: FunctionComponent<Props> = ({
  title,
  subtitle,
  children,
}: Props) => {
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
