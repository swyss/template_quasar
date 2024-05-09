<script setup>
defineOptions({
  name: "TitleToolbar",
});
// imports
import { useAppProperties } from "stores/app-properties";
import { useAppInfos } from "stores/app-info";
// variable
const app_properties = useAppProperties();
const app_infos = useAppInfos();
// functions
</script>

<template>
  <q-toolbar>
    <q-toolbar-title>
      <q-avatar>
        <img
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          alt="alt"
        />
      </q-avatar>
      Title
    </q-toolbar-title>
    <q-space></q-space>
    <q-btn padding="sm md" dense flat square>
      <q-icon name="bi-person-square" />
    </q-btn>
    <q-btn padding="sm" dense flat square @click="app_infos.printInfo()">
      <q-icon name="bi-info-circle" />
    </q-btn>
    <q-btn padding="sm" dense flat square @click="app_properties.toggleDarkMode"
      ><q-icon name="bi-moon-stars"
    /></q-btn>
  </q-toolbar>
</template>

<style scoped></style>
