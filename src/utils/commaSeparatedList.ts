const commaSeparatedList = (list: string[]): string => {
  const sep = ', ';
  const str = list.join(sep);
  const i = str.lastIndexOf(sep);
  const pre = str.substring(0, list.length === 2 ? i : i + sep.length);
  const post = str.substring(i + sep.length);

  if (i !== -1) {
    return `${pre} and ${post}`;
  }

  return str;
};

export default commaSeparatedList;
