import React, { Fragment } from 'react';
import type { FunctionComponent } from 'react';
import type { DefinitionListProps } from './types';
import './definition-list.scss';

const List: FunctionComponent<DefinitionListProps> = ({
  nodes,
}: DefinitionListProps) => {
  const getListClasses = () => {
    const classes = ['definition-list'];
    return classes.filter((c) => c != undefined).join(' ');
  };

  return (
    <dl className={getListClasses()}>
      {nodes.map((item, i) => (
        <Fragment key={i}>
          <dt className="term">{item.term}</dt>
          <dd className="definition">{item.definition}</dd>
        </Fragment>
      ))}
    </dl>
  );
};

export default List;
