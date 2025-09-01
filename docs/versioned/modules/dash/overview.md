---
sidebar_position: 1
---

# Overview

The **Dashboard (DASH)** module is a comprehensive dashboard management system that allows users to create, configure, and manage interactive dashboards with customizable widgets. It provides a flexible framework for building data visualization interfaces within web applications.

## Key Features

- **Dashboard Management**: Create, edit, and organize multiple dashboards
- **Widget System**: Extensible widget architecture with pre-built and custom widgets
- **Grid Layout**: Responsive grid-based layout system for flexible widget positioning
- **Tag System**: Categorize and filter dashboards using tags
- **Favorites**: Mark frequently used dashboards as favorites for quick access
- **Real-time Updates**: Dynamic dashboard updates and widget configuration
- **Modular Architecture**: Installable as a modlet using the CLI tool system

## Architecture

The DASH module consists of two main components:

### Backend Service (dash-app)
- **Go-based REST API** for dashboard and widget management
- **PostgreSQL database** for persistent storage of dashboards, widgets, and configurations
- **Tag service integration** for dashboard categorization
- **Authentication via IAMS** for user and tenant management

### Frontend Modlet (dash-web)
- **SvelteKit-based** user interface components
- **Grid layout system** for widget positioning and resizing
- **Widget framework** with configurable properties
- **Responsive design** with Tailwind CSS styling

## Core Concepts

### Dashboards
Dashboards are containers that hold widgets in a grid layout. Each dashboard has:
- Name and description
- Grid-based layout configuration
- Associated tags for categorization
- Favorite status for quick access

### Widgets
Widgets are reusable components that display data or provide functionality:
- **Configurable properties** (title, dimensions, data sources)
- **Grid positioning** (row, column, width, height)
- **Type system** with constraints (min/max dimensions, limits)
- **Custom widget development** support

### Tags
Tags provide a categorization system for dashboards:
- **Filterable organization** of dashboards
- **Shared across tenants** where appropriate
- **Dynamic assignment** to multiple dashboards

## Integration Points

The DASH module integrates with several other AOH services:

- **IAMS**: User authentication and tenant management
- **TAG Service**: Tag management and categorization
- **Web-base**: Modlet framework and shared UI components

## Use Cases

- **Operational Dashboards**: Real-time monitoring and metrics visualization
- **Business Intelligence**: Data analysis and reporting interfaces
- **Custom Applications**: Domain-specific dashboard solutions
- **Multi-tenant Environments**: Tenant-specific dashboard configurations
