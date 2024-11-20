import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/94_ian/IAN API/in-app-notification",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "40_modules/94_ian/IAN API/liveness",
          label: "Liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/94_ian/IAN API/readiness",
          label: "Readiness",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "users",
      items: [
        {
          type: "doc",
          id: "40_modules/94_ian/IAN API/get-quick-access",
          label: "Get quick access",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/94_ian/IAN API/get-user-messages",
          label: "Get user messages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/94_ian/IAN API/count-unread-message",
          label: "Count unread message",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/94_ian/IAN API/update-message-status",
          label: "Update message status",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/94_ian/IAN API/mark-all-as-read",
          label: "Mark all as read",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "40_modules/94_ian/IAN API/send-message",
          label: "Send message",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
