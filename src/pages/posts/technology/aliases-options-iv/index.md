---
path: '/aliases-you-didnt-know-you-wanted-options-iv/'
category: 'technology'
featured: false
tags: ['shell', 'zsh', 'terminal', 'alias']
title: "Aliases You Didn't Know You Wanted: Options `-iv`"
date: '2020-11-08T15:11:00.000Z'
summary: ''
images: ['https://images.unsplash.com/photo-1517242810446-cc8951b2be40?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1600&q=80']
---

Today we’ll look at aliasing two options, `-i` and `-v`, to three common Unix commands, `cp`, `mv`, and `rm`.

## TL;DR

Add the following lines to the file where you keep your aliases:

```sh
alias cp="cp -iv"
alias mv="mv -iv"
alias rm="rm -iv"
```

Be sure to source the file into an existing session with `source <path/to/your/aliases>` or instantiate a new session by running zsh or by opening a new terminal window.

## The Options

The option flags we will be using are very comparable between commands `cp`, `mv`, and `rm`.

`-i` has a slightly different behavior depending on the command that precedes it, but I generally like to think of it in this context as an option to prompt before destructive actions are allowed. For example, the documentation for the `mv` command states that `-i` will “cause `mv` to write a prompt to standard error before moving a file that would overwrite an existing file…”

`-v` causes the command to be verbose, providing valuable feedback to those who haven’t quite learned to trust their terminal…wink wink. Jokes aside, feedback about command execution can be really nice and my terminal currently implements these options as follows.

As always, exploring available options for a given command is as simple as entering `man <command>` into your terminal.

## The Aliases

Open the file where you keep your aliases. If you aren’t quite sure what this means have a quick look at this short primer on simple and advanced setups. Adding the following aliases means that anytime we use the standard commands, the options will always be included. Pretty handy huh?

### Copy

First we’ll alias the `cp` command. Add the following to your alias file:

```sh
alias cp="cp -iv"
```

Source the alias file and let’s test the alias. For our purposes here, I’ll create two dummy files in _~/desktop/_ called _foo.txt_ and _bar.txt_ by entering `touch foo.txt bar.txt`.

If we copy _foo.txt_ to a new directory, we will see confirmation via the `-v` option printed to standard output. Now if we copy _foo.txt_ to _bar.txt_, we will see the `-i` option give a prompt asking to overwrite _bar.txt_ and if we confirm, another verbose confirmation printed to standard output.

![cp-screenshot](./images/copy.png "`cp` with aliased options always prompts prior to destructive actions and gives verbose feedback")

### Move

Next we’ll alias the `mv` command. Add the following to your alias file:

```sh
alias mv="mv -iv"
```

Source the alias file and let’s test the alias. If we move bar.txt into a new directory, we will again see confirmation via `-v.` Now if we move foo.txt into the same directory as the version copied from the previous section, we will see a prompt via the `-i` option and if we confirm, confirmation of the move.

![mv-screenshot](./images/move.png "`mv` with aliased options always prompts prior to destructive actions and gives verbose feedback")

### Remove

Lastly we’ll alias the `rm` command. Add the following to your alias file:

```sh
alias rm="rm -iv"
```

Source the alias file and let’s test the alias. If we remove _foo.txt_, the `-i` option prompts confirmation of the deletion. Confirm and see verbose confirmation of the deletion (although admittedly vague). For giggles, let’s remove _bar.txt_ but decline when prompted. Because no action was taken, there is no `-v` info provided to standard output.

![rm-screenshot](./images/remove.png "`rm` with aliased options always prompts prior to destructive actions and gives verbose feedback")

Don’t worry, the options give very useful feedback when dealing with directories and recursive deletion, so try the alias out for a while and see what you think.

## Wrapping Up

And there you have it! Three aliases you didn’t even know you wanted. I hope they make your life in the terminal easier. Would love to hear the ways you’ve used or extended the options for these commands or any aliases you can’t live without! Keep an eye out for more stories in [this series](/tags/alias/1) and take a look at my [personal aliases](https://github.com/ryantoddgarza/dotfiles/blob/master/.zsh/aliases.zsh) in my [dotfiles](https://github.com/ryantoddgarza/dotfiles) repo if you need a little inspiration. Happy aliasing!

