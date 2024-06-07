import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "40_modules/30_ucs/Universal Comms API/v2/room-management",
    },
    {
      type: "category",
      label: "server",
      items: [
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/server-liveness",
          label: "Server liveness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/server-readiness",
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
          id: "40_modules/30_ucs/Universal Comms API/v2/create-room",
          label: "Create room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/list-rooms",
          label: "List rooms",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/get-room-info",
          label: "Get room info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/update-room-info",
          label: "Update room info",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/close-room",
          label: "Close room",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/get-chat-info-by-room-id",
          label: "Get chat info by room ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/list-chat-messages",
          label: "List chat messages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/list-chat-messages-in-a-range",
          label: "List chat messages in a range",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/kick-user",
          label: "Kick user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/archive-room-for-user-id",
          label: "Archive room for user id",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/unarchive-room-for-user-id",
          label: "Unarchive room for user id",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/grant-administrator-rights-to-user-id",
          label: "Grant administrator rights to user id",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/revoke-administrator-rights-from-user-id",
          label: "Revoke administrator rights from user id",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/update-announcement",
          label: "Update announcement",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/delete-announcement",
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
          id: "40_modules/30_ucs/Universal Comms API/v2/create-playback-room",
          label: "Create playback room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/start-playback",
          label: "Start playback",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/pause-playback",
          label: "Pause playback",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/stop-playback",
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
          id: "40_modules/30_ucs/Universal Comms API/v2/file-upload",
          label: "File upload",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/file-download",
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
          id: "40_modules/30_ucs/Universal Comms API/v2/create-chat-1-1-room",
          label: "Create chat 1-1 room",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "40_modules/30_ucs/Universal Comms API/v2/close-chat-1-1-room",
          label: "Close chat 1-1 room",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
