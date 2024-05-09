<template>
  <router-view />
</template>

<script setup>
// imports
import { useAppProperties } from "stores/app-properties";
import { useAppInfos } from "stores/app-info";
// variables
const app_properties = useAppProperties();
const app_infos = useAppInfos();
//
defineOptions({
  name: "App",
});
// functions
setTimeout(() => {
  app_properties.init();
  app_infos.printInfo();
}, 10);
</script>
