<template>
  <q-card style="flex-grow: 1">
    <app-toolbar :folders="folders" :labels="labels"/>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import AppToolbar from 'src/components/AppToolbar.vue';

export default defineComponent({
  name: 'AppMain',
  components: {
    AppToolbar,
  },
  setup() {
    const folders = inject('folders');
    const labels = inject('labels');

    return {
      folders,
      labels,
    };
  },
});
</script>
