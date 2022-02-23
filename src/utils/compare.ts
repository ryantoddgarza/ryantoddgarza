interface Direction {
  [key: string]: {
    [key: string]: number;
  };
}

function compare(a: any, b: any, sort = 'asc'): number {
  const direction: Direction = {
    asc: {
      gt: 1,
      lt: -1,
    },
    desc: {
      gt: -1,
      lt: 1,
    },
  };

  if (a > b) {
    return direction[sort].gt;
  }

  if (a < b) {
    return direction[sort].lt;
  }

  return 0;
}

export default compare;
