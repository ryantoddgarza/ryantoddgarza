interface Props {
  pathname: string;
}

function getPage({ pathname }: Props): number {
  const [, type, $2, $3] = pathname.split('/');

  if (type === 'pages') {
    return Number($2) || 1;
  }

  return Number($3) || 1;
}

export default getPage;
