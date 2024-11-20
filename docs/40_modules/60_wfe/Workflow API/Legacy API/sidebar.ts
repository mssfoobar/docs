import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/60_wfe/Workflow API/workflow-management",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/liveness",
          label: "liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/readiness",
          label: "readiness",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "workflow",
      items: [
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/save-workflow",
          label: "Save workflow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/publish-workflow",
          label: "Publish workflow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/start-workflow",
          label: "Start workflow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/get-workflow",
          label: "Get workflow",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/get-workflow-designer",
          label: "Get workflow designer",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/terminate-workflow",
          label: "Terminate Workflow",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/signal-workflow",
          label: "Signal Workflow",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "form",
      items: [
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/get-form-template",
          label: "Get form template",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/save-form-template",
          label: "Save form template",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
