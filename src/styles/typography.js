import { css } from 'styled-components';
import { colors } from './theme';
import { rem, unit } from './utils';

export const config = {
  h1: {
    size: unit(10),
    margin: unit(6),
  },
  h2: {
    size: unit(7.5),
    margin: unit(6),
  },
  h3: {
    size: unit(6.5),
    margin: unit(6),
  },
  h4: {
    size: unit(6),
    margin: unit(6),
  },
  h5: {
    size: unit(5.5),
    margin: unit(6),
  },
  h6: {
    size: unit(5),
    margin: unit(6),
  },
  p: {
    size: unit(4),
    margin: unit(4),
  },
};

export const h1 = css`
  font-size: ${rem(config.h1.size)};
  line-height: ${rem(config.h1.size)};
  margin-top: ${rem(config.h1.margin)};
`;

export const h2 = css`
  font-size: ${rem(config.h2.size)};
  line-height: ${rem(config.h2.size)};
  margin-top: ${rem(config.h2.margin)};
`;

export const h3 = css`
  font-size: ${rem(config.h3.size)};
  line-height: ${rem(config.h3.size)};
  margin-top: ${rem(config.h3.margin)};
`;

export const h4 = css`
  font-size: ${rem(config.h4.size)};
  line-height: ${rem(config.h4.size)};
  margin-top: ${rem(config.h4.margin)};
`;

export const h5 = css`
  font-size: ${rem(config.h5.size)};
  line-height: ${rem(config.h5.size)};
  margin-top: ${rem(config.h5.margin)};
`;

export const h6 = css`
  font-size: ${rem(config.h6.size)};
  line-height: ${rem(config.h6.size)};
  margin-top: ${rem(config.h6.margin)};
`;

export const p = css`
  font-size: ${rem(config.p.size)};
  line-height: ${rem(config.p.size + unit(3))};
  margin-top: ${rem(config.p.margin)};
`;

export const a = css`
  color: ${colors.primary};

  &:hover {
    color: ${colors.fg};
  }
`;

const bold = css`
  font-weight: 600;
`;

const italic = css`
  font-style: italic;
`;

const list = css`
  margin: 0 0 ${rem(unit(6))};

  li {
    margin: ${rem(unit(4))} 0 0 ${rem(unit(8))};
  }
`;

const ul = css`
  ${list}
  list-style-type: disc;
`;

const ol = css`
  ${list}
  list-style-type: decimal;
`;

const pre = css`
  white-space: pre;
  line-height: 1.5;
`;

const code = css`
  padding: 0.15em 0.3em;
  font-size: 85%;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const figcaption = css`
  margin: ${rem(unit(2))} 0 0;
  text-align: center;
  font-size: ${rem(unit(3))};
  color: #757575;
`;

export default css`
  h1 {
    ${h1}
  }

  h2 {
    ${h2}
  }

  h3 {
    ${h3}
  }

  h4 {
    ${h4}
  }

  h5 {
    ${h5}
  }

  h6 {
    ${h6}
  }

  p {
    ${p}
  }

  a {
    ${a}
  }

  b,
  strong {
    ${bold}
  }

  i,
  em {
    ${italic}
  }

  ul {
    ${ul}
  }

  ol {
    ${ol}
  }

  pre {
    ${pre}
  }

  code {
    ${code}
  }

  figcaption {
    ${figcaption}
  }
`;
