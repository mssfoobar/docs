---
sidebar_position: 20
---

# Conventional Commits

Conventional commits is a specification for adding human and machine readable meaning to commit messages.

The specification is well documented, read more about conventional commits [here](https://www.conventionalcommits.org/).

## Summary

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set
of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This
convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in
commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Why conventional commits?

Following conventional commits allows many tools to parse and make sense of commits since they follow an agreed upon
convention. It also standardizes them in a format that lets the reader make sense of the commit. On our web server, we
use husky to apply a pre-commit check to enforce that developers commit with messages that follows conventional commits.
We can then use tools to generate release notes based on these commits - but the quality of these notes will directly be
related to the quality of the commit messages and pull requests, so please take this practice seriously!
