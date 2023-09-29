import React from 'react';
import type { FunctionComponent } from 'react';
import type { ListProps } from './types';
import { listSize } from './variants';

const List: FunctionComponent<ListProps> = ({
  nodes,
  ordered,
  size,
  theme,
}: ListProps) => {
  const getListClasses = () => {
    const listClasses = ['list', theme, size];
    return listClasses.filter((c) => c != undefined).join(' ');
  };

  const formatNum = (n: number) => {
    return n.toString().padStart(2, '0');
  };

  return (
    <div className={getListClasses()}>
      {nodes.map((item, i) => (
        <div className="list-row" key={i}>
          {ordered && <div className="numeral">{formatNum(i + 1)}</div>}
          <div className="item">{item}</div>
        </div>
      ))}
    </div>
  );
};

List.defaultProps = {
  ordered: false,
  size: listSize.SMALL,
  theme: undefined,
};

export default List;
