<script setup>
defineOptions({
  name: "MainToolbar",
});
// imports
import { useAppProperties } from "stores/app-properties";
// variables
const app_properties = useAppProperties();
// functions
</script>

<template>
  <q-toolbar>
    <q-toolbar>
      <q-btn
        padding="sm md"
        dense
        flat
        square
        @click="app_properties.toggleLeftDrawer()"
        ><q-icon name="bi-list"
      /></q-btn>
      <q-separator vertical inset color="white" />
      <q-space></q-space>
      @ _uller
      <q-space></q-space>
      <q-separator vertical inset color="white" />
      <q-btn
        padding="sm md"
        dense
        flat
        square
        @click="app_properties.toggleRightDrawer()"
        ><q-icon name="bi-sliders"
      /></q-btn>
    </q-toolbar>
  </q-toolbar>
</template>

<style scoped></style>
