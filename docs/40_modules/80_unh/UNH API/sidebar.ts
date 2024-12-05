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
          id: "40_modules/80_unh/UNH API/1-liveness",
          label: "1. Liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/2-readiness",
          label: "2. Readiness",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "unh",
      items: [
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/3-send-notification",
          label: "3. Send Notification",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/9-create-email-channel",
          label: "9. Create Email Channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/11-get-email-channel",
          label: "11. Get Email Channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/12-edit-email-channel",
          label: "12. Edit Email Channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/13-delete-email-channel",
          label: "13. Delete Email Channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/14-create-push-notification-channel",
          label: "14. Create Push Notification Channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/16-get-push-notification-channel",
          label: "16. Get Push Notification Channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/17-edit-push-notification-channel",
          label: "17. Edit Push Notification Channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/18-delete-push-notification-channel",
          label: "18. Delete Push Notification Channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/19-create-custom-channel",
          label: "19. Create Custom Channel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/21-get-custom-channel",
          label: "21. Get Custom Channel",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/22-edit-custom-channel",
          label: "22. Edit Custom Channel",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/23-delete-custom-channel",
          label: "23. Delete Custom Channel",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/24-create-custom-channel-parameter",
          label: "24. Create Custom Channel Parameter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/25-list-custom-channel-parameters",
          label: "25. List Custom Channel Parameters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/26-get-custom-channel-parameter",
          label: "26. Get Custom Channel Parameter",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/27-edit-custom-channel-parameter",
          label: "27. Edit Custom Channel Parameter",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/28-delete-custom-channel-parameter",
          label: "28. Delete Custom Channel Parameter",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/30-list-distribution-lists",
          label: "30. List Distribution Lists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/31-get-distribution-list",
          label: "31. Get Distribution List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/32-edit-distribution-list",
          label: "32. Edit Distribution List",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/33-delete-distribution-list",
          label: "33. Delete Distribution List",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "admin",
      items: [
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/4-create-notification-template",
          label: "4. Create Notification Template",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/5-list-notification-templates",
          label: "5. List Notification Templates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/6-get-notification-template-by-id",
          label: "6. Get Notification Template By Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/7-edit-notification-template",
          label: "7. Edit Notification Template",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/8-delete-notification-template",
          label: "8. Delete Notification Template",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/10-list-email-channels",
          label: "10. List Email Channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/15-list-push-notification-channels",
          label: "15. List Push Notification Channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/20-list-custom-channels",
          label: "20. List Custom Channels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/80_unh/UNH API/29-create-distribution-list",
          label: "29. Create Distribution List",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
