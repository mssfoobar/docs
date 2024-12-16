import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/70_ims/Incident Management System API/98-new-ims",
    },
    {
      type: "category",
      label: "Attributes",
      items: [
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/get-incident-attribute-by-id",
          label: "Get Incident Attribute By Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/update-incident-attribute-by-id-copy",
          label: "Update Incident Attribute By Id Copy",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Attribute Metadata",
      items: [
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/list-attribute-metadata",
          label: "List Attribute Metadata",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/add-attribute-metadata",
          label: "Add Attribute Metadata",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/delete-attribute-metadata",
          label: "Delete Attribute Metadata",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "default",
      items: [
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/create-incident",
          label: "Create Incident",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/list-incident-s",
          label: "List Incident(s)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/get-incident-by-id",
          label: "Get Incident By Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/update-incident",
          label: "Update Incident",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/70_ims/Incident Management System API/delete-incident",
          label: "Delete Incident",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
