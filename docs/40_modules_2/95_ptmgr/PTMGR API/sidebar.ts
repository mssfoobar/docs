import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/95_ptmgr/PTMGR API/push-token-manager",
    },
    {
      type: "category",
      label: "ptmgr",
      items: [
        {
          type: "doc",
          id: "40_modules/95_ptmgr/PTMGR API/put-token",
          label: "Put Token",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "40_modules/95_ptmgr/PTMGR API/liveness",
          label: "Liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/95_ptmgr/PTMGR API/readiness",
          label: "Readiness",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
