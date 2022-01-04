---
category: 'programming'
featured: true
title: 'Vertical Rhythm for styled-components'
date: '2021-01-04T05:46:00.000Z'
tags: ['typography', 'design', 'frontend']
banner: 'images/type.jpg'
---

Simple implementation of typographical vertical rhythm for styled-components that is flexible and modular.

```js
import { css } from 'styled-components';

const baseFontSize = 16;
const rem = (px) => `${px / baseFontSize}rem`;
const baseUnit = 4;
const unit = (n) => n * baseUnit;

const config = {
  h1: {
    size: unit(12),
    margin: unit(8),
  },
  h2: {
    size: unit(10),
    margin: unit(6),
  },
  h3: {
    size: unit(8),
    margin: unit(6),
  },
  h4: {
    size: unit(7),
    margin: unit(6),
  },
  h5: {
    size: unit(6),
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
  margin-bottom: ${rem(config.h1.margin)};
`;

export const h2 = css`
  font-size: ${rem(config.h2.size)};
  line-height: ${rem(config.h2.size)};
  margin-bottom: ${rem(config.h2.margin)};
`;

export const h3 = css`
  font-size: ${rem(config.h3.size)};
  line-height: ${rem(config.h3.size)};
  margin-bottom: ${rem(config.h3.margin)};
`;

export const h4 = css`
  font-size: ${rem(config.h4.size)};
  line-height: ${rem(config.h4.size)};
  margin-bottom: ${rem(config.h4.margin)};
`;

export const h5 = css`
  font-size: ${rem(config.h5.size)};
  line-height: ${rem(config.h5.size)};
  margin-bottom: ${rem(config.h5.margin)};
`;

export const h6 = css`
  font-size: ${rem(config.h6.size)};
  line-height: ${rem(config.h6.size)};
  margin-bottom: ${rem(config.h6.margin)};
`;

export const p = css`
  font-size: ${rem(config.p.size)};
  line-height: ${rem(config.p.size + unit(2))};
  margin-bottom: ${rem(config.p.margin)};
`;

const typography = css`
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
`;

export default typography;
```

View [Gist](https://gist.github.com/ryantoddgarza/530c7921fb83dca05b571c26a96fd759)

## Usage

### Import options

Use the default export as a base for global styles.

```js
import { createGlobalStyle } from 'styled-components';
import typography from '@styles/typography'; // replace with your path

const GlobalStyle = createGlobalStyle`
  ${typography}
`;
```

Use module exports for granulated element styling.

```js
import styled from 'styled-components';
import { h3, p } from '@styles/typography'; // replace with your path

const Card = styled.div`
  .title {
    ${h3}
  }

  .info {
    ${p}
  }
`;
```

### Structure and modifying

`baseFontSize` is inversely related to the typographic scale. By default, passing a value of 16 to the `rem()` function returns `1rem` allowing pixel based design output in rem units.

`baseUnit` is directly related to the typographic scale. Values passed to the `unit()` function return multiples of the `baseUnit`.

The `config` object defines scales relative to the `baseUnit` and is where most modification should take place.

Individual element exports contain implementation detail but can serve more specialized modifications as well. For example, the keen eyed may have noticed that setting the line-height to equal the font size is the same as setting it to `1` and therefore redundant. However, in the case that it needs to be expanded as in the `p` element, this makes it easier to maintain the vertical rhythm by appending units to the configured size: `rem(config.p.size + unit(2))`

The `typography` variable wraps the individual elements for default export.

## Further reading

- [Why is Vertical Rhythm an Important Typography Practice?](https://zellwk.com/blog/why-vertical-rhythms/)
