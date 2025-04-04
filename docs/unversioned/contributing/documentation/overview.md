---
sidebar_position: 1
sidebar_label: Overview
---

# Overview

This set of documentation describes how documentation on our [Docusaurus](https://docusaurus.io/) website should be
written. It serves as a **template** for you to use as a springboard for writing documentation for your modules
in AGIL Ops Hub.

It also describes what you need to do to create your own documentation within this Docusaurus project, so NO, you can't
skip reading this and jump straight into copying and modifying this as a template.

What this section does not cover is technical writing skills, for that, you can consider looking at
[MSS's Udemy](https://mss-stengg.udemy.com/organization/search/?q=technical+writing) courses. Having said that, it
should still be stressed that when doing writing, especially on compelx topics, always take into consideration
[the curse of knowledge](https://en.wikipedia.org/wiki/Curse_of_knowledge).

## What is Docusaurus, and what is this for?

Docusaurus is a project developed by Facebook to build, maintain, and deploy documentation websites. It is React-based
but does not require react knowledge. Document pages are written in markdown and rendered as HTML after being built.

We are using this project to maintain documentation to help developers understand and use AGIL Ops Hub.

## Folder Structure

The default structure you see here has a folder for each category:

1. Quickstart \*
2. Development
3. Configuration
4. Deployment
5. Reference

Each folder has a `_category_.json` and a matching default `.mdx` file. When the file name matches the folder name,
Docusaurus collapses them into a single sidebar button. If you add one or more `.md` or `.mdx` files, it
will turn into a category. This default structure allows you to expand each individual section as needed for your module.

\* Ideally, only one single file in the `quickstart` folder should be enough, though it is understandable that as the
module grows and it gets more complex, it might start to require multiple quickstarts for different parts of your
module - in that scenario, just create more quickstart files and add them to this folder.

## What are you expected to write for this _Overview_ section?

The `overview` is expected to be at least (but not limited to) 1 page long and should explain clearly what the
module is about and why it might provide value to the reader. How long is one page? Take it as 250 - 500 words long.

Make sure to provide definitions for all the abbreviations used here as well; the reader might have no idea what `UCS`
or `IAM` stands for. **All abbreviations must be written in full at least once.**

This is also where you give simple examples mapping to real-world use cases on how the module might be used (not code
examples). For example, if your module is `UCS` (Universal Communications System), talk about how it can be integrated
with other modules to allow text and video communication between users; like how an alert might be triggered by some
part of the system and the appropriate users can be automatically assigned to a new `UCS` chat room, quickly giving them a
communications channel to deal with the new issue.

## What should you _NOT_ include in your overview?

The architecture and technology stack or libraries used do not need to be here. If they are relevant, particularly if
it is useful for the developers take into considerations for performance or maintenance reasons, these can be discussed
in a different section.

Not every module will be documented in the same way. Some might need extra sections, such as considerations for
performance, maintenance, security, etc. Step-by-step instructions should be included in the
[development](./development/development.mdx) section, otherwise, these additional sections can be added at the
top-level (adjacent to the overview) (`Documentation` in this case).
