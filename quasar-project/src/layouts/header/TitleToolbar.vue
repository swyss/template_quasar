<script setup>
// imports

// variables

// functions
</script>

<template>
  <q-toolbar>
    <q-btn dense flat round icon="bi-list" @click="toggleLeftDrawer" />
    <q-toolbar-title>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"  alt="alt"/>
      </q-avatar>
      Title
    </q-toolbar-title>
    <q-btn dense flat round icon="bi-sliders" @click="toggleRightDrawer" />
  </q-toolbar>
</template>

<style scoped></style>
