import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "99_documentation/My New Module API/my-new-module",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "99_documentation/My New Module API/info-liveliness-endpoint",
          label: "Info: Liveliness Endpoint",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "99_documentation/My New Module API/info-readiness-endpoint",
          label: "Info: Readiness Endpoint",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "99_documentation/My New Module API/info-version-endpoint",
          label: "Info: Version Endpoint",
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
          id: "99_documentation/My New Module API/get-all-entities",
          label: "Get All Entities",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "99_documentation/My New Module API/get-entity-by-id",
          label: "Get Entity by Id",
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
          id: "99_documentation/My New Module API/update-entity-by-id",
          label: "Update entity by Id",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
