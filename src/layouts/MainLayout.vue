<template>
  <q-layout view="lHh Lpr lFf" style="min-width: 900px">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

});
</script>
