import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/70_ims/Incident Management System API/incident-management-system",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/liveness",
          label: "liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/readiness",
          label: "readiness",
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
          id: "40_modules/70_ims/Incident Management System API/request-incident-info",
          label: "Request incident info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/create-incident",
          label: "Create incident",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/request-incident-info-by-id",
          label: "Request incident info by id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/request-incident-updates",
          label: "Request incident updates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/create-incident-updates",
          label: "Create incident updates",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/update-incident-by-id",
          label: "Update incident by id",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
