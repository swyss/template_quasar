import { defineStore } from "pinia";
//
export const useAppMenus = defineStore("menus", () => {
  const leftMenuList = [
    {
      icon: "bi-list",
      label: "Inbox",
      separator: true,
    },
    {
      icon: "bi-list",
      label: "Spam",
      separator: true,
    },
    {
      icon: "bi-list",
      label: "Trash",
      separator: false,
    },
    {
      icon: "bi-list",
      label: "Spam",
      separator: true,
    },
    {
      icon: "bi-list",
      label: "Settings",
      separator: false,
    },
    {
      icon: "bi-list",
      label: "Send Feedback",
      separator: false,
    },
    {
      icon: "bi-list",
      iconColor: "primary",
      label: "Help",
      separator: false,
    },
  ];
  const rightMenuList = [
    {
      icon: "bi-list",
      label: "Inbox",
      separator: true,
    }
  ];
  //
  return { leftMenuList, rightMenuList };
});
