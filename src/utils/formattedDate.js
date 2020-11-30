export default (str) => {
  const ms = Date.parse(str);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = new Date(ms).toLocaleDateString('default', options);

  return formattedDate;
};
