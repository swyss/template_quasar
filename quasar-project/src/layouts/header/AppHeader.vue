<script setup>
// imports
import { useQuasar } from "quasar";
import TitleToolbar from "layouts/header/TitleToolbar.vue";
import MainToolbar from "layouts/header/MainToolbar.vue";
// variables
const $q = useQuasar();
const msg = "Hello, from APP-Header";
// functions
function printInfo() {
  console.log(msg);
  console.log($q.version);
  console.log($q.lang.getLocale());
  console.log($q.platform.is);
}
</script>

<template>
  <q-header reveal elevated class="bg-primary text-white" height-hint="98">
    <title-toolbar></title-toolbar>
    <main-toolbar></main-toolbar>
    <q-tabs align="left">
      <q-route-tab to="/page1" label="Page One" />
      <q-route-tab to="/page2" label="Page Two" />
      <q-route-tab to="/page3" label="Page Three" />
    </q-tabs>
  </q-header>
</template>

<style scoped></style>
