import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "99_documentation/Example API/my-new-module",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "99_documentation/Example API/1-info-liveliness-endpoint",
          label: "1. INFO: Liveliness Endpoint",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "99_documentation/Example API/1-info-readiness-endpoint",
          label: "1. INFO: Readiness Endpoint",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "99_documentation/Example API/1-info-version-endpoint",
          label: "1. INFO: Version Endpoint",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "default",
      items: [
        {
          type: "doc",
          id: "99_documentation/Example API/2-get-all-entities",
          label: "2. GET: All Entities",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "99_documentation/Example API/2-get-entity-by-id",
          label: "2. GET: Entity by Id",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "99_documentation/Example API/2-update-entity-by-id",
          label: "2. UPDATE: Entity by Id",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
