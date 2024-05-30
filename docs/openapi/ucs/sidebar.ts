import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openapi/ucs/room-management",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "openapi/ucs/server-liveness",
          label: "Server liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/ucs/server-readiness",
          label: "Server readiness",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "rooms",
      items: [
        {
          type: "doc",
          id: "openapi/ucs/create-room",
          label: "Create room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/ucs/list-rooms",
          label: "List rooms",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/ucs/get-room-info",
          label: "Get room info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/ucs/update-room-info",
          label: "Update room info",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "openapi/ucs/close-room",
          label: "Close room",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/ucs/get-chat-info-by-room-id",
          label: "Get chat info by room ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/ucs/list-chat-messages",
          label: "List chat messages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/ucs/list-chat-messages-in-a-range",
          label: "List chat messages in a range",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/ucs/kick-user",
          label: "Kick user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/ucs/archive-room-for-user-id",
          label: "Archive room for user id",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/ucs/unarchive-room-for-user-id",
          label: "Unarchive room for user id",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/ucs/grant-administrator-rights-to-user-id",
          label: "Grant administrator rights to user id",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/ucs/revoke-administrator-rights-from-user-id",
          label: "Revoke administrator rights from user id",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openapi/ucs/update-announcement",
          label: "Update announcement",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openapi/ucs/delete-announcement",
          label: "Delete announcement",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "playback",
      items: [
        {
          type: "doc",
          id: "openapi/ucs/create-playback-room",
          label: "Create playback room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/ucs/start-playback",
          label: "Start playback",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/ucs/pause-playback",
          label: "Pause playback",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/ucs/stop-playback",
          label: "Stop playback",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "attachment",
      items: [
        {
          type: "doc",
          id: "openapi/ucs/file-upload",
          label: "File upload",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openapi/ucs/file-download",
          label: "File download",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "chat1to1",
      items: [
        {
          type: "doc",
          id: "openapi/ucs/create-chat-1-1-room",
          label: "Create chat 1-1 room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openapi/ucs/close-chat-1-1-room",
          label: "Close chat 1-1 room",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
