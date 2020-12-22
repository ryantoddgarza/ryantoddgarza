---
category: 'technology'
featured: true
title: 'Vim Fuzzy Find Files Without Plugins'
date: '2020-11-17T15:12:00.000Z'
tags: ['vim', 'terminal']
images: ['https://images.unsplash.com/photo-1473163928189-364b2c4e1135??ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1600&q=80']
---

Attempting to stick to an ethos of understanding my tools, I try to take my vim configuration as far as possible before reaching for a plugin. Not that plugins are bad. In fact, there are some that I’d have a hard time living without (thanks to [Tim Pope](https://github.com/tpope)). But in doing so, I always manage to learn something about Vim itself which is part of the joy of learning it in the first place. So let’s see what Vim has for us under the hood.

If you learn better by video, [this](https://youtu.be/XA2WjJbmmoM) is a great one to get you up and running quick. (Start from [*finding files*](https://youtu.be/XA2WjJbmmoM?t=378))

## Setup

Configuration requires just two settings in _.vimrc_ to enable fuzzy find behavior and an optional third to specify what not to include. The settings are:

```vim
set path+=**
set wildmenu
set wildignore+=comma,separated,list,of,file,patterns
```

So one by one…

`path` is a list of directories that will be searched when using various commands such as `:find`. Use `+=` in order to prevent overriding defaults.

`wildmenu` enables enhanced command line completion. Pressing tab while searching will invoke completion and if multiple matches occur, show them in a bar above the command line.

`wildignore` is a comma separated list of file patterns to be ignored. For example, to prevent searching in git, add `set wildignore+=*.git/*` to your _.vimrc_. Like` path`, this setting uses `+=` to prevent overwriting defaults or patterns that might be set in other plugins.

## Usage

Now, in an instance of Vim, running the command `:find {file}` will search recursively for `{file}` in `path` and `:edit` it.

Typing `:find` followed by part of the file name and pressing `<Tab>` will complete the filename based on a recursive search for files with names that match the pattern. If more than one file is found, the file names will be displayed above the command line and can be cycled through by pressing `<Tab>` again to move forward by one file or `<S-Tab>` to move backwards. Press `<Enter>` to `:edit` the desired file.

Typing `:find` followed by a glob pattern and pressing `<Tab>` will return the results of a recursive search with behavior for multiple files as above. For example, `:find *config` will return all files containing config. Press `<Enter>` to `:edit` the desired file.

I do however want to note this eccentric behavior until I can find a solution: `:find *.js` will return all files with the extension _.js_ as well as _.jsx_, _.json_, etc. files.

Of course, this isn’t a one size fits all solution. You may prefer the way certain plugins handle larger projects or run into edge cases where this is just not the answer for you. But I’ve enjoyed this setup for a while and hope this has been helpful in some way!

### More resources

- [My personal .vimrc](https://github.com/ryantoddgarza/dotfiles/blob/master/.vimrc)
- [Vim Fuzzy Find Files Without a Plugin](http://www.akhatib.com/fuzzy-find-files-in-vim-without-a-plugin/) by Ahmad Khatib
