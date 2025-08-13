# AGENTS.md

This file provides context for AI agents (like Jules) working with the AGIL Ops Hub documentation repository.

## Repository Overview

This is the documentation site for AGIL Ops Hub (AOH), built with **Docusaurus 3**. AOH is a comprehensive platform consisting of multiple modules for operations management, identity and access management, real-time communications, and more.

**Deployed Site**: https://mssfoobar.github.io/docs/

## Project Structure

```
/docs/                          # Main documentation content
├── versioned/                  # Versioned documentation (current/latest)
│   ├── modules/               # Individual module documentation
│   │   ├── amm/              # Attachment Management Module
│   │   ├── dash/             # Dashboard Module
│   │   ├── gis/              # Geographic Information System
│   │   ├── iams/             # Identity & Access Management
│   │   ├── ian/              # Integrated Alerting & Notification
│   │   ├── ims/              # Inventory Management System
│   │   ├── ptmgr/            # Personal Token Manager
│   │   ├── rmt/              # Resource Management & Tracking
│   │   ├── rnr/              # Record & Replay
│   │   ├── rtus/             # Real-time Update Service
│   │   ├── tag/              # Tagging Service
│   │   ├── ucs/              # Unified Communication Service
│   │   ├── unh/              # Unified Notification Hub
│   │   ├── web-base/         # Web Base Framework
│   │   └── wfe/              # Workflow Engine
│   └── overview/             # Platform overview documentation
└── unversioned/               # Non-versioned documentation
    └── contributing/          # Contribution guidelines

/src/                          # Docusaurus React components
├── components/               # Custom React components
├── css/                     # Global styles
├── pages/                   # Custom pages
└── theme/                   # Theme customizations

/static/                      # Static assets
└── img/                     # Images and diagrams

/versioned_versioned_docs/    # Previous version snapshots
/versioned_versioned_sidebars/ # Previous version sidebars
```

## Key Technologies

-   **Frontend**: Docusaurus 3, React 19, TypeScript
-   **Documentation**: Markdown/MDX files
-   **Search**: Lunr search integration
-   **Styling**: Custom CSS, Geist font family
-   **Build**: Node.js 18+, npm

## Documentation Versioning Strategy

### Versioned Documentation (`/docs/versioned/`)

Contains documentation tied to specific versions of the **entire AGIL Ops Hub platform**. This includes:

-   Module-specific usage, configuration, and deployment guides
-   Platform overview and architecture for each version
-   Features and capabilities available in each platform release
-   API documentation that changes between platform versions

**Purpose**: Supports users running different versions of AOH platform components, as older versions may have different configurations, APIs, or behaviors.

### Unversioned Documentation (`/docs/unversioned/`)

Contains documentation that evolves continuously and applies across all platform versions:

-   **Development practices and guidelines**
-   **Documentation contribution standards**
-   **Code style and conventions**
-   **Release processes and workflows**
-   **Language-specific development guides**
-   **Repository management practices**

**Purpose**: Provides current best practices for developers and contributors that are not tied to any specific platform version.

## Module Documentation Pattern

Each module follows a consistent structure:

-   `overview/` - Module introduction and concepts
-   `quickstart/` - Getting started guides
-   `configuration/` - Configuration options
-   `deployment/` - Deployment instructions
-   `development/` - Development guides and APIs
-   `reference/` - Changelog, FAQ, known issues

## Content Guidelines

### Links

-   **Internal docs**: Use relative file paths with extensions (e.g., `./configuration.mdx`)
-   **Assets**: Use relative paths for collocated assets, absolute paths for global assets
-   **External**: Use full URLs

### Formatting

-   Follow conventional commits: `type: description`
-   Use TypeScript for all React components
-   Clean, minimal component design
-   Proper frontmatter with sidebar configuration

### File Naming

-   Use kebab-case for filenames
-   Include file extensions in links
-   Use descriptive, clear names

## Development Commands

```bash
npm run start      # Development server
npm run build      # Production build
npm run serve      # Serve built site
npm run typecheck  # TypeScript checking
```

## Working with Versions

The site supports versioned documentation:

-   Current/latest version in `/docs/versioned/`
-   Previous versions in `/versioned_versioned_docs/`
-   Version configuration in `versioned_versions.json`

## Branch Strategy

-   **Main branch**: `main` (used for PRs)
-   **Deployment**: GitHub Pages via `gh-pages` branch
-   **Branch naming**: `feat|fix|release|refactor|chore|style/description`

## Git Requirements

-   All commits must be GPG signed
-   Follow conventional commit format
-   Clean commit history preferred

## Security Considerations

-   No secrets or credentials in documentation
-   Secure deployment configurations documented
-   Authentication and authorization properly covered

## AI Agent Guidelines

When working with this repository:

1. **Read First**: Always examine existing documentation structure before making changes
2. **Follow Patterns**: Maintain consistency with existing module documentation
3. **Respect Versioning**: Understand which version you're working with
4. **Link Properly**: Use correct relative/absolute path conventions
5. **Build & Test**: Run typecheck and build commands before committing
6. **Security Focus**: This is defensive security documentation - maintain security best practices

## Common Tasks

-   **Adding new module docs**: Follow existing module structure pattern
-   **Updating configuration**: Check both versioned and unversioned docs
-   **Adding images**: Place in appropriate `/static/img/modules/[module]/` directory
-   **Cross-references**: Use proper relative linking between docs
-   **API documentation**: Follow existing API guide patterns

## Module Descriptions

-   **AMM**: Attachment Management Module - handles file and large object management
-   **DASH**: Operational dashboards and visualization
-   **GIS**: Geographic information and mapping services
-   **IAMS**: Identity, authentication, and access management (Keycloak-based)
-   **IAN**: In-app notifications system
-   **IMS**: Incident management system
-   **PTMGR**: Personal access token management
-   **RMT**: Resource Management & Tracking - asset lifecycle management and tracking
-   **RNR**: Session recording and playback capabilities
-   **RTUS**: Real-time data update and streaming service
-   **TAG**: Simple tagging service for data labeling
-   **UCS**: Unified communication and collaboration
-   **UNH**: Unified notification hub for multi-channel alerts
-   **WEB-BASE**: Common web framework and utilities
-   **WFE**: Business process workflow engine

This documentation serves system administrators, developers, and operators deploying and managing AOH platform components.
