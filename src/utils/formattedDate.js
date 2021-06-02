const formattedDate = (str) => {
  const ms = Date.parse(str);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const formatted = new Date(ms).toLocaleDateString('default', options);

  return formatted;
};

export default formattedDate;
