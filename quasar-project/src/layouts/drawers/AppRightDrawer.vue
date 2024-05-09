<script setup>
// imports
import {ref} from "vue";
// variables
const rightDrawerOpen = ref(false);
// functions
</script>

<template>
  <q-drawer v-model="rightDrawerOpen" side="right" overlay elevated>
    <!-- drawer content -->
  </q-drawer>
</template>

<style scoped></style>
