import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/80_unh/Universal Notification Hub API/universal-notification-hub",
    },
    {
      type: "category",
      label: "unh",
      items: [
        {
          type: "doc",
          id: "40_modules/80_unh/Universal Notification Hub API/liveness",
          label: "liveness",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
