<script setup>
// imports
import { useAppProperties} from "stores/app-properties";
// variables
const app_properties = useAppProperties();
// functions
</script>

<template>
  <q-drawer show-if-above v-model="app_properties.leftDrawerOpen" side="left" bordered>
    <!-- drawer content -->
  </q-drawer>
</template>

<style scoped></style>
