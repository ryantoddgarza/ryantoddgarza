import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import type { BigListItem, BigListProps } from './types';

const BigList: FunctionComponent<BigListProps> = ({
  list,
  numbered,
}: BigListProps) => {
  const getBigListClasses = () => {
    const sectionClasses = ['big-list'];
    return sectionClasses.join(' ');
  };

  const formatNum = (n: number) => {
    return n.toString().padStart(2, '0');
  };

  return (
    <div className={getBigListClasses()}>
      {list.map(({ name, url }: BigListItem, i: number) => (
        <div className="list-row" key={name}>
          {numbered && <div className="numeral">{formatNum(i + 1)}</div>}
          <div className="name">
            {url ? (
              <Link className="link" to={url}>
                {name}
              </Link>
            ) : (
              name
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BigList;
