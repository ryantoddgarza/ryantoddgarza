---
path: '/a-better-zsh-history-pt-1/'
category: 'technology'
tags: ['shell', 'zsh', 'terminal']
title: 'A Better Zsh History, pt. 1'
date: '2020-10-01T18:46:00.000Z'
summary: 'I recently combed through the dot files in my mac’s home directory and was shocked to see just how polluted it had become. I took the opportunity to take a closer look into some configurations.'
images: ['https://images.unsplash.com/photo-1582303520952-11fe6a0c2058?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1600&q=80']
---

I recently combed through the dot (hidden) files in my mac’s home directory and was shocked to see just how polluted it had become. Now I know that there is no real downside to leaving these files where they were, but as I prefer to keep my development environment nice and tidy, I took the opportunity to take a closer look into some configurations that I had ignored up to this point.

## Zsh config files

If you are unfamiliar with the types of zsh configuration files and their uses, I recommend looking through [this article](https://scriptingosx.com/2019/06/moving-to-zsh-part-2-configuration-files/) in a great series over at scriptingosx.com. For this example we will keep everything in the `.zshrc` file. If one doesn’t already exist in your home folder, in the terminal run `touch .zshrc` from inside of the home directory to make one.

## Setup

The Zsh history mechanism only requires these first two parameters to be set up, but inside of the `.zsrc` we can configure three:

- `HISTFILE`
- `SAVEHIST`
- `HISTSIZE`

To satisfy my original annoyance, let’s change the location of the history file. By default, the zsh setup wizard sets this parameter to `~/.zsh_history` using `HISTFILE`. I prefer this to be kept with some other generated zsh specific files at `~/.cache/zsh`. So in the `.zshrc` we can add:

```
# ~/.zshrc

export HISTFILE="$HOME/.cache/zsh/zsh_history"
```

_Note that you can name the file and the path differently than I have chosen._

Next, the `SAVEHIST` parameter sets the number of lines that you would like saved in your history and can be set according to your machines available resources. I’ve set it to 1000 but you can decrease or increase this number until your heart is content as explained [here](https://www.zsh.org/mla/users/2013/msg00691.html).

```
# ~/.zshrc

export HISTFILE="$HOME/.cache/zsh/zsh_history"
export SAVEHIST=1000
```

The `HISTSIZE` parameter defines how many lines the shell will keep in one session and has a default of 30 lines. The [documentation](http://zsh.sourceforge.net/Guide/zshguide02.html#l17) recommends a value that is no more than `SAVEHIST`, so to give our shortcut seeking programmer selves just one value to maintain we can set this to 1000 and forward the value as a variable to `SAVEHIST`.

```
# ~/.zshrc

export HISTFILE="$HOME/.cache/zsh/zsh_history"
export HISTSIZE=1000
export SAVEHIST=$HISTSIZE
```

## Recap

And that’s all there is to the initial setup. We’ve defined the history file’s location using `HISTFILE`, specified how many lines will be saved using `SAVEHIST`, and how many the shell keeps in the session with `HISTSIZE`.

In part 2 we will dive into the history options that make zsh customizable to your workflow.
