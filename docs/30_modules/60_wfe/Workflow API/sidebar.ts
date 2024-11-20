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
          id: "40_modules/60_wfe/Workflow API/1-liveness",
          label: "1. Liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/2-readiness",
          label: "2. Readiness",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "workflow_template",
      items: [
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/3-save-workflow-template",
          label: "3. Save workflow template",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/4-publish-workflow-template",
          label: "4. Publish workflow template",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/5-list-workflow-templates",
          label: "5. List workflow templates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/6-get-workflow-template",
          label: "6. Get workflow template",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/7-delete-workflow-template",
          label: "7. Delete workflow template",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "workflow",
      items: [
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/8-start-workflow-execution",
          label: "8. Start workflow execution",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/9-get-workflow-execution-list",
          label: "9. Get workflow execution list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/10-get-workflow-execution-state-history",
          label: "10. Get workflow execution state history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/11-terminate-workflow-execution",
          label: "11. Terminate workflow execution",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/60_wfe/Workflow API/12-signal-workflow-activity",
          label: "12. Signal workflow activity",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
