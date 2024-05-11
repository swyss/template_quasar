<template>
  <router-view />
</template>

<script setup>
// imports
import { useAppProperties } from "stores/general/app-properties";
import { useAppInfos } from "stores/general/app-info";
import {onMounted, onUnmounted, onUpdated, ref} from "vue";
// variables
const appProperties = useAppProperties();
const appInfos = useAppInfos();
const counter = ref(0);
//
defineOptions({
  name: "App",
});
// functions
console.log(`APP`)
// Lifecycle Hooks
// onMounted Hook: Executes logic after component is mounted
onMounted(() => {
  console.log(`APP is now mounted.`)
  appProperties.init();
  appInfos.printInfo();
})
// onUpdated Hook: Executes logic after component is updated
onUpdated(() => {
  console.log('APP is updated');
});
// onUnmounted Hook: Executes logic before component is unmounted
onUnmounted(() => {
  console.log('APP is unmounted');
});
const increment = () => {
  counter.value++;
};
</script>
