---
category: 'technology'
featured: true
title: 'Cleaner JavaScript with Destructuring'
date: '2021-01-17T15:14:23.000Z'
tags: ['javascript']
images: ['https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1600&q=80']
---

First of all, I’m a little upset it has taken me this long to realize that destructuring is so awesome! I find myself using it more and more for basic tasks on arrays and objects like unpacking, unnecessarily verbose tasks like assigning defaults, or giving data semantic meaning by assigning new variable names. There are the obvious ways to go about each of these, but I’ve really fallen in love with how much destructuring syntax allows me to express while keeping my code clean. It can turn some pretty hairy operations into one liners.
Before using destructuring syntax in production, be sure to [check compatibility](https://caniuse.com/mdn-javascript_operators_destructuring) and install the [appropriate tooling](https://babeljs.io/docs/en/babel-plugin-transform-destructuring) if necessary.

## Basic array unpacking

For the array

```js
const foo = ['zero', 'one', 'two', 'three'];
```

we can implement variable assignment using destructuring.

```js
const [a, b, c, d] = foo;

// is equivalent to
const a = foo[0];
const b = foo[1];
const c = foo[2];
const d = foo[3];

// in both cases
a // 'zero'
b // 'one'
c // 'two'
d // 'three
```

We can also ignore values by leaving its index empty

```js
const [a, , , b] = foo;

// is equivalent to
const a = foo[0];
const b = foo[3];

// in both cases
a // 'zero'
b // 'three'
```

or assign the remaining values to a variable using spread syntax.

```js
const [a, ...b] = foo;

// is equivalent to
const a = foo[0];
const b = foo.slice(1);

// in both cases
a // 'zero'
b // ['one', 'two', 'three']
```

## Basic object unpacking

For the object

```js
const bar = {
  id: 11,
  hidden: false,
};
```

we can implement variable assignment using destructuring.

```js
const { id, hidden } = bar;

// is equivalent to
const id = bar.id;
const hidden = bar.hidden;

// in both cases
id // 11
hidden // false
```

We can also rename object properties to new variables.

For the object

```js
const user = {
  id: 8164,
  name: 'Tom',
  active: true,
};
```

rename the object properties to

```js
const { id: userId, name: userName, active: userIsActive } = user;

userId // 8164
userName // 'Tom'
userIsActive // true
```

avoiding clashes with other variables or giving semantic meaning to the data.

## Assigning default values

Default values work the same in both arrays and objects. Defaults are applied in the case that the value returned is `undefined`.

```js
const skills = [];
const [firstSkill = 'Still learning!'] = skills;

const projects = {};
const { firstProject = 'Still working!' } = projects;

firstSkill // 'Still learning!'
firstProject // 'Still working!'
```

## Some use cases

### Unpack, rename AND assign defaults

Can we do all three? Why yes we can.

```js
const obj = {
  foo: 1,
  bar: 0,
  baz: undefined,
};

// unpack, rename, and assign defaults
const {
  foo: apple = 500,
  bar: banana = 501,
  baz: orange = 502,
  qux: mango = 503,
} = obj;

apple // 1
banana // 0
orange // 502
mango // 503
```

One by one: the alias `apple` resolves the value `1` from `foo` as expected. `banana` also resolves `bar`'s value but a value of zero. Shouldn't the falsy value of `0` fall back to the default? Well no…remember from the assigning defaults section that "Defaults are applied in the case that the value returned is `undefined`," not necessarily falsy. This brings us to `orange` which does in fact resolve a value of `undefined` and falls back to the default value of `502`.

As for `mango`, how can we unpack an object property that doesn't exist? Well if we go back to JavaScript 101 for a second, we'll recall that undeclared and uninitialized variables return a value of `undefined`, so we can in fact query for `qux` in this case and rely on the default value we've set to catch any instances in which it doesn't exist. No `if` statements, ternary, boolean, or logical operators; just pure JavaScript wizardry!

### Unpacking objects passed as a function parameter

Destructuring arguments passed function parameters avoids the need for arbitrary argument names within the function.

```js
const book = {
  title: 'Some Great Book',
  author: {
    firstName: 'Seymour',
    lastName: 'Penman',
  },
};

function getAuthorName({author: { firstName, lastName}) {
  return `The author is ${firstName} ${lastName}`;
};

logAuthorName(book); // 'The author is Seymour Penman'
```

I find this particularly useful in working with array methods run on arrays of objects. For the array

```js
const arrOfObjs = [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }];
```

we can destructure the argument to the callback

```js
arrOfObjs.forEach(({ name }) => console.log(name));
```

as opposed to

```js
arrOfObjs.forEach((i) => console.log(i.name));
```

Obviously in such a simple example it isn’t a big deal, and I chose `i` just to play devil’s advocate. `i` could mean item, maybe index, maybe integer; it’s not hard to figure out looking at the surrounding code, but I really do like that destructuring keeps us from even having to think about choosing an entirely new (but _hopefully semantic_) argument name altogether.

### Combined array and object destructuring

For the (unusual) array

```js
const favoriteColors = [
  { possibilities: ['lilac', 'aqua', 'coral', 'gold'] },
  { rank: 1, color: 'aqua' },
  { rank: 2, color: 'gold' },
  { rank: 3, color: 'coral' },
];
```

Let’s say that elsewhere in the code we need to reference the color aqua, the nested array of possibilities but only return black and white if one isn’t specified, and every object following rank 1. Sort of an odd task on an odd array, but we can easily manage it.

```js
const [
  { possibilities = ['black', 'white']: palette },
  { color: favoriteColor},
  ...rest
] = favoriteColors;

palette // ['lilac', 'aqua', 'coral', 'gold']
favoriteColor // 'aqua'
rest // [{ rank: 2, color: 'gold' }, { rank: 3, color: 'coral' }]
```

Breaking it down, the first item in our destructuring assignment takes the object at the first index position and looks for a property called `possibilities`. We then assign it a default of an array containing the two items `black` and `white`, and then rename it to palette for sake of semantics.

The second item unpacks the `color` property from the object and then renames it to `favoriteColor`.

The last item assigns the remaining objects in the array to a variable called `rest`.

Obviously this isn’t an ideal way to organize or rank someone’s favorite colors, but I wanted to show that no matter how wacky the original data might be, combined array and object destructuring can keep things clean.

### Deeply nested values

Let’s say we need to dig way down into an object for a value.

For the object

```js
const data = {
  post: {
    fields: {
      slug: '/a-blog-post',
    },
    type: 'technology',
    metadata: {
      title: 'A Blog Post',
      date: 2021 - 01 - 01,
      credits: [
        { name: 'Generic Namesake', role: 'author' },
        { name: 'Universal Surname', role: 'editor' },
      ],
      keywords: ['javascript', 'destructuring'],
    },
  },
};
```

If we need to access the slug, we can destructure as follows.

```js
const {
  post: { fields: slug },
} = data;

// is equivalent to
const slug = data.node.fields.slug;

// in both cases
slug // 'a-blog-post'
```

Or we might pull out more than just one parameter and add some line breaks for readability. Let’s destructure once to perform an array method on the credits and again destructure the credits in the callback.

```js
const {
  post: {
    fileds: { slug },
    metadata: {
      title: postTitle, // rename
      date: publishDate, // rename
      credits: postCredits, // rename
    },
  },
} = data;

// check for role of `editor` and that name exists
const hasEditor = postCredits.some(
  ({ name, role }) => role === 'editor' && name
);
```

### Parsing an array returned from a function

This one might look familiar to those who have worked with React’s `useState` hook. Simply put, an array returned from a function can be parsed in a single line.

```js
function foo() {
  return [1, 2];
}

const [a, b] = foo();
```

## Wrapping up

Hopefully by this point you also agree that destructuring JavaScript is awesome. Is it always the right answer? Depends on the project and the team. Is it just syntactic sugar. Probably, but for me, any solution for maintaining code readability is worth looking into and investing in the long run. Whoever is debugging your code in the future will thank you…it might be you.
