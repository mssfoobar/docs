# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

-   `npm run start` - Start development server
-   `npm run build` - Build the documentation site
-   `npm run serve` - Serve the built site
-   `npm run typecheck` - Run TypeScript type checking

## Project Structure

-   Documentation site built with Docusaurus 3
-   Content stored in `/docs` directory as Markdown/MDX files
-   React components in `/src/components`

## Code Style Guidelines

-   Use TypeScript for all components
-   Follow conventional commits for all commits (`type: description`)
-   Branch naming: `feat|fix|release|refactor|chore|style/description`
-   Clean and minimal React components with proper typing
-   Use Docusaurus components and features for documentation
-   Links in docs must refer to other docs by relative file paths with the file extension
-   Links in docs to collocated assets (such as images and files) must use relative paths with the file extension
-   Links in docs to global assets must use absolute paths

## Development Conventions

-   Commits must be signed with GPG
-   JSON formatting for logging
-   Use absolute file paths instead of relative
-   Ensure file structure follows project conventions
