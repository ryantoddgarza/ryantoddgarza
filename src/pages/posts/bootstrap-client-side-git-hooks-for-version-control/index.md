---
category: 'programming'
featured: true
title: 'Bootstrap client-side Git hooks for version control'
date: '2021-04-20T15:11:12.000Z'
tags: ['git', 'npm']
banner: 'images/oziel-gomez-x7gz40Z9ObM-unsplash.jpg'
---

There are lots of great primers on [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) out there, so if you’re new to the concept, take a little time to get comfortable first; we’ll get straight to the point here.

By default, Git stores client-side hooks in `.git/hooks` which is outside of version control. While packages like [Husky](https://github.com/typicode/husky) are available to make creating and versioning hooks easy, I found the setup process for the newest version too close to a “roll your own” method to justify learning yet another set of commands.

Git provides a configurable setting called `hooksPath` in the `core` table of the `.git/config` file and commands to set and unset it. In `package.json` add:

```json
{
  "scripts": {
    "hooks:install": "git config core.hooksPath ./scripts/git/hooks",
    "hooks:uninstall": "git config --unset"
  }
}
```

And that’s it! After running the `hooks:install` script, Git recognizes valid client-side hooks in `scripts/git/hooks` and more importantly, they are version controlled.

Note that you can choose whatever path best fits the project’s architecture. You can also include `npm run hooks:install` in a separate `bootstrap` script to combine and run any other processes needed to bootstrap a project.

There are certainly other methods for achieving this behavior, but this solution felt particularly elegant to me. Hope it’s useful and as always, feel free to point out any edge cases or your own preferred solution .
