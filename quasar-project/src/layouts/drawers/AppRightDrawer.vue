<script setup>
// imports
import { useAppProperties} from "stores/app-properties";
// variables
const app_properties = useAppProperties();
// functions
</script>

<template>
  <q-drawer v-model="app_properties.rightDrawerOpen" side="right" overlay elevated>
    <!-- drawer content -->
  </q-drawer>
</template>

<style scoped></style>
