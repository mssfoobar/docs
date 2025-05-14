---
sidebar_position: 1
---

# Overview

The tag module is a simple service that's designed to share tags with other services.

Other services utilizing the tag service is expected to create its own association tables - associating the entity's
`id` with the tag's `id`.

## Purpose

The reason why we would like to share tags is to maintain associations with all entities in the system based on the tag,
which allows us to add indexing and search features in the future.
