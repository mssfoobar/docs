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

## Available Fields

A tag has 2 fields of interest:

- [text](#text)
- [description](#description)

### Text

The text field is literally the text that represents the tag, for example, if you want to tag a piece of data with "potato", the value of the `text` field will be "potato".

### Description

The description field is an extra optional field that might be useful to describe the tag. For example, you might want to provide the description of "potato" with "A starchy
root vegetable, commonly consumed as a staple food in many parts of the world."
