<script setup>
defineOptions({
  name: "LeftDrawer",
});
// imports
import { useAppProperties } from "stores/general/app-properties";
import { useAppMenus } from "stores/general/app-menu";
// variables
const app_properties = useAppProperties();
const app_menus = useAppMenus();
// functions
</script>

<template>
  <q-drawer
    show-if-above
    v-model="app_properties.leftDrawerOpen"
    side="left"
    bordered
    class="q-pa-sm q-pt-md"
  >
    <q-scroll-area class="fit q-ptb-sm q-pl-sm">
      <q-list>
        <template
          v-for="(menuItem, index) in app_menus.leftMenuList"
          :key="index"
        >
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style scoped></style>
