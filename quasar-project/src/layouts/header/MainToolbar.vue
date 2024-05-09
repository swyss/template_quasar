<script setup>
// imports
import { useAppProperties} from "stores/app-properties";
// variables
const app_properties = useAppProperties();
// functions
</script>

<template>
  <q-toolbar>
    <q-btn dense flat round icon="bi-list" @click="app_properties.toggleLeftDrawer()" />
    <q-toolbar-title>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"  alt="img"/>
      </q-avatar>
      Title
    </q-toolbar-title>
    <q-btn dense flat round icon="bi-sliders" @click="app_properties.toggleRightDrawer()" />
  </q-toolbar>
</template>

<style scoped></style>
