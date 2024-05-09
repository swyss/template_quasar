<script setup>
defineOptions({
  name: "AppHeader",
});
// imports
import TitleToolbar from "layouts/header/TitleToolbar.vue";
import MainToolbar from "layouts/header/HeaderMainToolbar.vue";
// variables

// functions
</script>

<template>
  <q-header reveal elevated class="bg-primary text-black" height-hint="98">
    <title-toolbar></title-toolbar>
    <main-toolbar></main-toolbar>
  </q-header>
</template>

<style scoped></style>
