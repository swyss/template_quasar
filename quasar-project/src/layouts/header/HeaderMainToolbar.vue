<script setup>
defineOptions({
  name: "MainToolbar",
});
// imports
import { useAppProperties } from "stores/general/app-properties";
// variables
const app_properties = useAppProperties();
// functions
</script>
<template>
  <q-toolbar>
    <q-btn
      padding="sm md"
      dense
      flat
      square
      @click="app_properties.toggleLeftDrawer()"
      ><q-icon name="bi-list"
    /></q-btn>
    <q-separator vertical inset color="on_primary" />
    <q-btn  padding="sm md" dense flat square><q-icon name="bi-house" @click="$router.replace('/home')"/></q-btn>
    <q-btn padding="sm md" dense flat square
      ><q-icon name="bi-star" color="accent"
    /></q-btn>
    <q-toolbar-title>
      <q-avatar> </q-avatar>
    </q-toolbar-title>
    <q-space></q-space>
    <q-tabs align="left">
      <q-route-tab to="/components" label="components" />
      <q-route-tab to="/graphs" label="graphs" />
      <q-route-tab to="/weather" label="weather" />
      <q-route-tab to="/axios" label="axios" />
    </q-tabs>
    <q-space></q-space>
    <q-separator vertical inset color="$on_primary" />
    <q-btn
      padding="sm md"
      dense
      flat
      square
      @click="app_properties.toggleRightDrawer()"
      ><q-icon name="bi-sliders"
    /></q-btn>
  </q-toolbar>
</template>

<style scoped></style>
