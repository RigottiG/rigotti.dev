---
title: 'Git Bisect for bugfinding'
subtitle: 'Finding the commit that broke your code with Git Bisect.'
date: '2023-04-18'
tags: ['Git', 'Git Bisect']
---

Git Bisect finds the exact commit that introduced a bug by running a binary search over your commit history. I found out about it just over a year ago, and it's become one of the tools I reach for most when debugging.

Git Bisect works by first identifying a good commit (one that doesn't contain the bug) and a bad commit (one that does contain the bug). It then performs a binary search on the commit history between those two commits, checking out commits and asking you to confirm whether the bug is present. Each answer eliminates half of the remaining commits until it finds the one that introduced the bug.

Say you're working on a project and notice a bug in the latest version. You know it wasn't there in an earlier version, but you're not sure when it was introduced. Here's how to use Git Bisect to find the offending commit:

1. Identify a good commit and a bad commit

```
$ git bisect start
$ git bisect bad <latest_commit>
$ git bisect good <earlier_commit>
```

2. Test whether the bug is present in this commit by running your code. If it is, run:

```
$ git bisect bad
```

3. If it's not, run:

```
$ git bisect good
```

Repeat step 2 until Git Bisect finds the exact commit that introduced the bug. Once it does, you can inspect that commit's changes and fix the bug.
