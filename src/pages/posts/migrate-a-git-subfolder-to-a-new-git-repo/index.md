---
category: 'programming'
title: 'Migrate a Git Subfolder to a New Git Repository'
date: '2022-03-23T13:53:00.000Z'
tags: ['git']
banner: 'images/mathew-schwartz-DUPITwoxXJE-unsplash.jpg'
---

I recently needed to move several packages from subfolders in a monorepo to individual repositories while retaining the history of each package. It turned out to be a relatively painless process.

_Requires Git >= 1.7.11_

1. Split the original repo

```shell
cd </path/to/orig-repo>
git subtree split -P <name-of-folder> -b <name-of-new-branch>
```

2. Pull into the new repo

```shell
mkdir ~/<new-repo>
cd ~/<new-repo>
git init
git pull </path/to/orig-repo> <name-of-new-branch>
```

3. Done! From here you can proceed in whatever way fits your use case—add a remote, delete the original subfolder, etc.

#### Resources

- [Accepted answer on Stack Overflow](https://stackoverflow.com/a/17864475)
