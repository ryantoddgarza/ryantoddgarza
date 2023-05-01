// Assumes that any internal link (intended for Gatsby) will start
// with exactly one slash, and that anything else is external.

function isInternal(link: string): boolean {
  const internal = /^\/(?!\/)/.test(link);

  return internal;
}

export default isInternal;
