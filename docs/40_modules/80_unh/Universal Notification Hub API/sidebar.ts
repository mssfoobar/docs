import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/80_unh/Universal Notification Hub API/universal-notification-hub",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/liveness",
          label: "Liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/readiness",
          label: "Readiness",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin",
      items: [
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/create-notification-template",
          label: "Create Notification Template",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/get-notification-template-by-id",
          label: "Get Notification Template By ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/edit-notification-template",
          label: "Edit Notification Template",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/delete-notification-template",
          label: "Delete Notification Template",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/create-distribution-template",
          label: "Create Distribution Template",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "unh",
      items: [
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/create-custom-channel-provider",
          label: "Create Custom Channel Provider",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/get-custom-channel-provider",
          label: "Get Custom Channel Provider",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/edit-custom-channel-provider",
          label: "Edit Custom Channel Provider",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/delete-custom-channel-provider",
          label: "Delete Custom Channel Provider",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/create-custom-channel-parameter",
          label: "Create Custom Channel Parameter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/list-custom-channel-parameter",
          label: "List Custom Channel Parameter",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/get-custom-channel-parameter",
          label: "Get Custom Channel Parameter",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/edit-custom-channel-parameter",
          label: "Edit Custom Channel Parameter",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/delete-custom-channel-parameter",
          label: "Delete Custom Channel Parameter",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/get-distribution-template",
          label: "Get Distribution Template",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/edit-distribution-template",
          label: "Edit Distribution Template",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/delete-distribution-template",
          label: "Delete Distribution Template",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/send-notification",
          label: "Send Notification",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
