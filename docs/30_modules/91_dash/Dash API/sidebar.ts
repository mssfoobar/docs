import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/91_dash/Dash API/dash",
    },
    {
      type: "category",
      label: "category",
      items: [
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/create-category",
          label: "Create Category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-category-paginated",
          label: "Get Category (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-category-by-id",
          label: "Get Category by Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/update-category-by-id",
          label: "Update Category by Id",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-category-by-id",
          label: "Delete Category by Id",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-category-by-name",
          label: "Get Category by Name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/update-category-by-name",
          label: "Update Category by Name",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-category-by-name",
          label: "Delete Category by Name",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "dashboard",
      items: [
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/create-dashboard",
          label: "Create Dashboard",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-dashboard-paginated",
          label: "Get Dashboard (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-dashboard-list-by-user-id-paginated",
          label: "Get Dashboard List by User Id (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-dashboard-layout-by-id",
          label: "Get Dashboard (Layout) by Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/update-dashboard-by-id",
          label: "Update Dashboard by Id",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-dashboard-by-id",
          label: "Delete Dashboard by Id",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-dashboard-layout-by-name",
          label: "Get Dashboard (Layout) by Name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/update-dashboard-by-name",
          label: "Update Dashboard by Name",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-dashboard-by-name",
          label: "Delete Dashboard by Name",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "dashboard > tag_mapping",
      items: [
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/create-dashboard-tag-mapping",
          label: "Create Dashboard Tag Mapping",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-dashboard-tag-mapping-paginated",
          label: "Get Dashboard Tag Mapping (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/associate-many-tags-to-dashboard-id",
          label: "Associate Many Tags to Dashboard Id",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-dashboard-tag-mapping-by-dashboard-id",
          label: "Delete Dashboard Tag Mapping by Dashboard Id",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-dashboard-tag-mappings-by-dashboard-id",
          label: "Get Dashboard Tag Mappings by Dashboard Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-dashboard-tag-mapping-by-id",
          label: "Delete Dashboard Tag Mapping by Id",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/update-dashboard-tag-mapping-by-id",
          label: "Update Dashboard Tag Mapping By Id",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-dashboard-tag-mapping-by-id",
          label: "Get Dashboard Tag Mapping by Id",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "favourite",
      items: [
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/create-favourite",
          label: "Create Favourite",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-favourite-paginated",
          label: "Get Favourite (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-favourite-by-user-dashboard-ids",
          label: "Delete Favourite by User & Dashboard Id's",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-favourite-by-id",
          label: "Get Favourite by Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/update-favourite-by-id",
          label: "Update Favourite by Id",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-favourite-by-id",
          label: "Delete Favourite by Id",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "widget",
      items: [
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/create-widget",
          label: "Create Widget",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-widget-paginated",
          label: "Get Widget (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-widget-by-id",
          label: "Get Widget by Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/update-widget-by-id",
          label: "Update Widget by Id",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-widget-by-id",
          label: "Delete Widget by Id",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "widget > type",
      items: [
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/create-widget-type",
          label: "Create Widget Type",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-widget-type-paginated",
          label: "Get Widget Type (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-widget-type-by-id",
          label: "Get Widget Type by Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/update-widget-type-by-id",
          label: "Update Widget Type by Id",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-widget-type-by-id",
          label: "Delete Widget Type by Id",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "widget > shared_config",
      items: [
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/create-shared-config",
          label: "Create Shared Config",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-shared-config-paginated",
          label: "Get Shared Config (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/get-shared-config-by-id",
          label: "Get Shared Config by Id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/update-shared-config-by-id",
          label: "Update Shared Config by Id",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/delete-shared-config-by-id",
          label: "Delete Shared Config by Id",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "default",
      items: [
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/liveness",
          label: "Liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/91_dash/Dash API/readiness",
          label: "Readiness",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
