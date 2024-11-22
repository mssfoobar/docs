import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/90_tag/Tag API/tag",
    },
    {
      type: "category",
      label: "default",
      items: [
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/liveness",
          label: "Liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/readiness",
          label: "Readiness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/get-tag-paginated",
          label: "Get Tag (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/create-tag",
          label: "Create Tag",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/get-tag-by-id",
          label: "Get Tag by Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/update-tag-by-id",
          label: "Update Tag by Id",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/delete-tag-by-id",
          label: "Delete Tag by Id",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/get-tag-by-text",
          label: "Get Tag by Text",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/update-tag-by-text",
          label: "Update Tag by Text",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/delete-tag-by-text",
          label: "Delete Tag by Text",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/get-tags-by-text-list",
          label: "Get Tags by Text List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/90_tag/Tag API/get-tags-by-id-list",
          label: "Get Tags by Id List",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
