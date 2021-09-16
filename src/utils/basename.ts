function basename(path: string): string {
  return path.split('/').reverse()[0];
}

export default basename;
