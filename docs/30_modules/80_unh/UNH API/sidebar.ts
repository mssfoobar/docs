import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/80_unh/UNH API/universal-notification-hub",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/liveness",
          label: "Liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/readiness",
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
          id: "40_modules/80_unh/UNH API/create-notification-template",
          label: "Create Notification Template",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/list-notification-templates",
          label: "List Notification Templates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/get-notification-template-by-id",
          label: "Get Notification Template By Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/edit-notification-template",
          label: "Edit Notification Template",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/delete-notification-template",
          label: "Delete Notification Template",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/list-email-channels",
          label: "List Email Channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/list-push-notification-channels",
          label: "List Push Notification Channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/list-custom-channels",
          label: "List Custom Channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/create-distribution-list",
          label: "Create Distribution List",
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
          id: "40_modules/80_unh/UNH API/create-email-channel",
          label: "Create Email Channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/get-email-channel",
          label: "Get Email Channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/edit-email-channel",
          label: "Edit Email Channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/delete-email-channel",
          label: "Delete Email Channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/create-push-notification-channel",
          label: "Create Push Notification Channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/get-push-notification-channel",
          label: "Get Push Notification Channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/edit-push-notification-channel",
          label: "Edit Push Notification Channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/delete-push-notification-channel",
          label: "Delete Push Notification Channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/create-custom-channel",
          label: "Create Custom Channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/get-custom-channel",
          label: "Get Custom Channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/edit-custom-channel",
          label: "Edit Custom Channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/delete-custom-channel",
          label: "Delete Custom Channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/create-custom-channel-parameter",
          label: "Create Custom Channel Parameter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/list-custom-channel-parameters",
          label: "List Custom Channel Parameters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/get-custom-channel-parameter",
          label: "Get Custom Channel Parameter",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/edit-custom-channel-parameter",
          label: "Edit Custom Channel Parameter",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/delete-custom-channel-parameter",
          label: "Delete Custom Channel Parameter",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/list-distribution-lists",
          label: "List Distribution Lists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/get-distribution-list",
          label: "Get Distribution List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/edit-distribution-list",
          label: "Edit Distribution List",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/delete-distribution-list",
          label: "Delete Distribution List",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/send-notification",
          label: "Send Notification",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
