---
category: 'programming'
featured: true
title: 'A Better Zsh History, pt. 2'
date: '2020-10-02T12:03:00.000Z'
tags: ['shell', 'zsh', 'terminal']
banner: 'images/kimon-maritz-mQiZnKwGXW0-unsplash.jpg'
---

In [part 1](/a-better-zsh-history-pt1) we did some basic setup to get the history mechanism working in Zsh. In this article we will explore a few options to customize the Zsh environment using `setopt` in the _.zshrc_. The full list of options can be found in the [documentation](http://zsh.sourceforge.net/Doc/Release/Options.html#History).

## Persistence

Default behavior is to overwrite the existing history file upon shell exit. The following are all methods of appending rather than rewriting the file — taking advantage of that potentially massive history size we set up in part one.

- `APPEND_HISTORY`
- `INC_APPEND_HISTORY`
- `SHARE_HISTORY`

The difference being that `APPEND_HISTORY` appends lines in the order in which each session is closed while `INC_APPEND_HISTORY` adds lines to the history in the order in which they are executed. `SHARE_HISTORY` is the equivalent of `INC_APPEND_HISTORY` but also imports new commands, allowing lines to be shared across multiple open sessions.

So what does any of this mean? It means that someone like me who works with a [terminal multiplexer](https://en.wikipedia.org/wiki/Terminal_multiplexer) like TMUX can configure Zsh so that every shell command persists in the history beyond open/close and are immediately available across all open windows, making the terminal feel much more integrated.

In the _.zshrc_ I’ve added:

```shell
setopt INC_APPEND_HISTORY
```

## Duplicates

Now let’s take a look at how we can handle duplicate lines. For example, if we’ve just run `exit` on three open TMUX windows and would like to cycle back to a history item just before, we would have to traverse the duplicates. We can do better.

- `HIST_IGNORE_DUPS`
- `HIST_IGNORE_ALL_DUPS`
- `HIST_EXPIRE_DUPS_FIRST`
- `HIST_SAVE_NO_DUPS`
- `HIST_FIND_NO_DUPS`

`HIST_IGNORE_DUPS` prevents storing only repeated lines that are adjacent to one another, `HIST_IGNORE_ALL_DUPS` removes old duplicates of the line and keeps the new one even if lines are not adjacent, while `HIST_EXPIRE_DUPS_FIRST` removes old duplicates only when the history is filled up.`HIST_SAVE_NO_DUPS` is the most aggressive of these options since, as the name suggests, it saves no more than one duplicate.

And lastly, `HIST_FIND_NO_DUPS` means that even if duplicates are saved in the history, they won’t be shown more than once while cycling back.

My current duplicates handling is on the heavy handed side and along with everything else we’ve set up to this point looks like this:

```shell
# ~/.zshrc

export HISTFILE="$HOME/.cache/zsh/zsh_history"
export HISTSIZE=1000
export SAVEHIST=$HISTSIZE

setopt INC_APPEND_HISTORY
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_SAVE_NO_DUPS
setopt HIST_FIND_NO_DUPS
```

## A few more (one for now) options

- [A well explained use case](https://sikac.hu/how-to-keep-sensitive-command-out-from-your-zsh-history-29a2f39ae17f) for `HIST_IGNORE_SPACE`

## Conclusion

Your configuration ultimately depends on the way you prefer to use the Zsh history mechanism. I’ve personally found that I am more apt to use features that fit my workflow; what can be more fitting than one that I have complete control over?

Don’t be afraid to configure, try it out for a while, ask “what if…” and then reconfigure. For the amount of time we spend with our tools, we deserve to enjoy using them.
