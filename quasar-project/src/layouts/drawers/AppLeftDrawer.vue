<script setup>
defineOptions({
  name: "LeftDrawer",
});
// imports
import { useAppProperties } from "stores/app-properties";
// variables
const app_properties = useAppProperties();
const menuList = [
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
// functions
</script>

<template>
  <q-drawer
    show-if-above
    v-model="app_properties.leftDrawerOpen"
    side="left"
    bordered
    class="q-pa-sm"
  >
    <q-scroll-area class="fit q-pa-sm">
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style scoped></style>
