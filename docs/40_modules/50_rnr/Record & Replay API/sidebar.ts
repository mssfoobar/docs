import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/50_rnr/Record & Replay API/record-replay",
    },
    {
      type: "category",
      label: "default",
      items: [
        {
          type: "doc",
          id: "40_modules/50_rnr/Record & Replay API/request-replay-info",
          label: "Request Replay Info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/50_rnr/Record & Replay API/request-replay-init",
          label: "Request  Replay Init",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/50_rnr/Record & Replay API/request-replay-start-resume",
          label: "Request Replay Start/Resume",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/50_rnr/Record & Replay API/request-replay-stop-pause",
          label: "Request Replay Stop/Pause",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/50_rnr/Record & Replay API/request-replay-jump-init",
          label: "Request  Replay Jump Init",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/50_rnr/Record & Replay API/request-replay-end",
          label: "Request Replay End",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/50_rnr/Record & Replay API/request-replay-session",
          label: "Request Replay Session",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "40_modules/50_rnr/Record & Replay API/liveness",
          label: "liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/50_rnr/Record & Replay API/readiness",
          label: "readiness",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
