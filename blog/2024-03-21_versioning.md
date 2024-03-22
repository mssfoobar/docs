---
title: Versioning Scheme
description: Make sense of how AGIL Ops Hub is versioned.
slug: versioning-scheme
authors:
    - name: Dois
      title: Senior Software Engineer
      image_url: https://github.com/DoisKoh.png
tags: ["versioning", "semver", "pragmatic versioning", "release"]
hide_table_of_contents: false
date: 2024-03-21:16:00
---

## Overall System - Pragmatic Versioning

Moving forward, we'll be using `Pragmatic Versioning` for our overall release version numbers. We intend to provide more consistent release notes with a release versioning scheme that will be useful for projects utilizing AGIL Ops Hub.

Pragmatic versioning comes with 3 numbers, separated by periods, just like semantic versioning. However, the numbers correspond to `BIG RELEASE` . `ANNOUNCEMENT` . `INCREMENT`. Read more about [Pragmatic Versioning](https://github.com/seveibar/pragmaticversioning).

## Individual Services - Semantic Versioning

As for individual services and/or packages and libraries, we'll be sticking to the typical [semantic versioning](https://semver.org/).

## Why the discrepancy?

It makes more sense to use pragmatic versioning for the overall system as it is actually an aggregation of many different
services, as well as the architecture of the entire system. The versioning of the overall system also carries branding,
and other meanings. If we use semantic versioning for that, it can be quite unclear which number to increase for the
overall system, or simply not useful. Pragmatic versioning more closely matches the message we want to convey.

As for indivdual services or packages, it's much clearer whether a change is a `MAJOR`, `MINOR`, or `PATCH` and that
message can be conveyed through the version numbers.
