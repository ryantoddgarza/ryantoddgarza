function formattedDate(str: string): string {
  const ms = Date.parse(str);
  const options = { month: 'short', day: 'numeric', year: 'numeric' } as const;
  const formatted = new Date(ms).toLocaleDateString('default', options);

  return formatted;
}

export default formattedDate;
