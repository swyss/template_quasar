<script setup>
// imports
import {ref} from "vue";
// variables
const leftDrawerOpen = ref(false);
// functions
</script>

<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <!-- drawer content -->
  </q-drawer>
</template>

<style scoped></style>
