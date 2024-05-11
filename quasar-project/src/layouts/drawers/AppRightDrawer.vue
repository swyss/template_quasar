<script setup>
defineOptions({
  name: "RightDrawer",
});
// imports
import { useAppProperties } from "stores/general/app-properties";
import { useAppMenus } from "stores/general/app-menu";
// variables
const app_properties = useAppProperties();
const app_menus = useAppMenus();
// functions
function handleClick(menuItem) {
  console.log(menuItem);
}
</script>

<template>
  <q-drawer
    v-model="app_properties.rightDrawerOpen"
    side="right"
    overlay
    elevated
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in app_menus.rightMenuList" :key="index">
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
