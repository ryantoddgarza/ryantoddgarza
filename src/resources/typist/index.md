---
type: 'portfolio'
title: 'Typist'
date: '2021-01-24T00:00:00.000Z'
featured: true
summary: 'Animated typing utility.'
images: ['typist/images/typewriter.jpg']
---

[Typist](ihttps://github.com/ryantoddgarza/typist) is an animated typing utility written in asynchronous JavaScript and implemented as a series of chainable methods. For example:

```js
import Typist from 'typist';

const [state, setState] = useState('');
const options = { speed: 320 };
const myTypist = new Typist(setState, options);

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
```

## Details

<article class="tech-card">

- JavaScript
- npm package
- 2021

[GitHub →](https://github.com/ryantoddgarza/typist)

</article>
