import React from 'react';
import type { FunctionComponent } from 'react';
import type { HeadlinerProps } from './types';

const Headliner: FunctionComponent<HeadlinerProps> = ({
  title,
  copy,
}: HeadlinerProps) => {
  const getHeadlinerClasses = () => {
    const headlinerClasses = ['headliner'];
    return headlinerClasses.join(' ');
  };

  return (
    <div className={getHeadlinerClasses()}>
      <div className="title">{title}</div>
      {copy && <div className="copy">{copy}</div>}
    </div>
  );
};

Headliner.defaultProps = {
  copy: '',
};

export default Headliner;
