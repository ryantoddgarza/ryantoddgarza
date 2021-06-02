---
type: 'portfolio'
title: 'Typist'
date: '2021-01-24T00:00:00.000Z'
featured: true
summary: 'Animated typing utility.'
banner: 'images/typewriter.jpg'
---

[Typist](ihttps://github.com/ryantoddgarza/typist) is an animated typing utility written in asynchronous JavaScript and implementable as a series of chainable methods. Here's a little React example:

```js
import React, { useEffect, useState } from 'react';
import Typist from 'typist';

const Animated = () => {
  const [message, setMessage] = useState('');
  const options = { speed: 320 };
  const myTypist = Typist(setState, options);

  useEffect(() => {
    myTypist
      .type('Delete me')
      .backspace('all')
      .type('Vowels: aeiouy')
      .pause(500)
      .backspace()
      .type('[y]')
      .pause(1000)
      .backspace(3)
      .type(' and sometimes y')
      .start();

    return function cleanup() {
      myTypist.stop();
    };
  }, []);

  return <p>{message}</p>;
};

export default Animated;
```

## Details

<article class="tech-card">

- JavaScript
- npm package
- 2021

[GitHub →](https://github.com/ryantoddgarza/typist)

</article>
