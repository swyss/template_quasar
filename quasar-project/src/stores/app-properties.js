import { defineStore } from 'pinia'
import {ref} from "vue";
//
export const useAppProperties = defineStore('properties', () => {
  const leftDrawerOpen = ref(false);
  const rightDrawerOpen = ref(false);
  //
  function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }
  function toggleRightDrawer() {
    rightDrawerOpen.value = !rightDrawerOpen.value;
  }
//
  return { leftDrawerOpen, rightDrawerOpen,toggleLeftDrawer,toggleRightDrawer}
})
